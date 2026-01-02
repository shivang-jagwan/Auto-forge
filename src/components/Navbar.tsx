import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useScrollProgress, useScrollNav } from '../hooks/useScroll'
import './Navbar.css'

export const Navbar: React.FC = () => {
  const progress = useScrollProgress()
  const isScrolled = useScrollNav()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobile, isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.1,
        duration: prefersReducedMotion ? 0 : 0.3
      }
    })
  }

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'features', label: 'Why Us' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' }
  ]

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
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <div className="navbar-container">
          <motion.div 
            className="navbar-logo"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          >
            <i className="fas fa-cogs"></i> AutoForge
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  whileHover={prefersReducedMotion ? {} : { color: 'var(--accent-yellow)' }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
            <li>
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                Get Consultation
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="mobile-nav-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a 
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.id)
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                >
                  <button
                    className="btn btn-primary mobile-cta"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Consultation
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
