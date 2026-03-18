import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LogOut, Mail, Phone, Building2, MessageSquare, RefreshCw, Users, Clock } from 'lucide-react';
import api from '../../services/api';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, today: 0, thisWeek: 0 });
  const navigate = useNavigate();

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('od_admin_token');
      const res = await api.get('/admin/leads', { headers: { Authorization: `Bearer ${token}` } });
      setLeads(res.data.leads || []);
      setStats(res.data.stats || { total: 0, today: 0, thisWeek: 0 });
    } catch {
      toast.error('Failed to fetch leads. Please re-login.');
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLeads(); }, []);

  const logout = () => {
    localStorage.removeItem('od_admin_token');
    navigate('/admin/login');
    toast.success('Logged out');
  };

  const formatDate = (d) => new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="min-h-screen bg-navy-950 pt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-syne font-black text-2xl text-white">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm font-dm">OnDirect Lead Management</p>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchLeads}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-300 hover:text-white text-sm font-dm transition-colors">
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
            <button onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-dm text-slate-300 hover:text-red-400 transition-colors glass">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: Users, label: 'Total Leads', value: stats.total },
            { icon: Clock, label: "Today's Leads", value: stats.today },
            { icon: Mail, label: 'This Week', value: stats.thisWeek },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-electric-500/15 flex items-center justify-center">
                <s.icon size={20} className="text-electric-400" />
              </div>
              <div>
                <div className="font-syne font-black text-2xl gradient-text">{s.value}</div>
                <div className="text-xs text-slate-400 font-dm">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-syne font-semibold text-white">All Leads</h2>
            <span className="text-xs text-slate-500 font-dm">{leads.length} entries</span>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-electric-500/30 border-t-electric-500 rounded-full animate-spin" />
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-dm">No leads yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    {['Name', 'Email', 'Company', 'Service', 'Message', 'Date'].map(h => (
                      <th key={h} className="text-left px-6 py-3 text-xs font-syne font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <motion.tr key={lead._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-dm text-white">{lead.firstName} {lead.lastName}</span>
                      </td>
                      <td className="px-6 py-4">
                        <a href={`mailto:${lead.email}`} className="text-sm font-dm text-electric-400 hover:text-electric-300 transition-colors">{lead.email}</a>
                      </td>
                      <td className="px-6 py-4 text-sm font-dm text-slate-400">{lead.company || '—'}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-lg text-xs font-dm capitalize"
                          style={{ background: 'rgba(239,68,68,0.12)', color: '#F87171' }}>
                          {lead.service || 'general'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-dm text-slate-400 line-clamp-1 max-w-xs">{lead.message}</span>
                      </td>
                      <td className="px-6 py-4 text-xs font-dm text-slate-500 whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
