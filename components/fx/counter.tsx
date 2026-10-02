"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"

/** Görünüme girince sayarak yükselen sayı. Biçimler: "46.000+", "%98", "24/7" (24/7 sabit kalır). */
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const m = value.match(/^(\D*)([\d.]+)(\D*)$/)
  const animatable = !!m && !value.includes("/")
  const [text, setText] = useState(animatable && m ? `${m[1]}0${m[3]}` : value)

  useEffect(() => {
    if (!inView) return
    if (!animatable || !m) {
      setText(value)
      return
    }
    const target = Number(m[2].replace(/\./g, ""))
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(`${m[1]}${Math.round(v).toLocaleString("tr-TR")}${m[3]}`),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value])

  return <span ref={ref}>{text}</span>
}
