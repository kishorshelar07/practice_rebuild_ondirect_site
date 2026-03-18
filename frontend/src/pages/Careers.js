import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Users, GitBranch, TrendingUp, Repeat, PartyPopper, Heart, DoorOpen, Utensils, Cake, CalendarDays, Briefcase, MapPin } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

/* ── Animated number ───────────────────────────────────────────────────────── */
const AnimNum = ({ value, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  React.useEffect(() => {
    if (!inView) return;
    const n = parseInt(value, 10);
    const step = Math.max(1, Math.floor(n / 40));
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, n);
      setCount(cur);
      if (cur >= n) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Careers = () => {
  const lifeStats = [
    { icon: Users,       value: '850', suffix: '',  label: 'Employees' },
    { icon: GitBranch,   value: '5',   suffix: '',  label: 'Dedicated Teams' },
    { icon: TrendingUp,  value: '2',   suffix: '/mo', label: 'Promotions Monthly' },
    { icon: Repeat,      value: '2',   suffix: '/mo', label: 'Internal Opportunities Each Month' },
    { icon: PartyPopper, value: '15',  suffix: '/yr', label: 'Engagement Activities Annually' },
  ];

  const benefits = [
    { icon: Heart,        text: 'Free Mediclaim' },
    { icon: DoorOpen,     text: 'Open Door Policy' },
    { icon: Utensils,     text: 'Complimentary Meal' },
    { icon: PartyPopper,  text: 'Employee Engagement Activities' },
    { icon: Cake,         text: 'Additional Day-offs on Birthdays' },
    { icon: CalendarDays, text: 'Flexible Work Culture' },
  ];

  const whyUs = [
    { icon: TrendingUp, title: 'High-Growth Environment', desc: 'We\'re scaling fast. Your impact is visible, your growth is real, and your work matters from day one.' },
    { icon: Users,      title: 'Employee First Culture',  desc: 'We are an employee-first company, an energy powerhouse. Happy employees create happy customers.' },
    { icon: GitBranch,  title: 'Multiple Career Paths',   desc: '2 promotions monthly and 2 internal opportunities every month — your growth trajectory is in your hands.' },
  ];

  const openings = [
    { role: 'Business Development Executive', dept: 'Sales',     type: 'Full-time', loc: 'Pune' },
    { role: 'Inside Sales Specialist',        dept: 'Sales',     type: 'Full-time', loc: 'Pune' },
    { role: 'Digital Marketing Analyst',      dept: 'Marketing', type: 'Full-time', loc: 'Pune' },
    { role: 'B2B Data Research Analyst',      dept: 'Data',      type: 'Full-time', loc: 'Pune' },
    { role: 'Lead Generation Executive',      dept: 'Sales',     type: 'Full-time', loc: 'Pune' },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Careers | Accelerate Your Career with the B2B Marketing Leader | OnDirect</title>
        <meta name="description" content="We are an employee-first company, an energy powerhouse, breaking new grounds each day. Happy employees create happy customers and help differentiate us." />
      </Helmet>

      <PageHero
        eyebrow="Careers at OnDirect"
        title="Break New Grounds Every Day"
        subtitle="We are an employee first company, an energy powerhouse, breaking new grounds each day. Happy employees create happy customers and help differentiate us."
      />

      {/* Life Stats */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Life at OnDirect
            </span>
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Life at <span className="gradient-text">OnDirect</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {lifeStats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center group">
                <div className="w-11 h-11 rounded-xl bg-electric-500/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-electric-500/25 transition-colors">
                  <s.icon size={20} className="text-electric-400" />
                </div>
                <div className="font-syne font-black text-3xl gradient-text mb-1">
                  <AnimNum value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-400 font-dm leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join + Photo */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Why Join Us
              </span>
              <h2 className="font-syne font-black text-3xl md:text-4xl text-white leading-tight mb-6">
                Accelerate Your Career with the<br /><span className="gradient-text">B2B Marketing Leader</span>
              </h2>
              <div className="space-y-4">
                {whyUs.map((w, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 glass rounded-2xl p-5 group hover:border-electric-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/25 transition-colors">
                      <w.icon size={18} className="text-electric-400" />
                    </div>
                    <div>
                      <div className="font-syne font-semibold text-white mb-1">{w.title}</div>
                      <div className="text-sm text-slate-400 font-dm leading-relaxed">{w.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Team photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                style={{ border: '1px solid rgba(239,68,68,0.15)' }}>
                <img
                  src="https://ondirect.in/wp-content/uploads/2022/12/01-700x500.jpg"
                  alt="Life at OnDirect"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{ background: '#EF4444' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Employee <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-slate-400 font-dm max-w-xl mx-auto">
              We believe in taking care of our people — because great people build great companies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass rounded-2xl p-5 flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-electric-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/25 transition-colors">
                  <b.icon size={17} className="text-electric-400" />
                </div>
                <span className="text-sm font-dm text-slate-300 font-medium">{b.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-syne font-black text-3xl text-white mb-3">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-slate-400 font-dm">
              Don't see your role? Drop us a line at{' '}
              <a href="mailto:careers@ondirect.in" className="text-electric-400 hover:text-electric-300 transition-colors">
                careers@ondirect.in
              </a>
            </p>
          </div>
          <div className="space-y-3">
            {openings.map((job, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-5 flex items-center justify-between group hover:border-electric-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center group-hover:bg-electric-500/25 transition-colors">
                    <Briefcase size={18} className="text-electric-400" />
                  </div>
                  <div>
                    <div className="font-syne font-semibold text-white group-hover:text-electric-400 transition-colors">{job.role}</div>
                    <div className="text-xs text-slate-500 font-dm flex items-center gap-2 mt-0.5">
                      <span>{job.dept}</span><span>·</span>
                      <span>{job.type}</span><span>·</span>
                      <MapPin size={10} className="inline" /><span>{job.loc}</span>
                    </div>
                  </div>
                </div>
                <a href="mailto:careers@ondirect.in?subject=Job Application"
                  className="text-xs font-syne font-semibold text-electric-400 hover:text-white transition-colors px-4 py-2 rounded-lg border border-electric-500/30 hover:bg-electric-500/10 whitespace-nowrap">
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Join the Team?"
        subtitle="Accelerate your career at the B2B marketing leader. Reach us at careers@ondirect.in"
        buttonText="Send Your Resume"
        href="mailto:careers@ondirect.in"
      />
    </motion.div>
  );
};

export default Careers;
