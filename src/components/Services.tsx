import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Services.css'

export const Services: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const services = [
    { icon: 'fa-brain', title: 'AI Automation Systems', desc: 'Intelligent systems that learn and automate complex business processes.' },
    { icon: 'fa-sitemap', title: 'Business Process Automation', desc: 'Streamline workflows and eliminate bottlenecks across your organization.' },
    { icon: 'fa-globe', title: 'Website & Web App Development', desc: 'Modern, scalable, high-performance web solutions.' },
    { icon: 'fa-code', title: 'Custom Software Solutions', desc: 'Bespoke software designed for your specific needs.' },
    { icon: 'fa-credit-card', title: 'Payment & Subscription Systems', desc: 'Secure, scalable payment infrastructure and management.' },
    { icon: 'fa-users-cog', title: 'CRM & Operations Automation', desc: 'Manage relationships and operations with intelligent systems.' },
    { icon: 'fa-comments-dollar', title: 'AI Chatbots & Assistants', desc: 'Intelligent conversational AI for customer engagement.' },
    { icon: 'fa-industry', title: 'Industry-Specific Solutions', desc: 'Tailored automation for healthcare, finance, retail, and more.' }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : (index % 4) * 0.1,
        ease: 'easeOut'
      }
    })
  }

  // Disable 3D effects on touch devices or when reduced motion is preferred
  const should3DAnimate = !isTouchDevice && !prefersReducedMotion

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <span className="accent-line"></span>
        </div>

        <motion.div
          className="services-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 } } }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="service-card glass"
              onMouseEnter={() => !isTouchDevice && setHoveredCard(i)}
              onMouseLeave={() => !isTouchDevice && setHoveredCard(null)}
              whileHover={should3DAnimate ? {
                y: -8,
                boxShadow: '0 20px 40px rgba(255, 106, 0, 0.2)'
              } : {}}
              style={should3DAnimate ? {
                rotateX: hoveredCard === i ? -5 : 0,
                rotateY: hoveredCard === i ? 5 : 0,
                perspective: '1000px'
              } : {}}
            >
              <motion.div
                className="card-bg"
                animate={{ opacity: hoveredCard === i ? 1 : 0 }}
              />
              <div className="card-content">
                <motion.div
                  className="card-icon"
                  animate={should3DAnimate ? { 
                    scale: hoveredCard === i ? 1.1 : 1, 
                    rotate: hoveredCard === i ? -5 : 0 
                  } : {}}
                >
                  <i className={`fas ${service.icon}`}></i>
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <motion.div
                className="card-accent-bottom"
                animate={{ width: hoveredCard === i || isTouchDevice ? '100%' : '0%' }}
                style={{ opacity: isTouchDevice ? 0.5 : 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
