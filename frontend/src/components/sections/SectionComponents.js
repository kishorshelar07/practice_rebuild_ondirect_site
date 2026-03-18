import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, staggerContainer } from '../../animations/variants';

const R = 'rgba(239,68,68,'; // red shorthand helper

/* ── Section Header ──────────────────────────────────────── */
export const SectionHeader = ({ eyebrow, title, subtitle, center = false }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="mb-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase"
            style={{ background: R+'0.10)', color: '#F87171', border: `1px solid ${R}0.20)` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#EF4444' }} />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-syne font-bold leading-tight mb-4 text-white text-3xl md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-base md:text-lg max-w-2xl leading-relaxed font-dm ${center ? 'mx-auto' : ''}`}
          style={{ color: '#94A3B8' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

/* ── Stat Card ───────────────────────────────────────────── */
export const StatCard = ({ value, label, icon: Icon }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="glass rounded-2xl p-6 text-center group cursor-default"
  >
    {Icon && (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors"
        style={{ background: R+'0.12)' }}>
        <Icon size={20} style={{ color: '#F87171' }} />
      </div>
    )}
    <div className="font-syne font-black text-3xl md:text-4xl gradient-text mb-1">{value}</div>
    <div className="text-sm font-dm" style={{ color: '#94A3B8' }}>{label}</div>
  </motion.div>
);

/* ── Service Card ────────────────────────────────────────── */
export const ServiceCard = ({ icon: Icon, title, description, href, index = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl p-7 overflow-hidden cursor-pointer"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${R}0.07), transparent 60%)` }} />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.18), rgba(220,38,38,0.10))' }}>
        <Icon size={22} style={{ color: '#F87171' }} />
      </div>

      <h3 className="font-syne font-bold text-lg text-white mb-3">{title}</h3>
      <p className="text-sm font-dm leading-relaxed mb-5" style={{ color: '#94A3B8' }}>{description}</p>

      {href && (
        <a href={href} className="inline-flex items-center gap-1.5 text-xs font-syne font-semibold transition-colors group/link"
          style={{ color: '#F87171' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#F87171'}>
          Learn more
          <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, transparent, #EF4444, transparent)` }} />
    </motion.div>
  );
};

/* ── Testimonial Card ────────────────────────────────────── */
export const TestimonialCard = ({ quote, name, title, company, index = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-7 flex flex-col gap-5"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill="#FBBF24" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm font-dm leading-relaxed italic" style={{ color: '#CBD5E1' }}>"{quote}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}>
          <span className="font-syne font-bold text-sm text-white">{name.charAt(0)}</span>
        </div>
        <div>
          <div className="text-sm font-syne font-semibold text-white">{name}</div>
          <div className="text-xs font-dm" style={{ color: '#64748B' }}>{title}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Page Hero ───────────────────────────────────────────── */
export const PageHero = ({ eyebrow, title, subtitle, gradient = false }) => (
  <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden" style={{ background: '#0A0101' }}>
    <div className="absolute inset-0 bg-hero-mesh opacity-50" />
    <div className="absolute inset-0 grid-bg opacity-25" />
    {/* Central glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[80px] pointer-events-none"
      style={{ background: '#EF4444' }} />

    <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-36 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && (
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
            style={{ background: R+'0.10)', color: '#F87171', border: `1px solid ${R}0.22)` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#EF4444' }} />
            {eyebrow}
          </span>
        )}
        <h1 className={`font-syne font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-4xl ${gradient ? 'gradient-text' : 'text-white'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-xl max-w-2xl leading-relaxed font-dm" style={{ color: '#94A3B8' }}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

/* ── CTA Banner ──────────────────────────────────────────── */
export const CTABanner = ({ title, subtitle, buttonText = 'Connect Now', href = '/connect' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative py-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(220,38,38,0.08), rgba(185,28,28,0.06))',
            border: `1px solid ${R}0.22)`,
          }}>
          {/* Glow spots */}
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-[80px] opacity-20 pointer-events-none"
            style={{ background: '#EF4444' }} />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full blur-[80px] opacity-15 pointer-events-none"
            style={{ background: '#DC2626' }} />

          <div className="relative">
            <h2 className="font-syne font-black text-3xl md:text-5xl text-white mb-5">{title}</h2>
            {subtitle && (
              <p className="text-base md:text-lg max-w-xl mx-auto mb-8 font-dm" style={{ color: '#94A3B8' }}>
                {subtitle}
              </p>
            )}
            <a href={href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-syne font-semibold text-white text-base transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                boxShadow: '0 8px 32px rgba(239,68,68,0.45)',
              }}>
              {buttonText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
