/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Lightbulb, Scale, Trophy, Users, Mail, FileText,
  Headphones, Calendar, Database, ArrowRight, CheckCircle
} from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

/* ── Animated counter ──────────────────────────────────────────────────────── */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(end.replace(/[^0-9.]/g, ''));
    const step = num / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Scrolling stat ticker ─────────────────────────────────────────────────── */
const StatTicker = () => {
  const stats = [
    '10 Contacts Added to Database Each Minute',
    '9M Leads Generated',
    '100K Programs Delivered',
    '60M Annual Teleconnects',
    '850 Technology Products Tracked',
    '500M Annual In-Mails',
    '10M Annual Whitepapers',
    '2K Event Registrations Monthly',
  ];
  return (
    <div className="relative overflow-hidden py-5"
      style={{ background: 'rgba(239,68,68,0.08)', borderTop: '1px solid rgba(239,68,68,0.15)', borderBottom: '1px solid rgba(239,68,68,0.15)' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-12 whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {[...stats, ...stats].map((s, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-syne font-semibold text-electric-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const WhyOnDirect = () => {
  const bigStats = [
    { value: '32M', label: 'Prospects Reached', raw: '32', suffix: 'M+' },
    { value: '9M',  label: 'Leads Generated',  raw: '9',  suffix: 'M+' },
    { value: '100K',label: 'Programs Delivered', raw: '100', suffix: 'K+' },
    { value: '60M', label: 'Annual Teleconnects', raw: '60', suffix: 'M+' },
  ];

  const demandGen = [
    {
      icon: Users,
      title: 'Customer Contact',
      subtitle: 'Customer Data',
      image: 'https://ondirect.in/wp-content/uploads/2019/04/CUSTOMER-CONTACT.jpg',
      desc: 'Our B2B customer contact and profiling solutions get you in front of the right audience with the correct amount of accuracy and precision.',
      points: ['Customer Data'],
    },
    {
      icon: FileText,
      title: 'Media & Content Syndication',
      subtitle: 'Content Distribution',
      image: 'https://ondirect.in/wp-content/uploads/2019/04/MEDIA-AND-CONTENT-SYNDICATION.jpg',
      desc: 'We provide our B2B clients with proven marketing services such as persona development, lead generation, sales alignment, and more — all via our media and content distribution services.',
      points: ['Content Distribution', 'Sales Leads', 'Traffic Assurance', 'Marketing Leads'],
    },
    {
      icon: Headphones,
      title: 'Inside Sales & Augmentation',
      subtitle: 'Sales Programs',
      image: 'https://ondirect.in/wp-content/uploads/2019/04/INSIDE-SALES.jpg',
      desc: 'These are higher quality, deep rooted, sales-focused services that help us penetrate into your target account list. Our bespoke programs are designed to achieve higher levels of output to fill your sales pipeline.',
      points: ['Pyramid Programs', 'Appointment Setting', 'Opt-in Management'],
    },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Why OnDirect | Your Extended Sales Team | Higher RoI | OnDirect</title>
        <meta name="description" content="As your extended sales team, we power-line your marketing programs. Over the years, we have reached out to 32 million prospects and generated 9 million leads." />
      </Helmet>

      <PageHero
        eyebrow="The OnDirect Edge"
        title="OnDirect Success Awaits"
        subtitle="As your extended sales team, we power-line your marketing programs. Over the years, we have reached out to 32 million prospects and generated 9 million leads."
        gradient
      />

      {/* Scrolling ticker */}
      <StatTicker />

      {/* Big stats */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Numbers That <span className="gradient-text">Speak for Themselves</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bigStats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center">
                <div className="font-syne font-black text-4xl gradient-text mb-2">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-slate-400 font-dm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The OnDirect Difference */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />OnDirect Difference
            </span>
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Why We Lead the <span className="gradient-text">Industry</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Approach',
                desc: 'We lead the industry by delivering innovative programs that reflect our unique and broad multi-channel capabilities.',
              },
              {
                icon: Scale,
                title: 'Scale',
                desc: 'Quality leads are the lifeblood of any B2B company but coming up with new ideas to increase leads can be a challenge. We drive volume to keep your funnel full, maintaining consistent quality.',
              },
              {
                icon: Trophy,
                title: 'Performance',
                desc: 'We serve clients with quality and distinction, making a measurable and attributable impact on every program we execute.',
              },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-electric-400" />
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 font-dm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/connect"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-syne font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 6px 24px rgba(239,68,68,0.35)' }}>
              Know More <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Demand Generation Services */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Demand Generation
            </span>
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Our Demand Generation <span className="gradient-text">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demandGen.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                    onError={e => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-syne font-semibold tracking-widest uppercase text-electric-400">{item.subtitle}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-electric-500/15 flex items-center justify-center">
                      <item.icon size={17} className="text-electric-400" />
                    </div>
                    <h3 className="font-syne font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 font-dm leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-400 font-dm">
                        <span className="w-1 h-1 rounded-full bg-electric-400 flex-shrink-0" />• {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live stat cards */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-syne font-black text-3xl text-white mb-4">
              Live Scale <span className="gradient-text">Metrics</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '10', suffix: '/min', label: 'Contacts Added to Database' },
              { value: '500',  suffix: 'M', label: 'Annual In-Mails Sent' },
              { value: '850', suffix: '+', label: 'Technology Products Tracked' },
              { value: '2',   suffix: 'K', label: 'Event Registrations Monthly' },
              { value: '10',  suffix: 'M', label: 'Annual Whitepapers Delivered' },
              { value: '60',  suffix: 'M', label: 'Annual Teleconnects' },
              { value: '32',  suffix: 'M+', label: 'Prospects Reached' },
              { value: '9',   suffix: 'M+', label: 'Leads Generated' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 text-center">
                <div className="font-syne font-black text-2xl gradient-text mb-1">
                  {s.value}{s.suffix}
                </div>
                <div className="text-xs text-slate-400 font-dm leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Experience the OnDirect Edge"
        subtitle="See for yourself why technology leaders choose OnDirect for B2B demand generation."
        buttonText="Talk to Our Team"
      />
    </motion.div>
  );
};

export default WhyOnDirect;