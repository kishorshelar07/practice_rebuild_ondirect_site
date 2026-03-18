import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Target, Globe, Zap, TrendingUp, Award } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, SectionHeader, CTABanner } from '../components/sections/SectionComponents';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: '13B+', label: 'Annual Customer Touchpoints', icon: Globe },
    { value: '150+', label: 'Countries Covered',           icon: TrendingUp },
    { value: '4×',   label: 'Growth Factor for B2B',       icon: Zap },
    { value: '2021', label: 'Founded & Scaling Fast',      icon: Award },
  ];

  const clients = [
    'Leading Fortune 500 multinational technology company',
    'A Fortune 100 cloud based global software organization',
    'One of the most admired IT companies in the world',
    'American multinational search engine',
    "One of the world's largest ecommerce company",
  ];

  const focusAreas = [
    { icon: Zap,    title: 'Technology', color: 'from-electric-500/20 to-cyan-500/20',   desc: "OnDirect helps leaders of high-tech companies market their business effectively, by running B2B technology programs each month to generate interest." },
    { icon: Globe,  title: 'Media',      color: 'from-violet-500/20 to-electric-500/20', desc: "OnDirect enjoys 'Preferred Partner' status with leading media agencies. Along with a highly responsive customer service team, we help execute their B2B technology clients' media plans." },
    { icon: Target, title: 'Marketing',  color: 'from-cyan-500/20 to-violet-500/20',     desc: "OnDirect works with global marketing companies to deliver top quality bespoke programs for their clients." },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>About OnDirect | Global Marketing Automation | Demand and Lead Generation</title>
        <meta name="description" content="At OnDirect, we primarily work with media agencies, publishers and marketing companies looking to leverage marketing automation and digital marketing capacity to execute lead generation programs." />
      </Helmet>

      <PageHero
        eyebrow="About Us"
        title="We Connect Brands to Their Next Customer"
        subtitle="At OnDirect, we primarily work with media agencies, publishers and marketing companies looking to leverage marketing automation and digital marketing capacity and capability to execute lead generation programs."
        gradient
      />

      {/* Mission + Stats */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title={<>Global Marketing<br /><span className="gradient-text">Inside Sales</span></>}
                subtitle="We are a global marketing support and inside sales organization. Our team connects the dots between your target audience, marketing technology, and results to help you engage customers and grow revenue."
              />
              <p className="text-slate-400 font-dm leading-relaxed mt-4 mb-5">
                Since 2021, OnDirect has helped drive lead readiness for technology, marketing and media companies. Our multi-channel outreach connects with 13 billion potential customers across 150 countries each year.
              </p>
              <p className="text-slate-400 font-dm leading-relaxed">
                Our mission is to enable marketing, media and technology companies realize their cross-vertical sales and marketing potential, helping them gain leadership positions in preferred markets.
              </p>
            </div>
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }} whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={20} className="text-electric-400" />
                  </div>
                  <div className="font-syne font-black text-3xl gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-dm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid rgba(239,68,68,0.15)' }}>
                <img src="https://ondirect.in/wp-content/uploads/2019/04/who-we-are_red-overlay-1500x928.jpg" alt="Who we are" className="w-full h-full object-cover" loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-transparent" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />What We Do
              </span>
              <h2 className="font-syne font-black text-3xl md:text-4xl text-white leading-tight mb-5">
                We Mobilize Your Sales by <span className="gradient-text">Building Precise Prospects</span>
              </h2>
              <p className="text-slate-400 font-dm leading-relaxed mb-5">
                As your B2B technology and marketing partner, we connect the dots between your target audience, marketing technology and results to help you engage customers and grow revenue.
              </p>
              <p className="text-slate-400 font-dm leading-relaxed">
                We mobilize your sales by building precise prospect lists from our global database and driving them through a structured qualification engine — so your team only spends time with leads that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Our Focus" title={<>Industries We <span className="gradient-text">Specialize In</span></>} subtitle="We bring deep expertise and proven methodologies to three core verticals." center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="glass rounded-2xl p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={26} className="text-electric-400" />
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-sm text-slate-400 font-dm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <SectionHeader eyebrow="Our Clients" title={<>Working With the <span className="gradient-text">World's Best</span></>} subtitle="Our clients include some of the most iconic brands in technology and business globally." center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {clients.map((client, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.03 }} className="glass rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-electric-400 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-dm">{client}</span>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid rgba(239,68,68,0.15)' }}>
              <img src="https://ondirect.in/wp-content/uploads/2019/04/client-1-700x500.jpg" alt="OnDirect Clients" className="w-full h-full object-cover" loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Partner With OnDirect" subtitle="Join hundreds of technology and marketing companies already growing with OnDirect." buttonText="Start a Conversation" />
    </motion.div>
  );
};

export default About;
