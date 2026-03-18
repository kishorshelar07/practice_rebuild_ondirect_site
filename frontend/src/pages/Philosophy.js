import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Heart, Lightbulb, BookOpen, ChevronRight, TrendingUp, Star, Zap } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero, CTABanner } from '../components/sections/SectionComponents';

const Philosophy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const pillars = [
    {
      icon: Heart,
      title: 'Client Satisfaction',
      subtitle: 'Consistent and active contributors',
      desc: 'We are committed to exceeding our clients\' expectations in every program we execute — through consistent quality, transparent reporting, and a proactive partnership approach.',
      color: 'from-red-500/20 to-electric-500/20',
      iconColor: 'text-red-400',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      subtitle: 'Facilitate the creation of new ideas around us',
      desc: 'We lead the industry by delivering innovative programs that reflect our unique and broad multi-channel capabilities. We never stop looking for better ways to generate value for our clients.',
      color: 'from-yellow-500/20 to-cyan-500/20',
      iconColor: 'text-yellow-400',
    },
    {
      icon: BookOpen,
      title: 'Thought Leadership',
      subtitle: 'Empower development and sustenance of domain specific knowledge',
      desc: 'OnDirect empowers the development and sustenance of domain-specific knowledge across B2B marketing, inside sales, and demand generation — enabling our team and clients to always stay ahead.',
      color: 'from-violet-500/20 to-electric-500/20',
      iconColor: 'text-violet-400',
    },
  ];

  const principles = [
    { icon: ChevronRight, text: 'Think and plan forward' },
    { icon: TrendingUp,   text: 'Progressive in every aspect, never afraid to set new standards' },
    { icon: Star,         text: 'Push limits and own unique accomplishments, both internally and externally' },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Brand Philosophy | Lead Forward | Generating Value for Clients | OnDirect</title>
        <meta name="description" content="The OnDirect brand's guiding principle is to lead. Through a committed culture that works hard to satisfy clients, move forward to greater opportunity." />
      </Helmet>

      <PageHero
        eyebrow="Brand Philosophy"
        title="Lead Forward. Always."
        subtitle="The OnDirect brand's guiding principle is to lead. Through a committed culture that works hard to satisfy clients, move forward to greater opportunity."
        gradient
      />

      {/* Main philosophy */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-10 md:p-14 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: '#EF4444', transform: 'translate(50%,-50%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-8 blur-3xl"
              style={{ background: '#DC2626', transform: 'translate(-50%,50%)' }} />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-syne font-semibold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" />Our Philosophy
              </span>
              <p className="text-base md:text-lg text-slate-300 font-dm leading-relaxed">
                The ONDIRECT brand's guiding principle is to lead. Through a committed culture that works hard to 
                satisfy clients, move forward to greater opportunity. Our collaborative work practices improve 
                individual performance by maintaining a constant emphasis on knowledge, making significant efforts, 
                establishing new standards, and producing more value for our clients.
              </p>
              <p className="text-base md:text-lg text-slate-300 font-dm leading-relaxed mt-5">
                The guiding principle of ONDIRECT is to consistently work to exceed our clients' expectations 
                while maintaining a competitive edge. ONDIRECT has been boosting business performance globally 
                with a strong customer-centric strategy and high ROI emphasis. Because of this, ONDIRECT has 
                become one of the world's top lead generation businesses. For ONDIRECT, pursuing excellence is 
                a never-ending quest that it undertakes with an unwavering attitude.
              </p>
            </div>
          </motion.div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-7 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <p.icon size={28} className={p.iconColor} />
                </div>
                <h3 className="font-syne font-bold text-lg text-white mb-2">{p.title}</h3>
                <p className="text-xs font-syne font-semibold text-electric-400 mb-3 uppercase tracking-wide">{p.subtitle}</p>
                <p className="text-sm text-slate-400 font-dm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Forward thinking */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-10"
          >
            <h3 className="font-syne font-black text-2xl md:text-3xl text-white mb-3 text-center">
              OnDirect Strives to <span className="gradient-text">Achieve Greater Heights</span>
            </h3>
            <p className="text-slate-400 font-dm text-center mb-8 max-w-2xl mx-auto">
              This has led to the development of a forward-thinking company that can:
            </p>
            <div className="space-y-4">
              {principles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-colors hover:bg-white/3"
                  style={{ border: '1px solid rgba(239,68,68,0.1)' }}
                >
                  <div className="w-9 h-9 rounded-xl bg-electric-500/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-electric-400" />
                  </div>
                  <p className="text-slate-300 font-dm text-sm leading-relaxed pt-1.5">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Aligned With Our Philosophy?"
        subtitle="If precision, quality, and an unwavering pursuit of excellence resonate with you — let's connect."
        buttonText="Start a Conversation"
      />
    </motion.div>
  );
};

export default Philosophy;
