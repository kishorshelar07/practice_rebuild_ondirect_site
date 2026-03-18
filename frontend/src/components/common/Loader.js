import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
    style={{ background: '#0A0101' }}
  >
    {/* Radial glow */}
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.08) 0%, transparent 70%)' }} />

    {/* Grid lines */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="relative flex flex-col items-center gap-8">

      {/* Logo icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Core logo box */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #EF4444, #DC2626)',
            boxShadow: '0 0 60px rgba(239,68,68,0.5), 0 0 120px rgba(239,68,68,0.2)',
          }}
        >
          <span className="font-syne font-black text-3xl text-white">OD</span>
        </div>

        {/* Rotating outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-2xl"
          style={{
            border: '1px solid rgba(239,68,68,0.35)',
            borderRadius: '20px',
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-6 rounded-2xl"
          style={{
            border: '1px solid rgba(239,68,68,0.12)',
            borderRadius: '28px',
          }}
        />
      </motion.div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-syne font-bold text-2xl text-white mb-1">OnDirect</h1>
        <p className="text-xs tracking-[0.3em] uppercase" style={{ color: '#F87171' }}>
          Marketing Services
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(239,68,68,0.15)' }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
          className="h-full w-full"
          style={{ background: 'linear-gradient(90deg, transparent, #EF4444, #F87171, transparent)' }}
        />
      </div>
    </div>
  </motion.div>
);

export default Loader;
