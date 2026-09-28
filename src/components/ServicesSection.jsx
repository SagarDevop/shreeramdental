import React from 'react';
import { Play, ArrowUpRight, CheckCircle2, Award, Stethoscope } from 'lucide-react';
import servicesTeamImg from '../assets/services_team.jpg';

export default function ServicesSection({ onOpenBooking, onOpenVideo }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                <img
                  src={servicesTeamImg}
                  alt="Shree Ram Dental Clinic Yamunanagar"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <button
                  onClick={onOpenVideo}
                  aria-label="Play clinic overview video"
                  className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#00BFA6] shadow-2xl flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border border-emerald-100"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00BFA6] text-white flex items-center justify-center shadow-md">
                    <Play className="w-6 h-6 fill-current ml-1 text-white" />
                  </div>
                </button>
              </div>

              <div className="absolute -bottom-8 -right-4 sm:bottom-6 sm:-right-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">5.0 Star Rated Clinic</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Krishna Colony, Yamunanagar</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Text Content & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] text-xs font-semibold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Comprehensive Dental Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Comprehensive Dental Services for Every Need
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Shree Ram Dental Clinic in Yamunanagar is a trusted healthcare destination where healthy, confident, and radiant smiles are crafted with care and precision. Led by Dr. Asha Chopra, our clinic combines modern techniques and gentle care.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              From single-sitting painless root canals and tooth extractions to Zirconia crowns, dental implants, teeth scaling, and smile designing—our team provides complete dental treatments under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Single-Sitting Painless RCT",
                "Dental Crowns & Zirconia Caps",
                "Dental Implants & Surgery",
                "Teeth Scaling & Polishing",
                "Painless Tooth Extractions",
                "Smile Designing & Kids Dental"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFA6] shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#00BFA6] hover:bg-[#00A892] text-white font-semibold text-sm px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-lg shadow-[#00BFA6]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
