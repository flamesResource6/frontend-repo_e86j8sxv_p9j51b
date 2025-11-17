import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
        <div className="text-slate-100 font-semibold tracking-tight">NOVA</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Stories</a>
        </nav>
        <a href="#" className="text-[var(--accent)] font-semibold">Sign in</a>
      </div>
    </header>
  )
}
