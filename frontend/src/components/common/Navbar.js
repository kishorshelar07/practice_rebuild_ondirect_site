import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const solutions = [
  { label: 'Lead Management',  href: '/lead-management',  desc: 'Qualify and nurture prospects at scale' },
  { label: 'Data Solutions',   href: '/data-solutions',   desc: 'Precision B2B data for every campaign' },
  { label: 'Sales Targeting',  href: '/sales-targeting',  desc: 'Laser-focused account-based outreach' },
  { label: 'Digital Marketing',href: '/digital-marketing',desc: 'Full-funnel demand generation' },
];

const navLinks = [
  { label: 'Why OnDirect', href: '/ondirect-edge' },
  { label: 'Solutions',    href: '/solutions', dropdown: solutions },
  { label: 'Philosophy',   href: '/brand-philosophy' },
  { label: 'About',        href: '/about-us' },
  { label: 'Careers',      href: '/careers' },
];

const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [location]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: {
            background:     'rgba(10,1,1,0)',
            backdropFilter: 'blur(0px)',
          },
          scrolled: {
            background:     'rgba(17,2,2,0.95)',
            backdropFilter: 'blur(24px)',
          },
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ borderColor: scrolled ? 'rgba(239,68,68,0.15)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', boxShadow: '0 4px 16px rgba(239,68,68,0.4)' }}
              >
                <span className="font-syne font-black text-sm text-white">OD</span>
              </div>
              <div>
                <span className="font-syne font-bold text-lg text-white tracking-wide leading-none">OnDirect</span>
                <div className="text-[9px] tracking-[0.22em] uppercase leading-none mt-0.5"
                  style={{ color: '#F87171' }}>
                  Marketing Services
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-dm font-medium transition-all duration-200"
                    style={{
                      color: location.pathname === link.href ? '#F87171' : '#CBD5E1',
                      background: location.pathname === link.href ? 'rgba(239,68,68,0.1)' : 'transparent',
                    }}
                    onMouseEnter={e => { if (location.pathname !== link.href) e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                    onMouseLeave={e => { if (location.pathname !== link.href) { e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown size={13} className="transition-transform duration-200"
                        style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl p-2 shadow-2xl"
                        style={{
                          background: 'rgba(17,2,2,0.97)',
                          border: '1px solid rgba(239,68,68,0.15)',
                          backdropFilter: 'blur(20px)',
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="group flex items-start gap-3 p-3 rounded-xl transition-colors duration-200"
                            style={{ color: 'inherit' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.08)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: 'rgba(239,68,68,0.15)' }}>
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#F87171' }} />
                            </div>
                            <div>
                              <div className="text-sm font-medium font-dm" style={{ color: '#F1F5F9' }}>{item.label}</div>
                              <div className="text-xs font-dm mt-0.5" style={{ color: '#64748B' }}>{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* ── CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              <Link
                to="/connect"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-syne font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                  boxShadow: '0 4px 18px rgba(239,68,68,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(239,68,68,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(239,68,68,0.35)'; }}
              >
                Connect <ArrowRight size={14} />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', color: '#F87171' }}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen
                    ? <motion.div key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90,  opacity: 0 }} transition={{ duration: 0.18 }}><X    size={20} /></motion.div>
                    : <motion.div key="menu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={20} /></motion.div>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
            style={{
              background: 'rgba(17,2,2,0.97)',
              borderBottom: '1px solid rgba(239,68,68,0.12)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
              {navLinks.map(link => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center px-4 py-3 rounded-xl text-sm font-dm font-medium transition-colors"
                    style={{ color: location.pathname === link.href ? '#F87171' : '#CBD5E1' }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-5 flex flex-col gap-0.5">
                      {link.dropdown.map(item => (
                        <Link key={item.href} to={item.href}
                          className="px-4 py-2.5 rounded-xl text-sm font-dm transition-colors"
                          style={{ color: '#94A3B8' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#F87171'}
                          onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/connect"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-syne font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}>
                Connect Now <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
