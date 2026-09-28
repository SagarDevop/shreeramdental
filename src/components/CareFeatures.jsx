import React from 'react';
import { Heart, UserCheck, Smile, ArrowRight } from 'lucide-react';

export default function CareFeatures({ onOpenBooking }) {
  const cards = [
    {
      title: "Excellent Support",
      description: "24/7 dedicated patient assistance for emergency appointments & inquiries.",
      icon: Heart,
      featured: false,
    },
    {
      title: "Expert Doctors",
      description: "Certified dental specialists with over 15+ years of clinical excellence.",
      icon: UserCheck,
      featured: true, // Teal highlighted card matching screenshot!
    },
    {
      title: "Pain-Free Experience",
      description: "Gentle care, modern laser techniques, and customized sedation options.",
      icon: Smile,
      featured: false,
    },
  ];

  return (
    <section className="py-16 bg-[#F7FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Committed to Your Care
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Every step of your visit is tailored for maximum comfort and world-class dental results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            if (card.featured) {
              return (
                <div
                  key={idx}
                  className="bg-[#00BFA6] text-white p-8 rounded-3xl shadow-xl shadow-[#00BFA6]/20 relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white text-[#063D35] px-5 py-2.5 rounded-full hover:bg-emerald-50 transition-colors"
                  >
                    <span>Meet Our Specialists</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="bg-white text-gray-900 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00BFA6] hover:text-[#00A892] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
