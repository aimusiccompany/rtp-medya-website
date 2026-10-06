"use client"

import { useEffect, useRef } from "react"

/**
 * Fareyi yumuşakça izleyen ışık halesi.
 * Boşta çalışan döngü yok: yalnızca fare hareket ederken kare üretir, yakınsayınca durur.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2,
      y = window.innerHeight / 3,
      tx = x,
      ty = y,
      raf = 0

    const tick = () => {
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0
    }
    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = "1"
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[500px] w-[500px] rounded-full opacity-0 transition-opacity duration-700 md:block"
      style={{ background: "radial-gradient(circle, rgba(217,15,28,0.09), transparent 65%)" }}
    />
  )
}
