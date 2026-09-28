import React from 'react';
import { ArrowUpRight, Gift, Sparkles } from 'lucide-react';
import heroPatientImg from '../assets/hero_patient.jpg';

export default function PromoBanner({ onOpenBooking }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#081E3D] rounded-3xl overflow-hidden shadow-2xl relative border border-sky-900/60">
          
          {/* Decorative radial lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4AB0F0]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center p-8 sm:p-12 gap-8 relative z-10">
            
            {/* Left Column Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#4AB0F0]/20 text-[#4AB0F0] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-[#4AB0F0]" />
                <span>Special New Patient Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                How to BrightSmile? Enjoy a Special Promotional Offer!
              </h2>

              <p className="text-sky-100/80 text-sm sm:text-base max-w-2xl">
                Get 20% OFF your first comprehensive consultation, full digital intraoral 3D scan, and teeth polishing session. Limited appointments available this month!
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#4AB0F0] hover:bg-[#2898E0] text-white font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-lg shadow-[#4AB0F0]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Claim Offer & Book Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column Image Badge */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-[#4AB0F0] overflow-hidden shadow-2xl">
                <img
                  src={heroPatientImg}
                  alt="BrightSmile Patient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081E3D]/80 via-transparent to-transparent flex items-end justify-center p-4 text-center">
                  <span className="text-white font-extrabold text-lg flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#4AB0F0]" /> 20% OFF
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
