import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, MapPin, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'abhinavyadav.4571@gmail.com', href: 'mailto:abhinavyadav.4571@gmail.com' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Mughalsarai, Chandauli, Uttar Pradesh', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setSending(true)
    // Send form data to abhinavyadav1101627@gmail.com
    await new Promise((r) => setTimeout(r, 1600))
    // In production, integrate with EmailJS / Formspree pointed at abhinavyadav1101627@gmail.com
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="py-24 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-sky-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Build "
          highlight="Together"
          subtitle="Have a project in mind? Want to explore how AI can protect your infrastructure? We'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-3.5 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-500 flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium mb-0.5">{item.label}</p>
                      <p className="text-sm text-slate-700 font-semibold group-hover:text-sky-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>


          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm py-2.5 px-6">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                      <MessageSquare size={16} className="text-sky-500" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900">Send a Message</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Full Name <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email Address <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g., Bridge Monitoring System Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Message <span className="text-sky-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, infrastructure challenges, or how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-100 px-4 py-2.5 rounded-lg">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-400 mt-2">
                    We respect your privacy. Your info is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
