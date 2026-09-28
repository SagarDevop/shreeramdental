import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';

export const servicesData = [
  {
    id: 'single-sitting-rct',
    title: 'Single-Sitting Painless Root Canal (RCT)',
    category: 'Endodontics',
    price: 'Consultation Required',
    duration: '45 mins',
    summary: 'Painless root canal treatment performed in a single sitting using modern rotary instruments and local anesthesia.',
    features: ['Single-sitting comfortable procedure', 'Preserves natural tooth structure', 'Painless local anesthesia', 'High success rate'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns, Caps & Bridges',
    category: 'Restorative',
    price: 'Zirconia / PFM',
    duration: '45 mins',
    summary: 'High-strength Zirconia and PFM ceramic crowns to restore broken or weakened teeth with natural shade matching.',
    features: ['Biocompatible Zirconia ceramic', 'Natural translucent shade match', 'Protects weak & post-RCT teeth', 'Durable structural bridge options'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Oral Surgery',
    category: 'Surgical',
    price: 'Consultation Required',
    duration: '60 mins',
    summary: 'Permanent tooth replacement anchoring titanium implant roots to restore full bite function and smile aesthetics.',
    features: ['Permanent root replacement', 'Pain-free guided surgical placement', 'Natural look and chewing strength', 'Long-lasting oral health'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'scaling-polishing',
    title: 'Teeth Scaling & Deep Cleaning',
    category: 'Preventive',
    price: 'Routine Care',
    duration: '30 mins',
    summary: 'Ultrasonic plaque, tartar, and stain removal to protect gums and maintain fresh breath.',
    features: ['Ultrasonic plaque & tartar removal', 'Stain cleaning & polishing', 'Prevents gum disease & bleeding', 'Fresh breath restoration'],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'painless-extractions',
    title: 'Painless Extractions & Cyst Treatment',
    category: 'Surgical',
    price: 'Consultation Required',
    duration: '30 mins',
    summary: 'Gentle, pain-free tooth extractions for severely decayed or wisdom teeth, alongside cyst treatment.',
    features: ['Painless local anesthetic delivery', 'Wisdom teeth & decayed tooth removal', 'Dental cyst & abscess management', 'Fast post-treatment recovery'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'kids-dentistry',
    title: 'Pediatric (Kids) Dental Care',
    category: 'Pediatric',
    price: 'Friendly Care',
    duration: '30 mins',
    summary: 'Gentle, friendly dental checkups, cavity prevention, and fillings tailored for children in a comforting environment.',
    features: ['Friendly & patient-centered environment', 'Cavity prevention & tooth fillings', 'Fluoride oral hygiene guidance', 'Gentle pediatric care'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500'
  }
];

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Endodontics', 'Restorative', 'Surgical', 'Preventive', 'Pediatric'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Dental Services at Shree Ram Dental"
        subtitle="Explore our verified treatments in Yamunanagar including single-sitting RCT, Zirconia crowns, implants, and oral care."
        category="Shree Ram Dental Treatments"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#00BFA6] text-white shadow-md shadow-[#00BFA6]/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#063D35]">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#00BFA6]" />
                        {service.duration}
                      </span>
                      <span className="font-bold text-[#00BFA6] text-xs">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00BFA6] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00BFA6] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 py-2.5 rounded-full border border-gray-200 hover:border-[#00BFA6] text-gray-700 hover:text-[#00BFA6] text-xs font-semibold text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={onOpenBooking}
                    className="py-2.5 px-4 rounded-full bg-[#00BFA6] hover:bg-[#00A892] text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
