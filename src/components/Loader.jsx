import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-8"
      >
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 shadow-2xl shadow-sky-200 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
              <path d="M6 30 L20 10 L34 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="10" r="3" fill="white"/>
              <circle cx="6" cy="30" r="3" fill="white"/>
              <circle cx="34" cy="30" r="3" fill="white"/>
            </svg>
          </div>
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-sky-300"
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-display font-bold text-2xl text-slate-900 tracking-tight mb-1">
          Infras<span className="text-sky-500">Techs</span>
        </h1>
        <p className="text-slate-400 text-sm font-mono">Initializing systems...</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="mt-8 w-48 h-1 bg-sky-100 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}
