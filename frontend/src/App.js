import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Pages — direct imports (no *Full suffix)
import Home            from './pages/Home';
import About           from './pages/About';
import Solutions       from './pages/Solutions';
import LeadManagement  from './pages/LeadManagement';
import DataSolutions   from './pages/DataSolutions';
import SalesTargeting  from './pages/SalesTargeting';
import DigitalMarketing from './pages/DigitalMarketing';
import WhyOnDirect     from './pages/WhyOnDirect';
import Philosophy      from './pages/Philosophy';
import Careers         from './pages/Careers';
import Connect         from './pages/Connect';
import AdminLogin      from './pages/admin/AdminLogin';
import AdminDashboard  from './pages/admin/AdminDashboard';

// Common components
import Navbar        from './components/common/Navbar';
import Footer        from './components/common/Footer';
import Loader        from './components/common/Loader';
import PrivateRoute  from './components/common/PrivateRoute';
import ScrollToTop   from './components/common/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0D1526',
              color: '#F8FAFC',
              border: '1px solid rgba(59,130,246,0.2)',
              fontFamily: 'DM Sans, sans-serif',
            },
          }}
        />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/"                 element={<Home />} />
            <Route path="/about-us"         element={<About />} />
            <Route path="/solutions"        element={<Solutions />} />
            <Route path="/lead-management"  element={<LeadManagement />} />
            <Route path="/data-solutions"   element={<DataSolutions />} />
            <Route path="/sales-targeting"  element={<SalesTargeting />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/ondirect-edge"    element={<WhyOnDirect />} />
            <Route path="/brand-philosophy" element={<Philosophy />} />
            <Route path="/careers"          element={<Careers />} />
            <Route path="/connect"          element={<Connect />} />
            <Route path="/admin/login"      element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
