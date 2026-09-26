import React, { useState } from 'react';
import { Lock, X, KeyRound, ShieldAlert } from 'lucide-react';

const OwnerLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  if (!isOpen) return null;

  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default Owner PIN for demo dashboard access is 1234
    if (pin === '1234' || pin === 'admin' || pin === 'owner') {
      onLoginSuccess();
      onClose();
    } else {
      setError('Incorrect Admin PIN! (Demo PIN is 1234)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-rose-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-6">
          <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[#701a2b] mx-auto border border-rose-200 shadow-2xs">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-slate-900">Owner Dashboard Access</h2>
          <p className="text-xs text-slate-500">
            Secure login for <strong>Pranjul Fashion House</strong> management.
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-rose-50 text-rose-800 text-xs p-3 rounded-xl border border-rose-200 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Enter Owner Passcode PIN:
            </label>
            <div className="relative">
              <KeyRound className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="Enter PIN (Default: 1234)"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError('');
                }}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-center tracking-widest text-slate-900 focus:ring-2 focus:ring-[#701a2b] focus:bg-white focus:outline-hidden"
                autoFocus
              />
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Demo Admin Passcode: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-slate-700">1234</code>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#701a2b] hover:bg-rose-900 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-md"
          >
            Access Owner Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerLoginModal;
