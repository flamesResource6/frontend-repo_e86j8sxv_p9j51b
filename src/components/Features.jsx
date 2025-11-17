import React from 'react'
import { motion } from 'framer-motion'
import NeonIcon from './NeonIcon'
import { Zap, Shield, Cpu, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant velocity',
    desc: 'From idea to interface in minutes.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Privacy-first, enterprise-ready.',
  },
  {
    icon: Cpu,
    title: 'Adaptive AI core',
    desc: 'Learns your workflow and improves.',
  },
  {
    icon: Sparkles,
    title: 'Polished micro-motion',
    desc: 'Subtle, purposeful interactions.',
  },
]

export default function Features() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-slate-200/80 hover:border-[var(--accent)]/40 transition-colors"
            >
              <div className="mb-4">
                <NeonIcon icon={f.icon} size={28} />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              <div className="absolute inset-0 rounded-2xl pointer-events-none [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.6),0_0_24px_rgba(139,92,246,0.12)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
