import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden" aria-label="Hero">
      {/* Background grid + glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-25" style={{backgroundImage:'radial-gradient(circle at 20% 10%, rgba(168,85,247,0.08), transparent 35%), radial-gradient(circle at 80% 30%, rgba(124,58,237,0.12), transparent 40%)'}}/>
      </div>

      {/* Spline 3D scene */}
      <div className="relative z-0 h-[60vh] sm:h-[70vh] lg:h-[78vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <motion.h1
              className="pointer-events-auto text-4xl md:text-6xl font-extrabold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build smarter. Move faster.
            </motion.h1>
            <motion.p
              className="pointer-events-auto mt-4 md:mt-6 text-[15px] md:text-lg text-white/70 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              AI that evolves with you. A premium interface for the next era of creation.
            </motion.p>
            <div className="pointer-events-auto mt-8 flex items-center gap-3">
              <MagneticButton>Get Started</MagneticButton>
              <MagneticButton variant="outline">Learn More</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
