import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Target, Database, BarChart3, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

const solutions = [
  {
    icon: Target,
    title: 'Lead Management',
    href: '/lead-management',
    tagline: 'Your Content In Front Of The Right Audience',
    description:
      'Our lead intelligence, segmentation and quality focus delivers qualified and actionable leads for your bespoke program requirements. Our partnership approach keeps your sales funnel consistently fuelled through innovative ideas to increase leads.',
    features: [
      'Content Syndication — deliver content to actively engaged audiences',
      'Lead Nurturing — personalized programs to attract engaged buyers',
      'Lead Qualification — data-driven strategy for maximized results',
      'Progressive Leads — prospects moved through all stages in one outreach',
    ],
    color: 'from-electric-500 to-cyan-500',
    glowColor: 'rgba(239,68,68,0.08)',
  },
  {
    icon: Database,
    title: 'Data Solutions',
    href: '/data-solutions',
    tagline: 'Professionally Verified and Accurate Data',
    description:
      'Ensuring clean, error-free data is critical for business success. Our goal is to identify and enrich data, highlighting interests as well as intent insights of potential customers through our proprietary technology stack.',
    features: [
      'Contact Discovery — verified and accurate decision-maker data',
      'Data Enrichment — intelligent high definition B2B profiles',
      '150+ country coverage with advanced search tools',
      'Geography, job title, industry, revenue, employee size targeting',
    ],
    color: 'from-cyan-500 to-violet-500',
    glowColor: 'rgba(220,38,38,0.08)',
  },
  {
    icon: BarChart3,
    title: 'Sales Targeting',
    href: '/sales-targeting',
    tagline: 'Sharpen Your Targeting',
    description:
      'High quality B2B contacts drive effective sales conversions. Our global outreach focus is to deliver an actionable list with senior decision makers from small, medium or large enterprises alike. We help establish the right connect and conduct a detailed buyer assessment.',
    features: [
      'Audience Profiling — know your customers, understand their challenges',
      'Event Promotions — convert qualified leads into event attendees',
      'Account intelligence to define target accounts effectively',
      'Multi-channel promotion strategy for higher event participation',
    ],
    color: 'from-violet-500 to-electric-500',
    glowColor: 'rgba(249,115,22,0.08)',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    href: '/digital-marketing',
    tagline: 'Engage and Grow Your Potential Target Audience',
    description:
      'B2B businesses aspire to engage and grow their audience. Through search, social and email marketing, we help global companies acquire and retain their customers. We create digital content for email automation, monitor brand reputation and manage technology.',
    features: [
      'Social Listening — online reputation management',
      'Technology Research — track 2,000+ technology keywords',
      'Email automation and digital content creation',
      'Competition keywords research for business intelligence',
    ],
    color: 'from-electric-500 to-violet-500',
    glowColor: 'rgba(239,68,68,0.08)',
  },
];

const SolutionCard = ({ solution, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl p-8 relative overflow-hidden flex flex-col"
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 80% 10%, ${solution.glowColor}, transparent 60%)` }}
      />

      <div className="relative flex flex-col flex-1">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          style={{ opacity: 0.85 }}
        >
          <solution.icon size={26} className="text-white" />
        </div>

        {/* Badge */}
        <span
          className="inline-block text-xs font-syne font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#F87171' }}
        >
          {solution.tagline}
        </span>

        {/* Title */}
        <h3 className="font-syne font-black text-2xl text-white mb-4 leading-tight">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 font-dm leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Feature list */}
        <ul className="space-y-2.5 mb-7 flex-1">
          {solution.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-dm">
              <CheckCircle size={15} className="text-electric-400 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={solution.href}
          className="inline-flex items-center gap-2 text-sm font-syne font-semibold text-electric-400 hover:text-white transition-colors group/link mt-auto"
        >
          Explore {solution.title}
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, transparent, #EF4444, transparent)` }}
      />
    </motion.div>
  );
};

const Solutions = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Solutions | Lead Generation | Sales Targeting | OnDirect</title>
      <meta
        name="description"
        content="We have built a suite of lead generation services, tailored and integrated to meet your sales and marketing objectives. Helping technology companies look for customers."
      />
    </Helmet>

    <PageHero
      eyebrow="Solutions"
      title="Helping Technology Companies Look for Customers"
      subtitle="We have built a suite of lead generation services, tailored and integrated to meet your sales and marketing objectives. From lead management to data solutions to digital marketing — all in one partner."
      gradient
    />

    {/* Solutions grid */}
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.title} solution={sol} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Why integrated */}
    <section className="py-20" style={{ background: '#0D1526' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
            The Integrated Advantage
          </span>
          <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
            All Solutions Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 font-dm max-w-2xl mx-auto">
            Unlike point solutions, OnDirect's integrated approach means your data, leads, targeting, and digital
            marketing all share the same intelligence — compounding results across every program.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-4xl mx-auto">
          {[
            { label: 'Data Solutions', sub: 'Verified B2B Data', icon: Database },
            { label: 'Sales Targeting', sub: 'Right Accounts', icon: Target },
            { label: 'Lead Management', sub: 'Qualified Leads', icon: BarChart3 },
            { label: 'Digital Marketing', sub: 'Engaged Audience', icon: Globe },
          ].map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex-1 glass rounded-2xl p-5 text-center group min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-electric-500/25 transition-colors">
                  <step.icon size={18} className="text-electric-400" />
                </div>
                <div className="font-syne font-semibold text-sm text-white mb-1">{step.label}</div>
                <div className="text-xs text-slate-500 font-dm">{step.sub}</div>
              </motion.div>

              {i < 3 && (
                <div className="hidden md:flex items-center flex-shrink-0 px-1">
                  <ArrowRight size={18} className="text-electric-500/40" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    <CTABanner
      title="Not Sure Where to Start?"
      subtitle="Our experts will assess your needs and recommend the right combination of solutions for your goals."
      buttonText="Talk to an Expert"
    />
  </motion.div>
);

export default Solutions;
