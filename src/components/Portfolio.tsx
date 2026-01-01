import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Portfolio.css'

export const Portfolio: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const projects = [
    { title: 'AI Automation Platform', desc: 'Enterprise-grade automation dashboard', tags: 'AI • Automation' },
    { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce with AI', tags: 'React • AI • Payments' },
    { title: 'Chatbot System', desc: 'Multi-language AI chatbot', tags: 'NLP • ChatGPT • Integration' },
    { title: 'CRM Automation', desc: 'Custom CRM with automation', tags: 'CRM • Automation • Analytics' },
    { title: 'Business Intelligence', desc: 'Real-time analytics system', tags: 'Data • BI • Cloud' },
    { title: 'Invoice Automation', desc: 'Intelligent invoice processing', tags: 'OCR • AI • Automation' }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 }
    })
  }

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div
          className="portfolio-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="portfolio-card"
              style={{
                background: `linear-gradient(135deg, hsl(${i * 40}, 70%, 20%)  0%, hsl(${i * 40 + 30}, 60%, 15%) 100%)`
              }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="portfolio-overlay"
                whileHover={{ opacity: 1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className="tech-tag">{project.tags}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
