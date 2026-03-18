import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FileText, Phone, BarChart3, Target, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

/* ── Detail Card ────────────────────────────────────────────────────────────── */
const DetailCard = ({ image, badge, title, description, points = [], reverse = false, index = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-14 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Text */}
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}
        >
          {badge}
        </span>
        <h3 className="font-syne font-black text-2xl md:text-3xl text-white mb-5 leading-tight">{title}</h3>
        <p className="text-slate-400 font-dm leading-relaxed mb-6">{description}</p>
        {points.length > 0 && (
          <ul className="space-y-2.5 mb-7">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-dm">
                <CheckCircle size={16} className="text-electric-400 flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/connect"
          className="inline-flex items-center gap-2 text-sm font-syne font-semibold text-electric-400 hover:text-white transition-colors group"
        >
          Learn More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Image */}
      <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          style={{ border: '1px solid rgba(239,68,68,0.15)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={e => { e.target.style.display = 'none'; e.target.parentNode.style.background = '#0D1526'; }}
          />
          <div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-25"
            style={{ background: '#EF4444' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ── Progressive Leads ─────────────────────────────────────────────────────── */
const ProgressiveLeads = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const stages = [
    { icon: FileText,  label: 'Content',   stageLabel: 'Stage 1', colorClass: 'from-electric-500 to-cyan-500' },
    { icon: Phone,     label: 'Telephone', stageLabel: 'Stage 2', colorClass: 'from-cyan-500 to-violet-500' },
    { icon: BarChart3, label: 'Marketing', stageLabel: 'Stage 3', colorClass: 'from-violet-500 to-electric-500' },
    { icon: Target,    label: 'Sales',     stageLabel: 'Stage 4', colorClass: 'from-electric-500 to-cyan-400' },
    { icon: Star,      label: 'Success',   stageLabel: '🏆',      colorClass: 'from-yellow-500 to-orange-400', isSuccess: true },
  ];

  return (
    <section className="py-20" style={{ background: '#0D1526' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />
            Progressive Leads
          </span>
          <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
            Prospects Progressed Through{' '}
            <span className="gradient-text">One Single Outreach</span>
          </h2>
          <p className="text-slate-400 font-dm max-w-2xl mx-auto leading-relaxed">
            Prospects are progressed through potential stages with one single outreach —
            from Content to Telephone to Marketing to Sales, finding success at every phase.
          </p>
        </motion.div>

        {/* Stage cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3">
          {stages.map((stage, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex-1 flex flex-col items-center text-center glass rounded-2xl p-6 group relative overflow-hidden"
                style={stage.isSuccess ? { border: '1px solid rgba(234,179,8,0.3)' } : {}}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.colorClass} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <stage.icon size={24} className="text-white" />
                </div>
                <div
                  className="text-xs font-syne font-semibold tracking-widest uppercase mb-1"
                  style={{ color: stage.isSuccess ? '#FBBF24' : '#F87171' }}
                >
                  {stage.stageLabel}
                </div>
                <div className="font-syne font-bold text-lg text-white">{stage.label}</div>
                {stage.isSuccess && (
                  <p className="text-xs text-slate-400 font-dm mt-2 leading-relaxed">
                    Find Success at every phase of a Progressive Lead
                  </p>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #EF4444, transparent)' }}
                />
              </motion.div>

              {/* Connector arrow */}
              {i < stages.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-1 flex-shrink-0">
                  <ArrowRight size={18} className="text-electric-500/40" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Page ───────────────────────────────────────────────────────────────────── */
const LeadManagement = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Lead Management | Content Syndication | Lead Nurturing & Qualification | OnDirect</title>
      <meta
        name="description"
        content="Our lead intelligence, segmentation and quality focus delivers qualified and actionable leads for your bespoke program requirements."
      />
    </Helmet>

    <PageHero
      eyebrow="Lead Management"
      title="Qualified & Actionable Leads for Your Programs"
      subtitle="Our lead intelligence, segmentation and quality focus delivers qualified and actionable leads for your bespoke program requirements. Our ever-growing data, multi-channel capabilities and lead-scoring mechanism helps your sales teams connect with the right audience at the right time."
      gradient
    />

    {/* Three core services */}
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 space-y-24">

        {/* Content Syndication */}
        <DetailCard
          image="https://ondirect.in/wp-content/uploads/2019/04/content-syndication.jpg"
          badge="Your Content In Front Of The Right Audience"
          title="Content Syndication"
          description="We provide our B2B clients with proven marketing services. We take your best material and deliver it directly to an engaged audience actively looking for information on your solutions. We also help you keep up consistently with demands of creating relevant, insightful, useful content, enabling you to measure every click and conversion, ensuring that your efforts deliver the right results."
          points={[
            'Deliver your best content directly to an engaged, solution-seeking audience',
            'Consistent content creation support to keep up with market demands',
            'Measure every click and conversion with full attribution',
            'Aligned B2B program results based on your specific objectives',
          ]}
          index={0}
        />

        {/* Lead Nurturing */}
        <DetailCard
          image="https://ondirect.in/wp-content/uploads/2019/04/lead-nurturing.jpg"
          badge="Attract Engaged Buyers"
          title="Lead Nurturing"
          description="A strategic multi-pronged lead nurturing approach is critical for your success. Our lead nurture solutions help you attract buyers and nurture them with personalized programs, so sales can step in when prospects are engaged and ready. We help you choose the right outreach channel. More target prospects get moved through your opportunity funnel with the help of our critical behavior insights."
          points={[
            'Personalized, multi-touch nurture programs for every buyer persona',
            'Choose the right outreach channel with our expert guidance',
            'Critical buyer behavior insights to guide your nurture cadence',
            'Sales-ready handoff triggered at peak prospect engagement',
          ]}
          reverse
          index={1}
        />

        {/* Lead Qualification */}
        <DetailCard
          image="https://ondirect.in/wp-content/uploads/2019/04/lead-qualification.jpg"
          badge="Data Driven Strategy For Maximized Results"
          title="Lead Qualification"
          description="Our lead qualification expertise gives your team the intelligence, tools, and assistance required to convert leads. All our leads are verified through a rigorous quality assurance process before they make it into your funnel. Our lead preference mechanism helps you gauge audience interest. We rigorously map prospects based on intent levels. You can build on the relationship you've already begun during prospecting and nurturing phases with our marketing and sales ready leads."
          points={[
            'Every lead verified through rigorous quality assurance before delivery',
            'Intent-level prospect mapping for pinpoint scoring accuracy',
            'BANT-qualified leads — marketing-ready and sales-ready',
            'Continue building on relationships started during nurturing',
          ]}
          index={2}
        />

      </div>
    </section>

    {/* Progressive Leads model */}
    <ProgressiveLeads />

    <CTABanner
      title="Ready for Better Leads?"
      subtitle="Let's design a lead management program tailored to your exact sales goals and ICP."
      buttonText="Connect With Us"
    />
  </motion.div>
);

export default LeadManagement;
