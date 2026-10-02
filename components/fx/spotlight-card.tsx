"use client"

import type React from "react"
import { useRef } from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & { tilt?: boolean }

/** Fare konumunu izleyen ışık + isteğe bağlı 3B eğilme efekti. */
export function SpotlightCard({ children, className = "", tilt = false, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty("--mx", `${px * 100}%`)
    el.style.setProperty("--my", `${py * 100}%`)
    if (tilt) {
      el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 7}deg) rotateY(${(px - 0.5) * 9}deg)`
    }
  }
  const onLeave = () => {
    if (tilt && ref.current) ref.current.style.transform = ""
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight glass transition-[transform,border-color] duration-300 hover:border-brand/50 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
