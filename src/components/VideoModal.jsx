import React from 'react';
import { X, Play, Sparkles } from 'lucide-react';
import servicesTeamImg from '../assets/services_team.jpg';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#081E3D] text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-sky-900/60 relative overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#4AB0F0] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Virtual Clinic Tour & Patient Demo</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            Experience Pain-Free Modern Dentistry
          </h3>

          {/* Video Container Simulation */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-sky-900/60 group shadow-2xl">
            <img
              src={servicesTeamImg}
              alt="BrightSmile Clinic Tour"
              className="w-full h-full object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-[#4AB0F0] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-9 h-9 fill-current ml-1" />
              </div>
              <p className="text-white font-bold text-base mt-4">
                Watch Full Interactive Tour (3:45)
              </p>
              <p className="text-xs text-sky-200/70 mt-1 max-w-md">
                See our digital 3D intraoral scanners, laser whitening units, and comfortable patient suites in action.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-sky-200/80 pt-2">
            <span>HD 1080p • Guided Clinic Overview</span>
            <button
              onClick={onClose}
              className="text-[#4AB0F0] font-bold hover:underline cursor-pointer"
            >
              Close Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
