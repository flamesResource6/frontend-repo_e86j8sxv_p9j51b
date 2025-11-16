import React from 'react'
import { motion } from 'framer-motion'

// Neon line icon wrapper with subtle glow pulse
export default function NeonIcon({ icon: Icon, size = 24, className = '' }) {
  return (
    <motion.div
      initial={{ filter: 'drop-shadow(0 0 0 rgba(139, 92, 246, 0))' }}
      whileInView={{ filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))' }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className={`text-[var(--accent)] ${className}`}
    >
      <Icon size={size} strokeWidth={1.75} />
    </motion.div>
  )
}
