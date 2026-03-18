import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowRight, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const R = 'rgba(239,68,68,'; // red shorthand

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0A0101', borderTop: `1px solid ${R}0.1)` }}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: '#EF4444' }} />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-20 pb-8">

        {/* Top CTA strip */}
        <div className="rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(239,68,68,0.07)', border: `1px solid ${R}0.18)` }}>
          <div>
            <h3 className="font-syne font-black text-2xl md:text-3xl text-white mb-2">
              Ready to <span className="gradient-text">Amplify Your Sales?</span>
            </h3>
            <p className="text-sm font-dm" style={{ color: '#94A3B8' }}>
              Connect with our B2B demand generation experts today.
            </p>
          </div>
          <Link to="/connect"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl font-syne font-semibold text-white text-sm whitespace-nowrap transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 6px 24px rgba(239,68,68,0.4)' }}>
            Talk to Us <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 4px 16px rgba(239,68,68,0.35)' }}>
                <span className="font-syne font-black text-sm text-white">OD</span>
              </div>
              <div>
                <div className="font-syne font-bold text-lg text-white">OnDirect</div>
                <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: '#F87171' }}>Marketing Services</div>
              </div>
            </Link>
            <p className="text-sm font-dm leading-relaxed mb-5" style={{ color: '#64748B' }}>
              Your inside sales specialist. Connecting 13 billion potential customers across 150 countries every year.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(239,68,68,0.08)', border: `1px solid ${R}0.15)`, color: '#64748B' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#F87171'; e.currentTarget.style.borderColor = R+'0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.borderColor = R+'0.15)'; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Why OnDirect */}
          <div>
            <h4 className="font-syne font-semibold text-xs text-white mb-5 uppercase tracking-widest">Why OnDirect</h4>
            <ul className="space-y-3">
              {[
                { l: 'Overview',         h: '/ondirect-edge' },
                { l: 'Brand Philosophy', h: '/brand-philosophy' },
                { l: 'About Us',         h: '/about-us' },
                { l: 'Careers',          h: '/careers' },
              ].map(item => (
                <li key={item.h}>
                  <Link to={item.h} className="text-sm font-dm animated-underline inline-block transition-colors duration-200"
                    style={{ color: '#64748B' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-syne font-semibold text-xs text-white mb-5 uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              {[
                { l: 'Overview',          h: '/solutions' },
                { l: 'Lead Management',   h: '/lead-management' },
                { l: 'Data Solutions',    h: '/data-solutions' },
                { l: 'Sales Targeting',   h: '/sales-targeting' },
                { l: 'Digital Marketing', h: '/digital-marketing' },
              ].map(item => (
                <li key={item.h}>
                  <Link to={item.h} className="text-sm font-dm animated-underline inline-block transition-colors duration-200"
                    style={{ color: '#64748B' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-syne font-semibold text-xs text-white mb-5 uppercase tracking-widest">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                <p className="text-sm font-dm leading-relaxed" style={{ color: '#64748B' }}>
                  312, Tower-2, World Trade Center,<br />
                  EON Free Zone, Kharadi,<br />
                  Pune, Maharashtra 411014
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0" style={{ color: '#EF4444' }} />
                <a href="mailto:business@ondirect.in" className="text-sm font-dm transition-colors"
                  style={{ color: '#64748B' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>
                  business@ondirect.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${R}0.08)` }}>
          <p className="text-xs font-dm" style={{ color: '#334155' }}>
            © {year} OnDirect Marketing Services LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs font-dm transition-colors" style={{ color: '#334155' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
              onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
              Privacy Policy
            </Link>
            <Link to="/connect" className="text-xs font-dm transition-colors" style={{ color: '#334155' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
              onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
