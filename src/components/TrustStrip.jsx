import React from 'react';
import { Star, MapPin, Award, ShieldCheck, Stethoscope } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { name: '5.0★ Google Rating', icon: Star, color: 'text-amber-500', detail: 'Verified Patient Feedback' },
    { name: '180+ Verified Reviews', icon: ShieldCheck, color: 'text-emerald-600', detail: 'Local Patient Trust' },
    { name: 'Yamunanagar, Haryana', icon: MapPin, color: 'text-[#00BFA6]', detail: 'Krishna Colony, Kamani Chowk' },
    { name: 'Dr. Asha Chopra', icon: Award, color: 'text-[#00BFA6]', detail: 'Lead Dental Surgeon' },
    { name: 'Single-Sitting RCT', icon: Stethoscope, color: 'text-blue-600', detail: 'Painless Clinical Care' },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-8">
          Trusted dental care in Yamunanagar • High Patient Satisfaction
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 rounded-xl bg-gray-50/80 border border-gray-100/80 hover:border-[#00BFA6]/40 transition-all duration-300"
              >
                <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                  <IconComponent className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-800 tracking-tight leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
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
