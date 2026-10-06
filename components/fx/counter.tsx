"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"

/**
 * Sayarak yükselen rakam. Biçimler: "46.000+", "%98", "24/7" (24/7 sabit kalır).
 * Gerçek değer her zaman ilk render'da görünür (SEO, JS'siz ve mobil güvenli);
 * yalnızca ekran dışında başlayan rakamlar, görünüme girerken 0'dan sayar.
 */
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const m = value.match(/^(\D*)([\d.]+)(\D*)$/)
  const animatable = !!m && !value.includes("/")
  const [text, setText] = useState(value)
  const armed = useRef(false)

  // Ekran dışında başlıyorsa sıfırla ve animasyona hazırla
  useEffect(() => {
    const el = ref.current
    if (!el || !animatable || !m) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const r = el.getBoundingClientRect()
    if (r.top > window.innerHeight * 0.9) {
      armed.current = true
      setText(`${m[1]}0${m[3]}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!inView || !armed.current || !m) return
    const target = Number(m[2].replace(/\./g, ""))
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(`${m[1]}${Math.round(v).toLocaleString("tr-TR")}${m[3]}`),
      onComplete: () => setText(value),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return <span ref={ref}>{text}</span>
}
