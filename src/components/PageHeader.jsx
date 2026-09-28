import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, category = 'Shree Ram Dental Clinic' }) {
  return (
    <section className="bg-[#081E3D] text-white py-14 lg:py-20 relative overflow-hidden border-b border-[#0F3566]/60">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4AB0F0]/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-sky-200/70 mb-4 font-medium">
          <Link to="/" className="hover:text-[#4AB0F0] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[#4AB0F0] font-semibold">{title}</span>
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#4AB0F0] bg-[#4AB0F0]/15 px-3.5 py-1.5 rounded-full inline-block mb-3">
          {category}
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sky-100/80 text-base max-w-2xl mt-3 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
