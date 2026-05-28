import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'AI Development',
  'IoT Solutions',
  'Infrastructure Monitoring',
  'Automation Systems',
  'Research & Innovation',
  'Smart Safety Systems',
]

const socials = [
  { icon: <Github size={18} />, label: 'GitHub', href: '#' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
  { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:hello@infrastechs.io' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto section-padding pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                  <path d="M6 30 L20 10 L34 30" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="10" r="2.5" fill="white"/>
                  <circle cx="6" cy="30" r="2.5" fill="white"/>
                  <circle cx="34" cy="30" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl">
                Infras<span className="text-sky-400">Techs</span>
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Building Intelligent Infrastructure for the Future. AI-powered monitoring and smart automation.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-500/20 hover:text-sky-400 text-slate-400 flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-sky-500/40"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-slate-400 hover:text-sky-400 text-sm transition-colors cursor-default">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:abhinavyadav.4571@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm transition-colors">
                <Mail size={14} />
                abhinavyadav.4571@gmail.com
              </a>
              <p className="text-slate-400 text-sm">Mughalsarai, Chandauli, Uttar Pradesh</p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20">
              <p className="text-xs text-sky-300 font-semibold mb-1">💡 AI System Status</p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All systems operational
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} InfrasTechs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-xs">Privacy Policy</span>
            <span className="text-slate-600 text-xs">Terms of Service</span>
            <a
              href="mailto:hello@infrastechs.io"
              className="flex items-center gap-1 text-sky-500 text-xs font-semibold hover:text-sky-400 transition-colors"
            >
              Get in touch <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
