import React from 'react'
import { motion } from 'framer-motion'
import { useInView, useScrollY } from '../hooks/useScroll'
import './Features.css'

export const Features: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const scrollY = useScrollY()

  const featureVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.1 }
    })
  }

  return (
    <section className="features" id="features" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose AutoForge</h2>
          <span className="accent-line"></span>
        </div>

        <div className="features-grid">
          <motion.div className="features-left">
            {[
              { num: '01', title: 'AI-First Approach', desc: 'Every solution built with intelligent automation at its core.' },
              { num: '02', title: 'Custom-Built Solutions', desc: 'No templates. Every system engineered for your business.' },
              { num: '03', title: 'Scalable Architecture', desc: 'Built to grow from startup to enterprise.' },
              { num: '04', title: 'Security First', desc: 'Enterprise-grade security built into every system.' },
              { num: '05', title: 'Dedicated Support', desc: 'Direct access to our technical team.' },
              { num: '06', title: 'Long-Term Partnership', desc: 'Invested in your success and growth.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="feature-item"
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <motion.div className="feature-number">{feature.num}</motion.div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="features-right"
            style={{ y: scrollY * 0.2 }}
          >
            <div className="feature-visual">
              <motion.div
                className="visual-element"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div className="element-1" />
                <motion.div className="element-2" />
                <motion.div className="element-3" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
