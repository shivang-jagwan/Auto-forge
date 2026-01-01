import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Process } from './components/Process'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Founders } from './components/Founders'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Process />
      <Portfolio />
      <Testimonials />
      <Founders />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
