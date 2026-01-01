import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScroll'
import './Contact.css'

export const Contact: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', requirement: '', message: '' })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.requirement) {
      setMessage({ type: 'error', text: 'Please fill all required fields.' })
      return
    }
    setMessage({ type: 'success', text: '✓ Thank you! We\'ll contact you within 24 hours.' })
    setFormData({ name: '', email: '', phone: '', requirement: '', message: '' })
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2>Let's Build Something Great</h2>
          <p className="section-subtitle">Ready to transform your business with AI and automation?</p>
        </div>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            {['name', 'email', 'phone'].map((field, i) => (
              <motion.div
                key={field}
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
                <label htmlFor={field}>{field.toUpperCase()}</label>
              </motion.div>
            ))}

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <select
                id="requirement"
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                required
              >
                <option value="">Select Your Requirement</option>
                <option>AI Automation System</option>
                <option>Website & Web App</option>
                <option>Custom Software</option>
                <option>CRM Automation</option>
                <option>AI Chatbot</option>
              </select>
              <label htmlFor="requirement">REQUIREMENT</label>
            </motion.div>

            <motion.div
              className="form-group full-width"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
              />
              <label htmlFor="message">MESSAGE</label>
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Request
              <i className="fas fa-paper-plane"></i>
            </motion.button>

            {message && (
              <motion.div
                className={`form-message ${message.type}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {message.text}
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: 'fa-envelope', title: 'Email', content: 'hello@autoforgesystems.com' },
              { icon: 'fa-phone', title: 'Phone', content: '+1 (234) 567-8900' },
              { icon: 'fa-map-marker-alt', title: 'Location', content: 'San Francisco, CA • New York, NY' }
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-item"
                whileHover={{ x: 10 }}
              >
                <div className="info-icon">
                  <i className={`fas ${info.icon}`}></i>
                </div>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.content}</p>
                </div>
              </motion.div>
            ))}

            <motion.div className="social-links">
              {['linkedin', 'twitter', 'github'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, boxShadow: 'var(--glow-orange)' }}
                >
                  <i className={`fab fa-${social}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1917699999997!2d-122.40825!3d37.78994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 'none', borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
