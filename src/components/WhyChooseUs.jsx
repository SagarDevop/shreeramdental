import React from 'react';
import { CheckCircle2, Sparkles, UserCheck, Cpu, CreditCard, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Painless root canal treatment (RCT) & restorative care.",
      description: "Advanced single-sitting RCT and durable Zirconia crowns designed for maximum comfort.",
      icon: Sparkles
    },
    {
      title: "Led by Dr. Asha Chopra for personalized patient care.",
      description: "Dedicated dental surgeon taking the time to explain every procedure and answer your questions.",
      icon: UserCheck
    },
    {
      title: "Modern dental equipment & gentle clinical methods.",
      description: "Hygienic clinic environment utilizing modern sterilization protocols and digital intraoral tools.",
      icon: Cpu
    },
    {
      title: "Transparent pricing & convenient Yamunanagar location.",
      description: "Located near Kamani Chowk, Krishna Colony with flexible consultation slots Monday to Saturday.",
      icon: CreditCard
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F0F8FF] border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#4AB0F0] font-semibold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#4AB0F0]" />
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why patients trust Shree Ram Dental Clinic
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              We create experiences that make you feel comfortable, confident, and cared for at every stage of your dental treatment in Yamunanagar.
            </p>

            {/* Redesigned 5.0 Rating Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-sky-100/80 shadow-md shadow-sky-900/5 flex items-center gap-4 mt-6">
              <div className="w-13 h-13 rounded-full bg-[#E0F2FE] border border-sky-200/60 flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-[#0284C7] font-extrabold text-sm sm:text-base flex items-center gap-0.5 px-2">
                  <span>5.0</span>
                  <Star className="w-3.5 h-3.5 fill-[#4AB0F0] text-[#4AB0F0]" />
                </span>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">Highest Rated Dental Clinic</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">180+ Verified 5-star Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4AB0F0]/15 text-[#4AB0F0] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#4AB0F0]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
