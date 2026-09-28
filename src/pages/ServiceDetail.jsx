import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { servicesData } from './Services';
import { CheckCircle2, Clock, ShieldCheck, ArrowLeft, PhoneCall } from 'lucide-react';

export default function ServiceDetail({ onOpenBooking }) {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id) || servicesData[0];

  return (
    <div>
      <PageHeader
        title={service.title}
        subtitle={service.summary}
        category={`Specialized Care • ${service.category}`}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#4AB0F0] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-3xl overflow-hidden h-80 sm:h-96 shadow-lg border border-sky-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  At Shree Ram Dental Clinic, our {service.title.toLowerCase()} procedure is executed with extreme clinical precision, pain-free protocols, and patient-first comfort.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Whether you are seeking preventive care, restorative repairs, or complete smile enhancements, our team utilizes advanced diagnostic tools and intraoral cameras to formulate your custom treatment journey.
                </p>
              </div>

              {/* What is Included */}
              <div className="p-8 rounded-3xl bg-[#F0F8FF] border border-sky-100 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">What is Included in Your Visit:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#4AB0F0] shrink-0" />
                      <span className="text-sm font-medium text-slate-800">{f}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4AB0F0] shrink-0" />
                    <span className="text-sm font-medium text-slate-800">Comprehensive digital examination</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4AB0F0] shrink-0" />
                    <span className="text-sm font-medium text-slate-800">Post-procedure care guidance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#081E3D] text-white shadow-xl space-y-6 border border-sky-900/60">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4AB0F0]">Estimated Pricing</span>
                  <div className="text-3xl font-extrabold text-white mt-1">{service.price}</div>
                  <div className="text-xs text-sky-200/70 mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#4AB0F0]" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-sky-900/60">
                  <div className="flex items-center gap-2 text-xs text-sky-100">
                    <ShieldCheck className="w-4 h-4 text-[#4AB0F0]" />
                    <span>100% Pain-Free Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-sky-100">
                    <ShieldCheck className="w-4 h-4 text-[#4AB0F0]" />
                    <span>Transparent Consultation & Guidance</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#4AB0F0] hover:bg-[#2898E0] text-white font-bold text-sm py-3.5 rounded-full shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  Schedule Treatment Now
                </button>

                <a
                  href="tel:+919729437758"
                  className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-200 hover:text-white transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Us: +91 97294 37758</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
