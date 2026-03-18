import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Radio, Cpu, MessageSquare, Search, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy"
            onError={e => { e.target.style.display = 'none'; }} />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-25"
            style={{ background: '#DC2626' }} />
        </div>
      </div>
    </motion.div>
  );
};

const DigitalMarketing = () => (
  <motion.div {...pageTransition}>
    <Helmet>
      <title>Digital Marketing | Engage and Grow Your Potential Target Audience | OnDirect</title>
      <meta name="description" content="B2B businesses aspire to engage and grow their audience. Through search, social and email marketing, we help global companies acquire and retain their customers." />
    </Helmet>

    <PageHero
      eyebrow="Digital Marketing"
      title="Engage & Grow Your Potential Target Audience"
      subtitle="B2B businesses aspire to engage and grow their audience. Through search, social and email marketing, we help global companies acquire and retain their customers. We create digital content for email automation, monitor brand reputation as well as manage technology."
      gradient
    />

    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 space-y-24">
        <DetailCard
          image="https://ondirect.in/wp-content/uploads/2019/04/social-listning.jpg"
          badge="Online Reputation Management"
          title="Social Listening"
          description="A powerful social media monitoring strategy is proven to increase customer lifetime value. Through our proven reputation management approach, we track and respond to client feedback in a timely, continual and consistent manner. We specialize in customer advocacy, and influence marketing by repurposing user-generated social content to identify and attract potential customers. Our listening technology assists you with the right keywords for better control over your customer grievances, along with competition keywords research for business intelligence."
          points={[
            'Proven reputation management — track and respond to feedback consistently',
            'Customer advocacy and influence marketing via user-generated content',
            'Right keywords for better control over customer grievances',
            'Competition keywords research for actionable business intelligence',
          ]}
          index={0}
        />
        <DetailCard
          image="https://ondirect.in/wp-content/uploads/2019/04/technology-image-1500x928.jpg"
          badge="Enhanced Technology Insights"
          title="Technology Research"
          description="Inaccurate data can cost a company a significant part of its revenue. OnDirect assists its clients to align their prospect database as well as capture technology-related information required to drive critical business decisions. Our research team tracks over 2000 technology keywords and identifies category relevant data through mirrored promotions. We gather competitive intelligence with insights related to your products or services through profiling questionnaires, surveys, as well as backend BI."
          points={[
            'Align prospect database with technology-related information',
            'Research team tracks over 2,000 technology keywords',
            'Category relevant data identified through mirrored promotions',
            'Competitive intelligence via profiling questionnaires, surveys & backend BI',
          ]}
          reverse
          index={1}
        />
      </div>
    </section>

    {/* Channel capabilities */}
    <section className="py-20" style={{ background: '#0D1526' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
            Full-Funnel <span className="gradient-text">Digital Channels</span>
          </h2>
          <p className="text-slate-400 font-dm max-w-2xl mx-auto">
            From awareness to conversion, we run the complete digital marketing mix for B2B businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Radio,       title: 'Social Listening',      desc: 'Monitor brand mentions, respond to feedback, and track competitive intelligence across social channels.' },
            { icon: Cpu,         title: 'Technology Research',   desc: 'Track 2,000+ technology keywords to align your prospects database and capture critical buying signals.' },
            { icon: MessageSquare,title:'Email Automation',      desc: 'Targeted email campaigns with automation flows reaching verified decision-makers in your exact ICP.' },
            { icon: Search,      title: 'Keyword Research',      desc: 'Identify the right keywords for controlling customer grievances and competitive business intelligence.' },
            { icon: TrendingUp,  title: 'Content Distribution',  desc: 'Distribute your best content assets to targeted B2B audiences across our premium publisher network.' },
            { icon: CheckCircle, title: 'Performance Reporting', desc: 'Full attribution and real-time dashboards showing ROI at every stage of the digital funnel.' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4 group-hover:bg-cyan-500/25 transition-colors">
                <item.icon size={20} className="text-cyan-400" />
              </div>
              <h4 className="font-syne font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400 font-dm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner
      title="Launch Your Next Digital Campaign"
      subtitle="Our digital team is ready to build a high-converting B2B demand generation program for you."
      buttonText="Get Started"
    />
  </motion.div>
);

export default DigitalMarketing;
