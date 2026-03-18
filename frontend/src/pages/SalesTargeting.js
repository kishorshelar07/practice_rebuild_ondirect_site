/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Users, Calendar, Target, BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

const DetailCard = ({ image, badge, title, description, points = [], reverse = false, index = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-14 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
          {badge}
        </span>
        <h3 className="font-syne font-black text-2xl md:text-3xl text-white mb-5 leading-tight">{title}</h3>
        <p className="text-slate-400 font-dm leading-relaxed mb-6">{description}</p>
        {points.length > 0 && (
          <ul className="space-y-2.5 mb-7">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-dm">
                <CheckCircle size={16} className="text-electric-400 flex-shrink-0 mt-0.5" />{p}
              </li>
            ))}
          </ul>
        )}
        <Link to="/connect" className="inline-flex items-center gap-2 text-sm font-syne font-semibold text-electric-400 hover:text-white transition-colors group">
          Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          style={{ border: '1px solid rgba(239,68,68,0.15)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-transparent z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy"
            onError={e => { e.target.style.display = 'none'; }} />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-25"
            style={{ background: '#F97316' }} />
        </div>
      </div>
    </motion.div>
  );
};

const SalesTargeting = () => {
  const stats = [
    { value: '4×', label: 'Pipeline Growth Factor' },
    { value: '60%', label: 'Cost Per Lead Reduction' },
    { value: '40%', label: 'Higher Close Rates' },
    { value: '2 Wks', label: 'Average Time to First Lead' },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Sales Targeting | Audience Profiling | Event Promotions | OnDirect</title>
        <meta name="description" content="High quality B2B contacts drive effective sales conversions. Our global outreach focus delivers an actionable list with senior decision makers from enterprises alike." />
      </Helmet>

      <PageHero
        eyebrow="Sales Targeting"
        title="High-Quality B2B Contacts. Effective Sales Conversions."
        subtitle="High quality B2B contacts drive effective sales conversions. Our global outreach focus is to deliver an actionable list with senior decision makers from small, medium or large enterprises alike. We help establish a right connect, create intelligent content, and conduct a detailed buyer assessment to ensure higher lead qualification and event participation."
        gradient
      />

      {/* Stats strip */}
      <section className="py-14" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 text-center">
                <div className="font-syne font-black text-3xl gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-slate-400 font-dm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 space-y-24">
          <DetailCard
            image="https://ondirect.in/wp-content/uploads/2019/04/audience-profiling.jpg"
            badge="Sharpen Your Targeting"
            title="Audience Profiling"
            description="Know your customers and understand their challenges, as we help develop a content target understanding that will engage them better. Our technology helps you recognize your client content needs. We help you define target accounts effectively, by unifying and analyzing consumer buying behavior across various touch-points. Our account intelligence approach helps you maximize your sales."
            points={[
              'Develop content targeting that engages your buyers better',
              'Recognize client content needs with our technology',
              'Define target accounts by unifying multi-touchpoint buying behavior',
              'Account intelligence approach that maximizes your sales output',
            ]}
            index={0}
          />
          <DetailCard
            image="https://ondirect.in/wp-content/uploads/2019/04/event-promotion.jpg"
            badge="Augment Event Participation"
            title="Event Promotions"
            description="Pre-planning an event is as important as the event itself. Predicting the number of attendees and what drives them is a constant debate in marketing circles. We help set-up your event target list, create promotion content, and drive participation through a multi-channel promotion strategy. We convert highly qualified leads into attendees and attract new audience through digital programs, increasing event success rates."
            points={[
              'Set-up event target lists aligned to your attendee ICP',
              'Create compelling event promotion content',
              'Multi-channel promotion strategy for maximum reach',
              'Convert qualified leads into attendees via digital programs',
            ]}
            reverse
            index={1}
          />
        </div>
      </section>

      {/* How we do it */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Our <span className="gradient-text">Sales Targeting Approach</span>
            </h2>
            <p className="text-slate-400 font-dm max-w-2xl mx-auto">
              We mobilize your sales by building precise prospect lists and driving multi-channel outreach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target,   title: 'ICP Definition',         desc: 'Collaborative ideal customer profile workshop to define your perfect account.' },
              { icon: Users,    title: 'Account Prioritization', desc: 'Score and rank accounts by propensity to buy using proprietary intent data.' },
              { icon: Zap,      title: 'Multi-Stakeholder Reach',desc: 'Engage the full buying committee, not just one contact per account.' },
              { icon: BarChart3,title: 'Pipeline Acceleration',  desc: 'Nurture programs to move accounts through the funnel faster.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group">
                <div className="w-11 h-11 rounded-xl bg-electric-500/15 flex items-center justify-center mb-4 group-hover:bg-electric-500/25 transition-colors">
                  <item.icon size={20} className="text-electric-400" />
                </div>
                <h4 className="font-syne font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 font-dm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Build Your Target Account List"
        subtitle="Let's identify your highest-potential accounts and build a precision outreach plan."
        buttonText="Start Targeting"
      />
    </motion.div>
  );
};

export default SalesTargeting;