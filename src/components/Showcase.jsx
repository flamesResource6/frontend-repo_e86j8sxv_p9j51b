import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Prompt', text: 'Describe your vision.' },
  { n: '02', title: 'Evolve', text: 'AI iterates with context.' },
  { n: '03', title: 'Refine', text: 'Tune the details.' },
  { n: '04', title: 'Launch', text: 'Ship with confidence.' },
]

export default function Showcase() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How it works</h2>
            <p className="mt-3 text-slate-600 max-w-md">A focused flow that feels like tomorrow: fast, adaptive, and intentional.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative rounded-2xl p-5 bg-white/70 backdrop-blur-md border border-slate-200/80"
                >
                  <div className="text-[var(--accent)] font-mono text-sm">{s.n}</div>
                  <div className="mt-1 text-slate-900 font-semibold">{s.title}</div>
                  <div className="mt-1 text-slate-600 text-sm">{s.text}</div>
                  <div className="absolute inset-0 rounded-2xl pointer-events-none [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.6),0_0_24px_rgba(139,92,246,0.12)]" />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/80"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0" style={{background:'radial-gradient(1200px_600px_at_80%_10%,rgba(139,92,246,0.18),transparent_30%), radial-gradient(800px_400px_at_20%_80%,rgba(139,92,246,0.12),transparent_40%)'}} />
            </div>
            <div className="absolute inset-0 rounded-3xl pointer-events-none [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.6),0_0_40px_rgba(139,92,246,0.15)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
