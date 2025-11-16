import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 300, damping: 40 })
  const sy = useSpring(y, { stiffness: 300, damping: 40 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      {/* Core dot */}
      <motion.div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-[var(--accent)]"
        style={{ translateX: sx, translateY: sy }}
      />
      {/* Soft glow */}
      <motion.div
        className="pointer-events-none fixed z-40 h-10 w-10 rounded-full opacity-25"
        style={{ translateX: sx, translateY: sy, marginLeft: -20, marginTop: -20, boxShadow: '0 0 60px 20px rgba(139,92,246,0.35)' }}
      />
    </>
  )
}
