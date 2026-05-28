import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb, Rocket, Brain, Globe } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const pillars = [
  {
    icon: <Target size={22} />,
    title: 'Our Mission',
    desc: 'To build and deploy intelligent infrastructure systems that protect lives, optimize critical assets, and empower communities through cutting-edge AI and IoT technologies.',
    color: 'from-sky-400 to-cyan-400',
    bg: 'bg-sky-50',
  },
  {
    icon: <Eye size={22} />,
    title: 'Our Vision',
    desc: 'A world where every bridge, dam, road, and structure is autonomously monitored, self-reporting, and protected by AI systems — preventing disasters before they occur.',
    color: 'from-blue-400 to-sky-400',
    bg: 'bg-blue-50',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Innovation Focus',
    desc: 'We combine machine learning, edge computing, IoT sensor networks, and real-time data analytics to create systems that think, adapt, and respond at machine speed.',
    color: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-50',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Future Goals',
    desc: 'Expanding our AI monitoring platforms globally, integrating satellite telemetry, building autonomous inspection drones, and deploying predictive maintenance across national infrastructure.',
    color: 'from-sky-500 to-blue-500',
    bg: 'bg-indigo-50',
  },
]

const coreValues = [
  { icon: <Brain size={18} />, text: 'AI-First Thinking' },
  { icon: <Globe size={18} />, text: 'Global Impact' },
  { icon: <Target size={18} />, text: 'Precision Engineering' },
  { icon: <Rocket size={18} />, text: 'Rapid Innovation' },
]

const techStack = ['Python', 'TensorFlow', 'MQTT', 'LoRaWAN', 'React', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Grafana', 'Raspberry Pi']

export default function About() {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="absolute right-0 top-20 w-72 h-72 rounded-full bg-sky-50/80 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          tag="Who We Are"
          title="Driven by Technology,"
          highlight="Powered by Purpose"
          subtitle="InfrasTechs is an AI-powered technology startup focused on smart infrastructure monitoring, automation systems, AI solutions, IoT integration, and future-ready innovations."
        />

        {/* Company intro card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 mb-14 border-sky-200 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-cyan-400 rounded-l-2xl" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">
                Who is <span className="gradient-text">InfrasTechs</span>?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are a passionate team of engineers, data scientists, and AI researchers building the next generation of smart infrastructure solutions. Our systems guard dams, bridges, and critical assets around the clock — with zero human fatigue.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded with a belief that technology should serve safety and sustainability, InfrasTechs blends hardware sensor networks with cloud-based AI to deliver actionable, real-time intelligence.
              </p>
            </div>
            <div className="space-y-3">
              {coreValues.map((v, i) => (
                <motion.div
                  key={v.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-sky-50 rounded-xl px-4 py-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                    {v.icon}
                  </div>
                  <span className="font-semibold text-slate-700">{v.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(14,165,233,0.12)' }}
              className="glass-card p-6 cursor-default transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>
                <div className={`bg-gradient-to-br ${p.color} bg-clip-text text-transparent [&>svg]:stroke-sky-500`}>
                  <div className="text-sky-500">{p.icon}</div>
                </div>
              </div>
              <h4 className="font-display font-bold text-slate-900 mb-2">{p.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">Technologies We Use</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-sky-100 text-sky-700 text-sm font-mono font-medium px-4 py-2 rounded-lg shadow-sm hover:border-sky-300 hover:shadow-sky-100 hover:shadow-md transition-all duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
