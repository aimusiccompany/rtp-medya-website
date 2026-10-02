"use client"

import type React from "react"
import { useRef } from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & { tilt?: boolean }

/** Fare konumunu izleyen ışık + isteğe bağlı 3B eğilme efekti. */
export function SpotlightCard({ children, className = "", tilt: _tilt, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty("--mx", `${px * 100}%`)
    el.style.setProperty("--my", `${py * 100}%`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight glass transition-colors duration-200 hover:border-brand/50 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
