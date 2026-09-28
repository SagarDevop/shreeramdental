import React from 'react';
import { CheckCircle2, Sparkles, UserCheck, Cpu, CreditCard } from 'lucide-react';

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
    <section id="about" className="py-16 lg:py-24 bg-[#F7FAF9] border-y border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#00BFA6] font-semibold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00BFA6]" />
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Why patients trust Shree Ram Dental Clinic
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              We create experiences that make you feel comfortable, confident, and cared for at every stage of your dental treatment in Yamunanagar.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center font-bold text-lg">
                  5.0★
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Highest Rated Dental Clinic</h4>
                  <p className="text-xs text-gray-500">180+ Verified 5-star Google Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFA6]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
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
