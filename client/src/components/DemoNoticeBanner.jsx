import React from 'react';
import { Info, Lock } from 'lucide-react';

const DemoNoticeBanner = ({ onOpenOwnerLogin }) => {
  return (
    <div className="w-full bg-amber-950/90 text-amber-100 text-xs sm:text-sm py-2 px-4 sm:px-8 lg:px-12 shadow-2xs border-b border-amber-800/60">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Info className="w-4 h-4 text-amber-300 shrink-0" />
          <span>
            <strong className="font-semibold text-amber-200">Demo Data Mode:</strong> Representative inventory for <strong>Pranjul Fashion House (Chaubepur)</strong>. Real prices & items can be updated in the dashboard.
          </span>
        </div>
        <button
          onClick={onOpenOwnerLogin}
          className="inline-flex items-center gap-1.5 bg-amber-900 hover:bg-amber-800 text-amber-100 font-medium px-3 py-1 rounded text-xs transition border border-amber-700/60 shrink-0 cursor-pointer"
        >
          <Lock className="w-3 h-3 text-amber-300" />
          <span>Owner Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default DemoNoticeBanner;
