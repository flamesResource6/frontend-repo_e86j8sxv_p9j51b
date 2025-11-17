import React, { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', priceM: 19, priceY: 190, features: ['100 generations', 'Basic models', 'Email support'] },
  { name: 'Pro', priceM: 49, priceY: 490, features: ['Unlimited drafts', 'Priority models', 'Community access'] },
  { name: 'Enterprise', priceM: 129, priceY: 1290, features: ['Custom models', 'SLA & SSO', 'Dedicated support'] },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Pricing</h2>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <span>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative inline-flex h-6 w-11 rounded-full bg-white/70 border border-slate-200/80"
              aria-label="Toggle pricing"
            >
              <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-[var(--accent)] transition-transform ${yearly ? 'translate-x-5' : ''}`} />
            </button>
            <span>Yearly</span>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative rounded-3xl p-6 bg-white/70 backdrop-blur-xl border border-slate-200/80"
            >
              <div className="text-slate-700 text-sm">{p.name}</div>
              <div className="mt-2 text-slate-900 text-3xl font-bold">
                ${yearly ? p.priceY : p.priceM}
                <span className="ml-1 text-sm text-slate-500">{yearly ? '/year' : '/mo'}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {p.features.map(f => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center justify-center w-full rounded-xl py-2.5 bg-[var(--accent)] text-white font-semibold shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:brightness-110">
                Choose {p.name}
              </button>
              <div className="absolute inset-0 rounded-3xl pointer-events-none [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.6),0_0_40px_rgba(139,92,246,0.12)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
