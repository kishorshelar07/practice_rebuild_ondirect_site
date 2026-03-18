import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Database, SearchCheck, RefreshCw, Globe, Filter, CheckCircle, ArrowRight } from 'lucide-react';
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
            style={{ background: '#DC2626' }} />
        </div>
      </div>
    </motion.div>
  );
};

const DataSolutions = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const capabilities = [
    { icon: Globe,       title: '150+ Countries',          desc: 'Global B2B contact database covering every major market.' },
    { icon: SearchCheck, title: 'Advanced Search Tools',   desc: 'Discover contacts by geography, job title, industry, revenue, and employee size.' },
    { icon: RefreshCw,   title: 'Continuous Data Refresh', desc: 'Real-time validation ensures accuracy and deliverability of every record.' },
    { icon: Database,    title: 'B2B Data Cleansing',      desc: 'Remove duplicates, update missing fields, and enrich existing contact lists.' },
    { icon: Filter,      title: 'Audience Profiling',      desc: 'Segment audiences by firmographic and technographic attributes.' },
    { icon: CheckCircle, title: 'Verified Contacts',       desc: 'Every contact verified for accuracy before delivery to your team.' },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Data Solutions | Professionally Verified and Accurate Data | OnDirect</title>
        <meta name="description" content="Ensuring clean, error-free data is critical for business success. Our goal is to identify and enrich data, highlighting interests as well as intent insights of potential customers." />
      </Helmet>

      <PageHero
        eyebrow="Data Solutions"
        title="Professionally Verified & Accurate B2B Data"
        subtitle="Ensuring clean, error-free data is critical for business success. Our goal is to identify and enrich data, highlighting interests as well as intent insights of potential customers through our proprietary technology stack. Leverage our data solutions to engage new prospects and verify your existing data, accelerating your sales and marketing progress."
        gradient
      />

      {/* Main services */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 space-y-24">
          <DetailCard
            image="https://ondirect.in/wp-content/uploads/2019/04/contact-discovery-700x500.jpg"
            badge="Verified And Accurate Data"
            title="Contact Discovery"
            description="With a team that has years of relevant expertise and skills, we research and deliver current, validated B2B contacts, solving prospecting challenges faced by your sales teams. We further ensure that the data is precise, helping you reach the right decision makers from the right company at the right time. Our advanced search tools help discover and verify contacts based on your target segment requirements across geography, job title, industry, revenue, and employee size."
            points={[
              'Current, validated B2B contacts from expert research teams',
              'Precise data reaching the right decision makers at the right company',
              'Advanced search by geography, job title, industry, revenue, employee size',
              'Solves prospecting challenges for your sales teams',
            ]}
            index={0}
          />
          <DetailCard
            image="https://ondirect.in/wp-content/uploads/2019/05/data-enrichment.jpg"
            badge="Intelligent High Definition Data"
            title="Data Enrichment"
            description="Our B2B data cleansing & audience profiling solutions get you in front of the right audience with accurate and proper data. We gather data from multiple external and internal sources and also refine your current contact list. We specialize in updating the missing and incorrect prospect data while merging the duplicates. This cleansed and updated data provides a better viewpoint on consumer buying behavior that results in higher sales conversion rates."
            points={[
              'B2B data cleansing and audience profiling in one solution',
              'Data gathered from multiple external and internal sources',
              'Missing and incorrect prospect data updated, duplicates merged',
              'Better consumer buying behavior insights for higher conversion rates',
            ]}
            reverse
            index={1}
          />
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-20" style={{ background: '#0D1526' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Data Capabilities
            </span>
            <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-4">
              Everything You Need for <span className="gradient-text">Precision Targeting</span>
            </h2>
            <p className="text-slate-400 font-dm max-w-2xl mx-auto">
              Our proprietary technology stack powers every data solution — from discovery to enrichment to validation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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
        title="Need Better B2B Data?"
        subtitle="Request a custom data sample for your target market — no commitment required."
        buttonText="Request a Sample"
      />
    </motion.div>
  );
};

export default DataSolutions;
