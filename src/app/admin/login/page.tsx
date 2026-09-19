'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Flower2, ShieldAlert } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple secure check for admin session
    if (username === 'admin' && password === 'admin123') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('pranjul_admin_auth', 'true');
      }
      router.push('/admin/dashboard');
    } else {
      setError('Invalid admin credentials. Use admin / admin123');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-3xl border border-[#EADED2] shadow-xl max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#5A1827] text-[#F7D6D0] flex items-center justify-center mx-auto">
            <Flower2 className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#5A1827]">
            Boutique Admin Portal
          </h1>
          <p className="text-xs text-[#7A6B68]">
            Pranjul Fashion House • Management Dashboard
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-[#FDEDEC] text-[#C0392B] text-xs font-semibold flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. admin"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors shadow-md"
          >
            Log In to Admin Dashboard
          </button>
        </form>

        <p className="text-[10px] text-center text-[#8C7A77]">
          Default Credentials: username: <span className="font-mono font-bold">admin</span> | password: <span className="font-mono font-bold">admin123</span>
        </p>
      </div>
    </div>
  );
}
