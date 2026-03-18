import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Target, TrendingUp, Globe,
  Users, Zap, Award, BarChart3, ChevronRight
} from 'lucide-react';
import { pageTransition, fadeUp, staggerContainer, heroTextReveal } from '../animations/variants';
import { SectionHeader, StatCard, ServiceCard, TestimonialCard, CTABanner } from '../components/sections/SectionComponents';
// ── Hero ──────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* ── Hero Background Image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
        }}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,1,1,0.93) 0%, rgba(10,1,1,0.80) 50%, rgba(10,1,1,0.92) 100%)' }} />
      {/* Red bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to top, #0A0101, transparent)' }} />

      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-mesh opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating orbs */}
      <motion.div animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-16 w-72 h-72 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #EF4444, transparent)' }} />
      <motion.div animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-16 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #DC2626, transparent)' }} />
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F97316, transparent)' }} />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
            className="absolute h-px opacity-20"
            style={{
              top: `${20 + i * 16}%`,
              left: 0,
              right: 0,
              background: 'linear-gradient(90deg, transparent, #EF4444, transparent)',
              width: '40%',
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-syne font-semibold tracking-widest uppercase text-cyan-400">Your Inside Sales Specialist</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                custom={0}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className="font-syne font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white"
              >
                Amplify
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h1
                custom={1}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className="font-syne font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.0]"
                style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #EF4444, #DC2626)', WebkitBackgroundClip: 'text' }}
              >
                Your Lead
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                custom={2}
                variants={heroTextReveal}
                initial="hidden"
                animate="visible"
                className="font-syne font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] text-white"
              >
                Generation
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed font-dm mb-10"
            >
              Since 2021, OnDirect has connected technology, marketing and media companies to 
              <span className="text-white font-medium"> 13 billion potential customers</span> across 
              <span className="text-white font-medium"> 150 countries</span> every year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/connect"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-syne font-semibold text-white text-base transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 8px 32px rgba(239,68,68,0.4)' }}
              >
                Let's Connect <ArrowRight size={16} />
              </Link>
              <Link to="/solutions"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-syne font-semibold text-slate-300 text-base transition-all duration-300 hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
              >
                Explore Solutions <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: '13B+', label: 'Annual Customer Touchpoints', icon: Users },
              { value: '150+', label: 'Countries Covered', icon: Globe },
              { value: '4×', label: 'Growth Factor for B2B', icon: TrendingUp },
              { value: '9M+', label: 'Leads Generated', icon: Award },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <stat.icon size={20} className="text-electric-400" />
                </div>
                <div className="font-syne font-black text-3xl gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 font-dm leading-relaxed">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 font-dm tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-electric-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ── Services Overview ─────────────────────────────────────────────────────────
const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Management',
      description: 'End-to-end lead qualification, nurturing, and scoring to maximize your sales pipeline conversion.',
      href: '/lead-management',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Precision B2B data and contact intelligence for targeted outreach across 150+ countries.',
      href: '/data-solutions',
    },
    {
      icon: BarChart3,
      title: 'Sales Targeting',
      description: 'Account-based marketing and intent-driven targeting to reach your ideal customer profile.',
      href: '/sales-targeting',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Full-funnel demand generation combining digital channels with our proprietary data network.',
      href: '/digital-marketing',
    },
  ];

  return (
    <section className="section-pad bg-navy-950 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-custom relative">
        <SectionHeader
          eyebrow="Our Solutions"
          title={<>We Help Technology<br />Companies <span className="gradient-text">Find Customers</span></>}
          subtitle="A comprehensive suite of B2B lead generation services, tailored and integrated to meet your sales and marketing objectives."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => <ServiceCard key={i} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
};

// ── About Snapshot ────────────────────────────────────────────────────────────
const AboutSnapshot = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: '#0D1526' }}>
      {/* Background image — world map / global reach */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80')` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,21,38,0.98) 40%, rgba(13,21,38,0.75) 100%)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{ background: '#EF4444' }} />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Who We Are
            </span>

            <h2 className="font-syne font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Global Marketing Support<br />& <span className="gradient-text">Inside Sales</span>
            </h2>

            <p className="text-slate-400 leading-relaxed font-dm mb-6">
              At OnDirect, we primarily work with media agencies, publishers and marketing companies looking 
              to leverage marketing automation and digital marketing capacity to execute lead generation programs.
            </p>
            <p className="text-slate-400 leading-relaxed font-dm mb-8">
              Our mission is to enable marketing, media and technology companies realize their cross-vertical 
              sales and marketing potential, helping them gain leadership positions in preferred markets.
            </p>

            <Link to="/about-us" className="inline-flex items-center gap-2 text-electric-400 font-syne font-semibold hover:text-white transition-colors group">
              Learn our story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {[
              { label: 'Technology', icon: Zap, desc: 'OnDirect helps leaders of high-tech companies market their business effectively, running B2B technology programs each month to generate interest.' },
              { label: 'Media', icon: Globe, desc: 'OnDirect enjoys "Preferred Partner" status with leading media agencies. We help execute B2B technology clients\' media plans.' },
              { label: 'Marketing', icon: Target, desc: 'OnDirect works with global marketing companies to deliver top quality bespoke programs for their clients.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                whileHover={{ x: 4 }}
                className="glass rounded-2xl p-5 flex gap-4 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: 'rgba(239,68,68,0.15)' }}>
                  <item.icon size={20} className="text-electric-400" />
                </div>
                <div>
                  <div className="font-syne font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-sm text-slate-400 font-dm leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ── Clients / Logos ───────────────────────────────────────────────────────────
const ClientsSection = () => {
  const clients = [
    'Fortune 500 MNC', 'Fortune 100 Cloud', 'Global IT Leader',
    'Search Engine Giant', "World's Largest Ecommerce", 'Leading Media Agency',
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-pad bg-navy-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-syne font-semibold tracking-widest uppercase text-slate-500 mb-4">Trusted By</p>
          <h3 className="font-syne font-bold text-2xl text-white">
            Leading <span className="gradient-text">Fortune 500</span> Companies
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="glass rounded-2xl px-4 py-5 text-center group cursor-default"
            >
              <div className="text-xs font-syne font-medium text-slate-400 group-hover:text-electric-400 transition-colors leading-tight">
                {client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ──────────────────────────────────────────────────────────────
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "OnDirect transformed our B2B pipeline. Their data solutions helped us identify qualified prospects we never would have found otherwise. The ROI was exceptional.",
      name: "Sarah Mitchell",
      title: "VP Marketing",
      company: "TechCorp Global",
    },
    {
      quote: "The lead qualification service is phenomenal. Our sales team now spends time only on truly qualified prospects, increasing our close rate by over 40%.",
      name: "Rahul Sharma",
      title: "Director of Sales",
      company: "CloudSoft Inc.",
    },
    {
      quote: "OnDirect's multi-channel approach and global reach helped us expand into 12 new markets in under a year. Truly exceptional partner.",
      name: "David Chen",
      title: "CMO",
      company: "Nexus Technologies",
    },
  ];

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: '#0D1526' }}>
      {/* Background image — office / team */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80')`, opacity: 0.07 }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(13,21,38,0.92)' }} />
      <div className="container-custom relative">
        <SectionHeader
          eyebrow="Client Success"
          title={<>What Our Clients <span className="gradient-text">Say</span></>}
          subtitle="Trusted by technology, media, and marketing companies across the globe."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} index={i} />)}
        </div>
      </div>
    </section>
  );
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQSection = () => {
  const [open, setOpen] = React.useState(0);
  const faqs = [
    { q: 'What is OnDirect\'s core offering?', a: 'OnDirect is a B2B inside sales and demand generation company. We help technology, media, and marketing companies identify, qualify, and engage with potential customers through multi-channel outreach across 150+ countries.' },
    { q: 'How do you ensure data quality?', a: 'Our data solutions are built on rigorous verification processes. We combine proprietary databases with real-time validation to ensure accuracy, relevance, and compliance for every contact we provide.' },
    { q: 'What industries do you serve?', a: 'We primarily serve technology companies, media agencies, publishers, and marketing companies looking for B2B lead generation and demand creation solutions.' },
    { q: 'How quickly can we start seeing results?', a: 'Most clients begin seeing qualified leads within the first 2-4 weeks of program launch. Our team works closely with you to optimize campaigns for maximum performance from day one.' },
    { q: 'Do you offer global coverage?', a: 'Yes — our multi-channel outreach network reaches potential customers across 150+ countries, with localized capabilities in key markets in North America, Europe, Asia-Pacific, and beyond.' },
  ];

  return (
    <section className="section-pad bg-navy-950">
      <div className="container-custom max-w-4xl">
        <SectionHeader eyebrow="FAQ" title={<>Frequently Asked <span className="gradient-text">Questions</span></>} center />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`font-syne font-semibold text-sm transition-colors ${open === i ? 'text-electric-400' : 'text-white group-hover:text-electric-400'}`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 text-electric-400 transition-colors ${open === i ? 'bg-electric-500/20' : 'bg-electric-500/10 group-hover:bg-electric-500/20'}`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm text-slate-400 font-dm leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const Home = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>OnDirect | B2B Data Solutions & Demand Generation</title>
      <meta name="description" content="OnDirect Marketing Services - Your Inside Sales Specialist. Multi-channel outreach connecting 13 billion potential customers across 150 countries." />
      <meta property="og:title" content="OnDirect | B2B Lead Generation" />
      <meta property="og:description" content="Amplify your lead generation with OnDirect — the inside sales specialists." />
    </Helmet>
    <HeroSection />
    <ServicesSection />
    <AboutSnapshot />
    <ClientsSection />
    <TestimonialsSection />
    <FAQSection />
    <CTABanner
      title="Ready to Amplify Your Sales?"
      subtitle="Let's build a custom B2B demand generation program for your business. Talk to our experts today."
      buttonText="Start the Conversation"
    />
  </motion.div>
);

export default Home;