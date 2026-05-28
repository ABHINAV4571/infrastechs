import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = ['home', 'about', 'projects', 'services', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-sky-100/50 border-b border-sky-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                <path d="M6 30 L20 10 L34 30" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="10" r="2.5" fill="white"/>
                <circle cx="6" cy="30" r="2.5" fill="white"/>
                <circle cx="34" cy="30" r="2.5" fill="white"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-slate-900">
              Infras<span className="text-sky-500">Techs</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive ? 'text-sky-600' : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-sky-50 rounded-lg"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sky-50 text-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl shadow-sky-100 z-40 flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-bold text-xl text-slate-900">
                  Infras<span className="text-sky-500">Techs</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-sky-50 text-slate-600">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50 font-medium transition-all duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-center mt-6"
              >
                Get Started
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
