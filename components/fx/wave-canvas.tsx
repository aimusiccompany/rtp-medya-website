"use client"

import { useEffect, useRef } from "react"

/**
 * Logodaki ses dalgasından esinlenen hafif dalga animasyonu.
 * - 30 fps ile sınırlı, 6 çizgi, geniş adımlı örnekleme
 * - Ekran dışında ve sekme arka plandayken durur
 * - Hareket azaltma tercihinde tek kare çizer
 * - Açık/koyu temaya göre renk ve karıştırma modu değişir
 */
export function WaveCanvas({ className = "", intensity = 1 }: { className?: string; intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const root = document.documentElement
    let dark = root.classList.contains("dark")
    let w = 0,
      h = 0,
      raf = 0,
      t = 0,
      last = 0
    let visible = true

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const LINES = 6
    const render = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over"
      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1)
        const centered = 1 - Math.abs(p - 0.5) * 2
        const baseY = h * (0.5 + (p - 0.5) * 0.5)
        const amp = h * 0.11 * intensity * (0.35 + centered * 0.65)
        const alpha = (dark ? 0.12 : 0.1) + centered * (dark ? 0.36 : 0.3)
        const grad = ctx.createLinearGradient(0, 0, w, 0)
        grad.addColorStop(0, "rgba(217,15,28,0)")
        grad.addColorStop(0.3, `rgba(217,15,28,${alpha})`)
        grad.addColorStop(0.6, `rgba(255,85,96,${alpha + 0.1})`)
        grad.addColorStop(1, "rgba(217,15,28,0)")
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2 + centered * 1.2
        ctx.beginPath()
        for (let x = 0; x <= w; x += 12) {
          const nx = x / w
          const env = Math.sin(nx * Math.PI)
          const y =
            baseY +
            Math.sin(nx * 7 + t * 0.9 + i * 0.55) * amp * env +
            Math.sin(nx * 14 - t * 1.3 + i) * amp * 0.3 * env
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.globalCompositeOperation = "source-over"
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (now - last < 33) return // ~30 fps
      last = now
      t += 0.033
      render()
    }
    const start = () => {
      cancelAnimationFrame(raf)
      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) start()
      else cancelAnimationFrame(raf)
    })
    const mo = new MutationObserver(() => {
      dark = root.classList.contains("dark")
      render()
    })

    resize()
    render()
    start()
    io.observe(canvas)
    mo.observe(root, { attributes: true, attributeFilter: ["class"] })
    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", start)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      mo.disconnect()
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", start)
    }
  }, [intensity])

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />
}
