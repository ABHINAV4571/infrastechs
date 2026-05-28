import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <span className="tag mb-4 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
