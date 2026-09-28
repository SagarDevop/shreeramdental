import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar } from 'lucide-react';

export const doctorsData = [
  {
    id: 'dr-asha-chopra',
    name: 'Dr. Asha Chopra',
    title: 'Lead Dental Surgeon',
    experience: 'Expert Dental Practitioner',
    rating: '5.0 (180+ Reviews)',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Asha Chopra leads Shree Ram Dental Clinic in Yamunanagar. She specializes in single-sitting painless root canals, restorative Zirconia crowns, dental extractions, and smile design.',
    specialties: ['Painless RCT', 'Zirconia Crowns & Bridges', 'Dental Surgery', 'Smile Care']
  }
];

export default function Doctors({ onOpenBooking }) {
  return (
    <div>
      <PageHeader
        title="Our Lead Dentist"
        subtitle="Meet Dr. Asha Chopra, dedicated to gentle, compassionate, and precise dental healthcare in Yamunanagar."
        category="Shree Ram Dental Leadership"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-full sm:w-56 h-64 rounded-2xl overflow-hidden shrink-0 relative bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#4AB0F0]">
                  ⭐ {doc.rating}
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="text-xs font-bold text-[#4AB0F0] uppercase tracking-wider">
                  {doc.experience}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {doc.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {doc.title}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc.specialties.map((s, idx) => (
                    <span key={idx} className="text-[10px] font-medium bg-[#F0F8FF] text-[#0284C7] px-2.5 py-1 rounded-md border border-sky-100">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#4AB0F0] hover:bg-[#2898E0] text-white text-xs font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer shadow-md shadow-[#4AB0F0]/25"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation with Dr. Asha Chopra</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
