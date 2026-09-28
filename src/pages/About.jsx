import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import servicesTeamImg from '../assets/services_team.jpg';

export default function About({ onOpenBooking }) {
  const values = [
    {
      title: "Patient-Centered Care",
      desc: "Every procedure is personalized for your comfort, preferences, and long-term oral health.",
      icon: Heart
    },
    {
      title: "Modern Clinical Methods",
      desc: "We utilize rotary endodontics for single-sitting painless RCTs and ceramic shade-matching.",
      icon: Sparkles
    },
    {
      title: "Strict Sterilization",
      desc: "Hospital-grade sterilization standards and strict hygiene protocols for total patient safety.",
      icon: ShieldCheck
    },
    {
      title: "Transparent & Honest",
      desc: "No unnecessary treatments. Transparent discussion of dental options prior to procedure.",
      icon: Award
    }
  ];

  return (
    <div>
      <PageHeader
        title="About Shree Ram Dental Clinic"
        subtitle="Serving Yamunanagar, Haryana with compassionate, gentle, and modern dental healthcare."
        category="Krishna Colony, Yamunanagar"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100">
                <img
                  src={servicesTeamImg}
                  alt="Shree Ram Dental Clinic Yamunanagar"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4AB0F0]">
                YAMUNANAGAR, HARYANA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dedicated Dental Care You Can Trust
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Shree Ram Dental Clinic is a premier oral healthcare practice located near Kamani Chowk, Krishna Colony in Yamunanagar. Led by Dr. Asha Chopra, our clinic is committed to delivering gentle and effective dental treatments.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We specialize in single-sitting painless root canal treatment (RCT), restorative ceramic crowns and Zirconia caps, dental implants, teeth scaling, painless tooth extractions, and pediatric dental care.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-extrabold text-[#081E3D]">180+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Verified 5-Star Reviews</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#4AB0F0]">5.0★</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Google Rating</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#F0F8FF] border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Built on clinical integrity, patient comfort, and transparent healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const IconComponent = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-sky-100 hover:border-[#4AB0F0]/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#4AB0F0]/15 text-[#4AB0F0] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#081E3D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Schedule Your Visit at Shree Ram Dental Clinic
          </h2>
          <p className="text-sky-100/80 text-sm leading-relaxed">
            Located in Krishna Colony, Yamunanagar. Contact us at +91 97294 37758 to book your consultation.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#4AB0F0] hover:bg-[#2898E0] text-white font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-[#4AB0F0]/30 transition-transform hover:scale-105 cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
