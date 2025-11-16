import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'A. Rao', role: 'CTO, Halo Systems', quote: 'We shipped in weeks, not quarters.' },
  { name: 'M. Chen', role: 'Design Lead, Nova', quote: 'It feels like a cofounder in the loop.' },
  { name: 'S. Alvarez', role: 'Founder, Qubit Lab', quote: 'The polish is unreal. Future-grade.' },
]

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white">What leaders say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-transparent" />
                <div>
                  <figcaption className="text-white font-semibold text-sm">{t.name}</figcaption>
                  <div className="text-white/60 text-xs">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-white/80 text-sm">“{t.quote}”</blockquote>
              <div className="absolute inset-0 rounded-2xl pointer-events-none [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_rgba(139,92,246,0.18)]" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
