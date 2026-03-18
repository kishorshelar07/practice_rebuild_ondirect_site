import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import api from '../../services/api';

const AdminLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await api.post('/admin/login', data);
      localStorage.setItem('od_admin_token', res.data.token);
      toast.success('Welcome back!');
      navigate('/admin/dashboard');
    } catch {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const inp = (err) => `w-full bg-navy-800 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 transition-all font-dm ${
    err ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/8 focus:border-electric-500/50 focus:ring-electric-500/20'
  }`;

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-hero-mesh opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative glass rounded-2xl p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center mb-4">
            <Lock size={24} className="text-white" />
          </div>
          <h1 className="font-syne font-bold text-2xl text-white">Admin Login</h1>
          <p className="text-slate-400 text-sm font-dm mt-1">OnDirect Marketing Services</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                {...register('email', { required: 'Email required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })}
                className={`${inp(errors.email)} pl-10`}
                placeholder="admin@ondirect.in"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs mt-1 font-dm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-syne font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                {...register('password', { required: 'Password required' })}
                type={showPass ? 'text' : 'password'}
                className={`${inp(errors.password)} pl-10 pr-10`}
                placeholder="••••••••"
              />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-xs mt-1 font-dm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-syne font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 mt-2"
            style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </div>
            ) : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
