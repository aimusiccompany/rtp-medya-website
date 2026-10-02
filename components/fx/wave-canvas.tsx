"use client"

import { useEffect, useRef } from "react"

/**
 * Logodaki ses dalgasından esinlenen, fareye tepki veren canlı dalga alanı.
 * Hareket azaltma tercihinde tek kare çizer; ekran dışındayken durur.
 */
export function WaveCanvas({ className = "", intensity = 1 }: { className?: string; intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let w = 0,
      h = 0,
      raf = 0,
      t = 0
    let mx = 0.5,
      my = 0.5,
      smx = 0.5,
      smy = 0.5
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const LINES = 9
    const draw = () => {
      smx += (mx - smx) * 0.05
      smy += (my - smy) * 0.05
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = "lighter"
      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1)
        const centered = 1 - Math.abs(p - 0.5) * 2
        const baseY = h * (0.5 + (p - 0.5) * 0.55)
        const amp = (h * 0.09 + h * 0.07 * smy) * intensity * (0.35 + centered * 0.65)
        const alpha = 0.1 + centered * 0.38
        const grad = ctx.createLinearGradient(0, 0, w, 0)
        grad.addColorStop(0, "rgba(122,11,18,0)")
        grad.addColorStop(0.3, `rgba(232,16,28,${alpha})`)
        grad.addColorStop(Math.min(0.9, Math.max(0.35, 0.55 + (smx - 0.5) * 0.3)), `rgba(255,90,100,${alpha + 0.15})`)
        grad.addColorStop(1, "rgba(122,11,18,0)")
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2 + centered * 1.4
        ctx.beginPath()
        for (let x = 0; x <= w; x += 6) {
          const nx = x / w
          const envelope = Math.sin(nx * Math.PI)
          const y =
            baseY +
            Math.sin(nx * 7 + t * 0.9 + i * 0.55) * amp * envelope +
            Math.sin(nx * 14 - t * 1.3 + i) * amp * 0.35 * envelope +
            Math.sin(nx * 3 + t * 0.4 + smx * 4) * amp * 0.5
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.globalCompositeOperation = "source-over"
      t += 0.016
      if (!reduce && visible) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
      my = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
    }

    const io = new IntersectionObserver(([entry]) => {
      const was = visible
      visible = entry.isIntersecting
      if (visible && !was && !reduce) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(draw)
      }
    })

    resize()
    draw()
    io.observe(canvas)
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
    }
  }, [intensity])

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />
}
