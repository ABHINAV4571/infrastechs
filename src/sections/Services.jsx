import { motion } from 'framer-motion'
import { Brain, Wifi, Activity, Settings, FlaskConical, Shield, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    icon: <Brain size={24} />,
    title: 'AI Development',
    desc: 'Custom machine learning models and AI pipelines tailored to your infrastructure needs — from anomaly detection to predictive maintenance and NLP-powered reporting.',
    color: 'from-sky-400 to-cyan-400',
    bg: 'bg-sky-50',
    highlight: 'bg-sky-500',
    items: ['Custom ML Models', 'Data Pipelines', 'AI Integration', 'Model Optimization'],
  },
  {
    icon: <Wifi size={24} />,
    title: 'IoT Solutions',
    desc: 'End-to-end IoT deployments from hardware selection and firmware to cloud connectivity, with support for LoRaWAN, NB-IoT, WiFi, and BLE protocols.',
    color: 'from-blue-400 to-sky-400',
    bg: 'bg-blue-50',
    highlight: 'bg-blue-500',
    items: ['Sensor Networks', 'Protocol Integration', 'Edge Computing', 'OTA Updates'],
  },
  {
    icon: <Activity size={24} />,
    title: 'Infrastructure Monitoring',
    desc: 'Real-time structural health monitoring systems for dams, bridges, tunnels, and buildings — with live dashboards, automated alerts, and regulatory compliance.',
    color: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-50',
    highlight: 'bg-cyan-500',
    items: ['24/7 Monitoring', 'Live Dashboards', 'Alert Systems', 'Compliance Reports'],
  },
  {
    icon: <Settings size={24} />,
    title: 'Automation Systems',
    desc: 'Intelligent automation of inspection schedules, maintenance workflows, reporting chains, and operational processes — reducing manual effort and human error.',
    color: 'from-indigo-400 to-sky-400',
    bg: 'bg-indigo-50',
    highlight: 'bg-indigo-500',
    items: ['Workflow Automation', 'Scheduling AI', 'Process Optimization', 'System Integration'],
  },
  {
    icon: <FlaskConical size={24} />,
    title: 'Research & Innovation',
    desc: 'Collaborative R&D programs for universities, governments, and enterprises — exploring robotics, drone inspection, computer vision, and next-gen sensing technologies.',
    color: 'from-violet-400 to-sky-500',
    bg: 'bg-violet-50',
    highlight: 'bg-violet-500',
    items: ['R&D Partnerships', 'Prototype Development', 'Tech Consulting', 'Feasibility Studies'],
  },
  {
    icon: <Shield size={24} />,
    title: 'Smart Safety Systems',
    desc: 'AI-driven safety systems that monitor human presence, detect hazards, manage emergency protocols, and coordinate real-time response — keeping workers and public safe.',
    color: 'from-emerald-400 to-teal-400',
    bg: 'bg-emerald-50',
    highlight: 'bg-emerald-500',
    items: ['Hazard Detection', 'Emergency Alerts', 'Safety Compliance', 'Incident Tracking'],
  },
]

export default function Services() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="absolute right-0 center w-full h-96 bg-gradient-to-b from-sky-50/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          tag="What We Offer"
          title="Our "
          highlight="Services"
          subtitle="Comprehensive technology solutions from AI development to IoT integration — everything your infrastructure needs to become intelligent."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 24px 48px rgba(14,165,233,0.10)' }}
              className="glass-card p-6 group cursor-default transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-sky-600">{service.icon}</div>
              </div>

              {/* Top accent */}
              <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${service.color} mb-4 group-hover:w-16 transition-all duration-300`} />

              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.desc}</p>

              <ul className="space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.highlight}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 p-10 md:p-14 text-center text-white shadow-2xl shadow-sky-200"
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <h3 className="font-display font-bold text-3xl md:text-4xl mb-3 relative z-10">
            Ready to Modernize Your Infrastructure?
          </h3>
          <p className="text-sky-100 mb-8 max-w-xl mx-auto relative z-10">
            Let's discuss how InfrasTechs can deploy intelligent monitoring and AI automation for your critical assets.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="relative z-10 inline-flex items-center gap-2 bg-white text-sky-600 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
