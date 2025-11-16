import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="text-white/60">© 2045 Nova Interface</div>
          <div className="text-white/60">Privacy</div>
          <div className="text-white/60">Terms</div>
          <div className="text-white/60">Contact</div>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
      </div>
    </footer>
  )
}
