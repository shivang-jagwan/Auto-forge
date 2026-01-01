import React from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress, useScrollNav } from '../hooks/useScroll'
import './Navbar.css'

export const Navbar: React.FC = () => {
  const progress = useScrollProgress()
  const isScrolled = useScrollNav()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ ease: 'easeOut' }}
      />

      {/* Navigation */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <motion.div 
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
          >
            <i className="fas fa-cogs"></i> AutoForge
          </motion.div>

          <ul className="nav-links">
            <li>
              <motion.a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('services')
                }}
                whileHover={{ color: 'var(--accent-yellow)' }}
              >
                Services
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#features"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('features')
                }}
                whileHover={{ color: 'var(--accent-yellow)' }}
              >
                Why Us
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#process"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('process')
                }}
                whileHover={{ color: 'var(--accent-yellow)' }}
              >
                Process
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('portfolio')
                }}
                whileHover={{ color: 'var(--accent-yellow)' }}
              >
                Portfolio
              </motion.a>
            </li>
            <li>
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Consultation
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  )
}
