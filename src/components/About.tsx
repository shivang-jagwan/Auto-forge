import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './About.css'

export const About: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>About AutoForge Systems</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div
          className="about-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            {
              title: 'Who We Are',
              text: 'We are a team of expert engineers, AI specialists, and business strategists dedicated to transforming businesses through intelligent automation.'
            },
            {
              title: 'Our Mission',
              text: 'To empower businesses with cutting-edge AI and automation technologies that streamline operations and unlock exponential growth.'
            },
            {
              title: 'Our Vision',
              text: 'A world where intelligent automation is accessible to every business, enabling teams to focus on strategic growth.'
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              className="about-card glass"
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="card-accent"></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
