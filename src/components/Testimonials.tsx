import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Testimonials.css'

export const Testimonials: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      text: 'AutoForge completely transformed how we manage operations. Reduced manual work by 70% in 3 months.',
      author: 'Sarah Chen',
      title: 'VP Operations, TechCorp'
    },
    {
      text: 'Professional, knowledgeable, and results-driven. They understood our business perfectly.',
      author: 'Marcus Johnson',
      title: 'CEO, Financial Services Inc'
    },
    {
      text: 'The chatbot solution increased customer satisfaction by 35%. Exceptional support!',
      author: 'Emma Rodriguez',
      title: 'Director, E-Commerce Operations'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>What Clients Say</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div
          className="testimonial-slider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card glass"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[current].text}"</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonials[current].author}</div>
                <div className="author-title">{testimonials[current].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="testimonial-nav"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.button
            className="testimonial-prev"
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          <motion.button
            className="testimonial-next"
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
