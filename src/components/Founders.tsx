import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Founders.css'

export const Founders: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const founders = [
    {
      name: 'Alexander Reid',
      role: 'Co-Founder & CEO',
      bio: 'AI systems architect with 8+ years building enterprise automation.',
      quote: '"We believe AI should empower businesses, not replace them."'
    },
    {
      name: 'Victoria Chen',
      role: 'Co-Founder & CTO',
      bio: 'Full-stack engineer specializing in scalable systems. MIT grad.',
      quote: '"Technology should be elegant, powerful, and built to last."'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 }
    })
  }

  return (
    <section className="founders" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Our Founders</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div
          className="founders-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="founder-card"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="founder-image"
                whileHover={{ scale: 1.05 }}
              >
                <div className="image-placeholder">
                  <i className="fas fa-user-circle"></i>
                </div>
              </motion.div>
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>
              <motion.div
                className="founder-quote"
                whileHover={{ borderLeftColor: 'var(--accent-yellow)', color: 'var(--accent-yellow)' }}
              >
                {founder.quote}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
