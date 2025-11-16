import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

// Magnetic CTA button with glow
export default function MagneticButton({ children, variant = 'primary', onClick }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(springY, [-30, 30], [10, -10])
  const rotateY = useTransform(springX, [-30, 30], [-10, 10])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX / 4)
    y.set(relY / 4)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const base =
    'relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0'

  const styles = {
    primary:
      'text-white bg-[var(--accent)] shadow-[0_0_24px_rgba(124,58,237,0.45)] hover:brightness-110',
    outline:
      'text-[var(--accent)] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10',
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, rotateX, rotateY }}
      onClick={onClick}
      className={`${base} ${styles[variant]} [box-shadow:0_0_0_1px_rgba(124,58,237,.35)_inset,0_0_32px_rgba(124,58,237,.35)]`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),transparent_60%)]" />
    </motion.button>
  )
}
