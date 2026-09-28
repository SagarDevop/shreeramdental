import React from 'react';
import servicesTeamImg from '../assets/services_team.jpg';
import heroPatientImg from '../assets/hero_patient.jpg';
import heroInsetImg from '../assets/hero_inset.jpg';

export default function ImageCollageSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00BFA6] bg-[#00BFA6]/10 px-3 py-1 rounded-full">
            CLINIC GALLERY
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Our State-of-the-Art Dental Facility
          </h2>
        </div>

        {/* Asymmetric Editorial Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Left Sub-Grid (5 Columns) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4 sm:gap-6">
            <div className="rounded-3xl overflow-hidden shadow-md h-48 sm:h-56 group border border-gray-100">
              <img
                src={heroInsetImg}
                alt="Modern dental procedure equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md h-48 sm:h-56 group border border-gray-100">
              <img
                src={servicesTeamImg}
                alt="Dentist team assisting patient"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Main Dominant Image (7 Columns) */}
          <div className="md:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[300px] md:min-h-[470px] group border border-gray-100 relative">
              <img
                src={heroPatientImg}
                alt="Patient smiling brightly after successful dental treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-xl max-w-sm">
                <div className="text-sm font-bold text-gray-900">BrightSmile Modern Operating Suite</div>
                <div className="text-xs text-gray-500">Equipped with 3D Scanners & Pain-Free Laser Tech</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
