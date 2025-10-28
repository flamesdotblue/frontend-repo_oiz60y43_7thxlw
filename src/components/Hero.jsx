import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const primary = '#005aa1';

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure legible text; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-white/90 border border-white/30 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: primary }} />
          Elevate your presence with modern, animated design
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        >
          Crafted Interfaces,
          <span style={{ color: primary }}> Seamless Motion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl"
        >
          A responsive, elegant landing experience inspired by refined editorial layouts and immersive visuals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white shadow-lg"
            style={{ backgroundColor: primary }}
          >
            Explore Services
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/90 text-slate-900 shadow-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
}
