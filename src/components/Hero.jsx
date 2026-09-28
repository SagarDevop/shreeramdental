import React from 'react';
import { MessageSquare, Star, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';
import heroPatientImg from '../assets/hero_patient.jpg';
import heroInsetImg from '../assets/hero_inset.jpg';

export default function Hero({ onOpenBooking }) {
  const whatsappUrl = "https://wa.me/919729437758?text=Hello%20Shree%20Ram%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.";

  return (
    <section id="home" className="relative bg-[#063D35] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00BFA6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00BFA6]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4">
            
            {/* Compact Local Location Cue */}
            <div className="inline-flex items-center gap-2 bg-[#00BFA6]/15 border border-[#00BFA6]/30 text-[#00BFA6] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Near Kamani Chowk, Krishna Colony, Yamunanagar</span>
            </div>

            {/* Main Headline - Preserved Exact Structure & Design */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Smile Beyond <br />
              Modern Dentistry <br />
              Reflection of <br />
              <span className="text-[#00BFA6] underline decoration-[#00BFA6]/30 underline-offset-8">
                Confidence
              </span>
            </h1>

            {/* Paragraph Subtitle - Verified Business Copy */}
            <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl font-normal leading-relaxed">
              Shree Ram Dental Clinic in Yamunanagar provides gentle, expert, and comprehensive dental care. Specializing in single-sitting painless root canals, Zirconia crowns, implants, and complete oral wellness.
            </p>

            {/* Action Buttons - Optimized Conversion CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#00BFA6] hover:bg-[#00A892] text-white font-semibold text-base px-8 py-3.5 rounded-full flex items-center gap-3 shadow-lg shadow-[#00BFA6]/30 hover:shadow-xl hover:shadow-[#00BFA6]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B4A41]/80 hover:bg-[#0B4A41] text-white font-medium text-base px-7 py-3.5 rounded-full flex items-center gap-2.5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#00BFA6]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Social Proof & Rating Strip - Verified Google Listing Stats */}
            <div className="pt-8 border-t border-emerald-900/60 flex flex-wrap items-center gap-6 sm:gap-10">
              
              {/* Avatars + Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 overflow-hidden p-0.5">
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#063D35] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                    alt="Patient avatar"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#063D35] object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Patient avatar"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-[#063D35] object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                    alt="Patient avatar"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">180+</div>
                  <div className="text-xs text-emerald-200/70 font-medium">Verified Google Reviews</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-sm bg-[#00BFA6] flex items-center justify-center text-[#063D35]">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-emerald-100 font-semibold mt-1">
                  5.0 Rating on Google
                </div>
              </div>

            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-[50px] lg:rounded-[70px] overflow-hidden border-4 border-emerald-800/40 shadow-2xl shadow-black/40 aspect-[4/5] bg-emerald-950">
                <img
                  src={heroPatientImg}
                  alt="Shree Ram Dental Clinic Patient"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Circle */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#063D35] overflow-hidden shadow-2xl z-20 group cursor-pointer">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={heroInsetImg}
                    alt="Dental examination at Shree Ram Dental Clinic"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#00BFA6] text-white flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-5 h-5 fill-current text-white" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Decorative Teal Badge */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-[#00BFA6] border-4 border-[#063D35] flex items-center justify-center shadow-lg z-20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
