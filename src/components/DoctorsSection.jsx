import React from 'react';
import { Calendar, Star } from 'lucide-react';

export default function DoctorsSection({ onOpenBooking }) {
  const doctors = [
    {
      name: "Dr. Asha Chopra",
      role: "Lead Dental Surgeon & Specialist",
      experience: "Dental Surgeon",
      rating: "5.0 (180+ Reviews)",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      specialties: ["Single-Sitting RCT", "Dental Crowns & Caps", "Smile Designing", "Tooth Extractions"]
    }
  ];

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4AB0F0] bg-[#4AB0F0]/15 px-3.5 py-1.5 rounded-full">
              EXPERT LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Skilled Hands with Caring Hearts
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md mt-4 md:mt-0">
            Shree Ram Dental Clinic is led by Dr. Asha Chopra, dedicated to gentle, pain-free, and high-quality dental care in Yamunanagar.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="max-w-lg mx-auto">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#4AB0F0] text-[#4AB0F0]" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-[#4AB0F0] uppercase tracking-wider">
                    {doctor.experience}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#4AB0F0] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {doctor.role}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-medium bg-[#F0F8FF] text-[#0284C7] px-2.5 py-1 rounded-md border border-sky-100">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full border border-sky-200 hover:border-[#4AB0F0] hover:bg-[#4AB0F0] text-slate-800 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation with Dr. Asha Chopra</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
