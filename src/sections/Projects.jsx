import { motion } from 'framer-motion'
import { Activity, Bot, Wifi, FlaskConical, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const projects = [
  {
    id: 1,
    icon: <Activity size={28} />,
    color: 'from-sky-400 to-cyan-400',
    bg: 'bg-sky-50',
    borderColor: 'border-sky-200',
    glowColor: 'shadow-sky-100',
    title: 'InfrasTechs — Smart Dam & Bridge Monitor',
    subtitle: 'AI-powered infrastructure monitoring and early warning system',
    status: 'Active',
    statusColor: 'bg-emerald-100 text-emerald-700',
    description:
      'Our flagship product — a real-time AI monitoring system for dams and bridges using distributed IoT sensors, edge computing, and machine learning to detect structural anomalies and trigger early warnings before failures occur.',
    features: [
      'Real-time sensor monitoring (vibration, strain, tilt)',
      'AI anomaly detection with < 2s latency',
      'Live dashboard visualization & analytics',
      'SMS / Telegram / Email alert system',
      'Historical data logging and trend analysis',
    ],
    tags: ['Python', 'TensorFlow', 'IoT', 'MQTT', 'React'],
  },
  {
    id: 2,
    icon: <Bot size={28} />,
    color: 'from-blue-400 to-sky-500',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    glowColor: 'shadow-blue-100',
    title: 'AI Automation Systems',
    subtitle: 'Intelligent process automation powered by machine learning',
    status: 'In Development',
    statusColor: 'bg-amber-100 text-amber-700',
    description:
      'End-to-end automation pipelines that use AI to eliminate manual inspection workflows, auto-generate reports, schedule maintenance, and orchestrate infrastructure operations without human intervention.',
    features: [
      'Automated inspection scheduling',
      'AI-generated maintenance reports',
      'Predictive failure prevention',
      'Workflow orchestration engine',
      'Multi-site remote management',
    ],
    tags: ['Node.js', 'Kubernetes', 'OpenAI API', 'PostgreSQL'],
  },
  {
    id: 3,
    icon: <Wifi size={28} />,
    color: 'from-cyan-400 to-teal-400',
    bg: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    glowColor: 'shadow-cyan-100',
    title: 'Smart IoT Monitoring Platform',
    subtitle: 'Unified IoT sensor management and data intelligence',
    status: 'Beta',
    statusColor: 'bg-sky-100 text-sky-700',
    description:
      'A scalable platform for connecting, managing, and analyzing thousands of IoT sensors across geographically distributed infrastructure sites, with edge AI processing and cloud sync.',
    features: [
      'LoRaWAN & NB-IoT connectivity',
      'Edge AI data preprocessing',
      'Grafana dashboard integration',
      'Over-the-air firmware updates',
      'Battery life optimization algorithms',
    ],
    tags: ['LoRaWAN', 'Raspberry Pi', 'Grafana', 'InfluxDB'],
  },
  {
    id: 4,
    icon: <FlaskConical size={28} />,
    color: 'from-violet-400 to-sky-400',
    bg: 'bg-violet-50',
    borderColor: 'border-violet-200',
    glowColor: 'shadow-violet-100',
    title: 'Robotics & Research Projects',
    subtitle: 'Next-gen autonomous inspection robotics',
    status: 'Research',
    statusColor: 'bg-purple-100 text-purple-700',
    description:
      'Developing autonomous inspection drones and ground robots equipped with computer vision and LiDAR to perform detailed structural assessments of inaccessible infrastructure — eliminating human risk.',
    features: [
      'Drone-based crack detection (computer vision)',
      'LiDAR 3D structural mapping',
      'Autonomous navigation & path planning',
      'AI defect classification',
      'Integrated reporting API',
    ],
    tags: ['ROS2', 'OpenCV', 'LiDAR', 'Python', 'PyTorch'],
  },
]

const statusIcon = {
  Active: <CheckCircle2 size={12} />,
  'In Development': <Clock size={12} />,
  Beta: <Activity size={12} />,
  Research: <FlaskConical size={12} />,
}

export default function Projects() {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="absolute left-0 top-40 w-72 h-72 rounded-full bg-cyan-50/80 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-20 w-72 h-72 rounded-full bg-sky-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          tag="What We Build"
          title="Our "
          highlight="Projects"
          subtitle="From structural monitoring to autonomous robotics — here's what InfrasTechs is building to protect and innovate critical infrastructure."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`glass-card border ${project.borderColor} overflow-hidden cursor-default transition-all duration-300 hover:shadow-xl ${project.glowColor}`}
            >
              {/* Card header */}
              <div className={`${project.bg} px-6 pt-6 pb-5 border-b ${project.borderColor}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-md`}>
                    {project.icon}
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${project.statusColor}`}>
                    {statusIcon[project.status]}
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-1 leading-snug">{project.title}</h3>
                <p className="text-sm text-slate-500">{project.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-sky-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-mono px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-sky-600 text-sm font-semibold hover:text-sky-700 transition-colors">
                    Learn more <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
