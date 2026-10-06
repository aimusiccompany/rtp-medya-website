"use client"

import type React from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
}

/** Görünüme girince yukarı doğru belirerek açılan sarmalayıcı. */
export function Reveal({ children, delay = 0, y = 28, x = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: Math.min(y, 26), x: Math.min(x, 26), scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: Math.min(delay, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Başlıkları kelime kelime açan animasyon. */
export function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}
