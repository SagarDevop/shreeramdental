import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919729437758?text=Hello%20Shree%20Ram%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shree Ram Dental Clinic on WhatsApp"
      title="Chat on WhatsApp (+91 97294 37758)"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-45 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-white/20"
    >
      <MessageSquare className="w-6 h-6 fill-current text-white" />
      <span className="hidden md:inline-block text-xs font-bold tracking-wide pr-1">
        WhatsApp Us
      </span>
      {/* Pulse effect */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
