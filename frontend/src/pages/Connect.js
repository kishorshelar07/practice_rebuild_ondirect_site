import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { pageTransition } from '../animations/variants';
import { PageHero } from '../components/sections/SectionComponents';
import api from '../services/api';

const Connect = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await api.post('/contact', data);
      setSubmitted(true);
      reset();
      toast.success('Message sent! We\'ll be in touch soon.');
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (error) =>
    `w-full bg-navy-800 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 font-dm outline-none focus:ring-2 transition-all duration-200 ${
      error
        ? 'border-red-500/50 focus:ring-red-500/30'
        : 'border-white/8 focus:border-electric-500/50 focus:ring-electric-500/20'
    }`;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Connect | OnDirect Marketing Services</title>
        <meta name="description" content="Get in touch with OnDirect. Let's discuss your B2B lead generation goals." />
      </Helmet>

      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something Great"
        subtitle="Ready to amplify your lead generation? Our team is here to craft the perfect B2B demand solution for you."
      />

      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-7">
                <h3 className="font-syne font-bold text-xl text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-electric-400" />
                    </div>
                    <div>
                      <div className="text-sm font-syne font-medium text-white mb-1">Office</div>
                      <div className="text-sm text-slate-400 font-dm leading-relaxed">
                        312, Tower-2, World Trade Center,<br />
                        EON Free Zone, Kharadi,<br />
                        Pune, Maharashtra 411014
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-electric-500/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-electric-400" />
                    </div>
                    <div>
                      <div className="text-sm font-syne font-medium text-white mb-1">Email</div>
                      <a href="mailto:business@ondirect.in" className="text-sm text-electric-400 hover:text-electric-300 font-dm">
                        business@ondirect.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="glass rounded-2xl p-7">
                <h3 className="font-syne font-bold text-base text-white mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', text: 'We review your requirements within 24 hours' },
                    { step: '02', text: 'Our team schedules a discovery call' },
                    { step: '03', text: 'We present a tailored B2B program proposal' },
                    { step: '04', text: 'Program launch within 2 weeks of sign-off' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <span className="font-syne font-bold text-xs text-electric-400">{item.step}</span>
                      <div className="w-px h-4 bg-electric-500/30" />
                      <span className="text-sm text-slate-400 font-dm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white">Message Sent!</h3>
                  <p className="text-slate-400 font-dm max-w-sm">
                    Thanks for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-electric-400 hover:text-electric-300 font-syne font-medium transition-colors"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <div className="glass rounded-2xl p-8">
                  <h3 className="font-syne font-bold text-xl text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          {...register('firstName', { required: 'Required' })}
                          placeholder="John"
                          className={inputClass(errors.firstName)}
                        />
                        {errors.firstName && <p className="text-red-400 text-xs mt-1 font-dm">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          {...register('lastName', { required: 'Required' })}
                          placeholder="Doe"
                          className={inputClass(errors.lastName)}
                        />
                        {errors.lastName && <p className="text-red-400 text-xs mt-1 font-dm">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                        type="email"
                        placeholder="john@company.com"
                        className={inputClass(errors.email)}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1 font-dm">{errors.email.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          {...register('company')}
                          placeholder="Acme Corp"
                          className={inputClass(false)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          placeholder="+91 98765 43210"
                          className={inputClass(false)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        I'm Interested In
                      </label>
                      <select {...register('service')} className={`${inputClass(false)} cursor-pointer`}>
                        <option value="">Select a service</option>
                        <option value="lead-management">Lead Management</option>
                        <option value="data-solutions">Data Solutions</option>
                        <option value="sales-targeting">Sales Targeting</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Please tell us about your needs' })}
                        rows={5}
                        placeholder="Tell us about your lead generation goals, target market, and what you're looking to achieve..."
                        className={`${inputClass(errors.message)} resize-none`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1 font-dm">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-syne font-semibold text-white text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                      style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 6px 24px rgba(239,68,68,0.35)' }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Connect;
