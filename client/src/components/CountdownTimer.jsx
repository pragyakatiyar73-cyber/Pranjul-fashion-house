import React, { useState, useEffect } from 'react';
import { Clock, Flame, Tag, Sparkles } from 'lucide-react';

const CountdownTimer = ({ title, subtitle, targetHours = 36, language = 'en' }) => {
  const isHi = language === 'hi';

  // Calculate target end time stored in state or 36 hours from now
  const [timeLeft, setTimeLeft] = useState({
    hours: 35,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-[#6b1426] text-white py-2.5 px-4 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-3 border border-amber-300/40">
      
      {/* Title & Badge */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-white text-rose-700 flex items-center justify-center font-bold shadow-xs shrink-0 animate-pulse">
          <Flame className="w-4 h-4 fill-rose-600 text-rose-600" />
        </div>
        <div>
          <span className="font-serif font-bold text-xs sm:text-sm tracking-wide block leading-tight">
            {title || (isHi ? 'विशेष त्यौहार ऑफर - सीमित समय!' : "Today's Festival Special Offer!")}
          </span>
          <span className="text-[10px] text-amber-100 font-medium block">
            {subtitle || (isHi ? 'चौबेपुर स्टोर और ऑनलाइन पूछताछ पर लागू' : 'Valid on Chaubepur store visit & inquiries')}
          </span>
        </div>
      </div>

      {/* Dynamic Counter Display */}
      <div className="flex items-center gap-1.5 shrink-0">
        <Clock className="w-3.5 h-3.5 text-amber-200 hidden sm:block" />
        
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-950/80 text-amber-300 font-mono font-extrabold text-xs sm:text-sm px-2 py-1 rounded-lg border border-amber-400/40 min-w-[28px] text-center shadow-inner">
            {formatTwoDigits(timeLeft.hours)}
          </div>
          <span className="text-[9px] uppercase font-bold text-amber-100 mt-0.5">{isHi ? 'घंटे' : 'Hrs'}</span>
        </div>

        <span className="font-bold text-amber-300 text-sm">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-950/80 text-amber-300 font-mono font-extrabold text-xs sm:text-sm px-2 py-1 rounded-lg border border-amber-400/40 min-w-[28px] text-center shadow-inner">
            {formatTwoDigits(timeLeft.minutes)}
          </div>
          <span className="text-[9px] uppercase font-bold text-amber-100 mt-0.5">{isHi ? 'मिनट' : 'Min'}</span>
        </div>

        <span className="font-bold text-amber-300 text-sm">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-slate-950/80 text-amber-300 font-mono font-extrabold text-xs sm:text-sm px-2 py-1 rounded-lg border border-amber-400/40 min-w-[28px] text-center shadow-inner">
            {formatTwoDigits(timeLeft.seconds)}
          </div>
          <span className="text-[9px] uppercase font-bold text-amber-100 mt-0.5">{isHi ? 'सेकंड' : 'Sec'}</span>
        </div>
      </div>

    </div>
  );
};

export default CountdownTimer;
