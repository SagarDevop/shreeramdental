import React from 'react';
import { Star, MapPin, Award, ShieldCheck, Stethoscope } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { name: '5.0 Google Rating', icon: Star, color: 'text-amber-500', detail: 'Verified Feedback' },
    { name: '180+ Reviews', icon: ShieldCheck, color: 'text-[#4AB0F0]', detail: 'Patient Trust' },
    { name: 'Yamunanagar, HR', icon: MapPin, color: 'text-[#4AB0F0]', detail: 'Krishna Colony' },
    { name: 'Dr. Asha Chopra', icon: Award, color: 'text-[#4AB0F0]', detail: 'Lead Dental Surgeon' },
    { name: 'Single-Sitting RCT', icon: Stethoscope, color: 'text-[#0284C7]', detail: 'Painless Care' },
  ];

  return (
    <section className="bg-white border-b border-sky-100/80 py-6 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold text-center mb-4 sm:mb-8">
          Trusted Dental Care in Yamunanagar • High Patient Satisfaction
        </p>

        {/* Mobile & Desktop Clean Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            const isLastOnMobile = idx === trustItems.length - 1;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0F8FF]/90 border border-sky-100 hover:border-[#4AB0F0]/50 transition-all duration-300 ${
                  isLastOnMobile ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className={`p-2 rounded-xl bg-white shadow-sm shrink-0 ${item.color}`}>
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-snug truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium truncate">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
