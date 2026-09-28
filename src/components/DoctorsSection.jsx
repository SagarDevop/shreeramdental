import React from 'react';
import { Calendar, Star, GraduationCap } from 'lucide-react';

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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00BFA6] bg-[#00BFA6]/10 px-3.5 py-1.5 rounded-full">
              EXPERT LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Skilled Hands with Caring Hearts
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md mt-4 md:mt-0">
            Shree Ram Dental Clinic is led by Dr. Asha Chopra, dedicated to gentle, pain-free, and high-quality dental care in Yamunanagar.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="max-w-lg mx-auto">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#00BFA6] text-[#00BFA6]" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-[#00BFA6] uppercase tracking-wider">
                    {doctor.experience}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#00BFA6] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {doctor.role}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full border border-gray-200 hover:border-[#00BFA6] hover:bg-[#00BFA6] text-gray-800 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
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
