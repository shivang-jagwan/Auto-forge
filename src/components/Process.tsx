import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Process.css'

export const Process: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const steps = [
    { num: 1, title: 'Discovery', desc: 'Understand your business, challenges, and goals.' },
    { num: 2, title: 'Strategy', desc: 'Develop a comprehensive automation strategy.' },
    { num: 3, title: 'Design', desc: 'Architect elegant solutions with UX priority.' },
    { num: 4, title: 'Development', desc: 'Build robust, scalable systems.' },
    { num: 5, title: 'Automation', desc: 'Implement AI automation workflows.' },
    { num: 6, title: 'Support & Scaling', desc: 'Continuous optimization and growth.' }
  ]

  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 }
    })
  }

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Our Process</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div className="timeline">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              custom={i}
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.div
                className="timeline-number"
                whileHover={{ scale: 1.1 }}
              >
                {step.num}
              </motion.div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
