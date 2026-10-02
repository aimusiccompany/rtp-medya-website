"use client"

import { useEffect, useRef } from "react"

/** Fareyi yumuşakça takip eden kırmızı ışık halesi (yalnızca ince imleçli cihazlarda). */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2,
      y = window.innerHeight / 2,
      tx = x,
      ty = y,
      raf = 0
    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = "1"
    }
    const tick = () => {
      x += (tx - x) * 0.12
      y += (ty - y) * 0.12
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener("mousemove", move, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[520px] w-[520px] rounded-full opacity-0 transition-opacity duration-500 md:block"
      style={{ background: "radial-gradient(circle, rgba(232,16,28,0.14), transparent 65%)" }}
    />
  )
}
