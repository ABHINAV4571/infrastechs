import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Cpu, Shield, Zap } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'

const stats = [
  { value: '< 2s', label: 'Alert Response' },
  { value: '24/7', label: 'AI Monitoring' },
]

const badges = [
  { icon: <Cpu size={14} />, text: 'AI-Powered' },
  { icon: <Shield size={14} />, text: 'Safety First' },
  { icon: <Zap size={14} />, text: 'Real-time' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-cyan-50/40">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-100/50 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.07) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <ParticleBackground />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center section-padding pt-28 pb-20 text-center max-w-6xl mx-auto w-full">
        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 flex-wrap justify-center"
        >
          {badges.map((b, i) => (
            <motion.span
              key={b.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="flex items-center gap-1.5 bg-white/80 border border-sky-100 text-sky-600 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm shadow-sky-100"
            >
              {b.icon}
              {b.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-slate-900 leading-[1.07] tracking-tight mb-6"
        >
          Building{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Intelligent</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <br />
          Infrastructure
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-4 font-body"
        >
          Building Intelligent Infrastructure for the Future — AI-powered monitoring, smart IoT
          integration, and autonomous systems that protect and optimize critical infrastructure.
        </motion.p>

        {/* Typed sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-sm text-sky-500 mb-10"
        >
          <span className="text-sky-400">&gt; </span>
          AI Monitoring · IoT Integration · Smart Safety · Real-time Analytics
          <span className="cursor-blink ml-1 text-sky-400">|</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary flex items-center gap-2 group"
          >
            Explore Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-outline flex items-center gap-2"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="grid grid-cols-2 gap-6 mt-20 w-full max-w-sm mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="glass-card px-4 py-5 text-center glow-blue"
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-sky-600 mb-1">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors group"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </div>
  )
}
