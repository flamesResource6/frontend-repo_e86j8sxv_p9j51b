import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen text-slate-900" style={{
      ['--accent']:'#8B5CF6',
    }}>
      <Cursor />
      <Header />
      <Hero />
      <div id="features"><Features /></div>
      <div id="how"><Showcase /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  )
}

export default App
