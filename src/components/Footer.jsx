import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const googleMapsUrl = "https://maps.google.com/?q=Shree+Ram+Dental+Clinic+Krishna+Colony+Yamunanagar+Haryana";

  return (
    <footer className="bg-[#042E28] text-white pt-16 pb-8 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00BFA6] flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Shree Ram
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#00BFA6] font-semibold">
                  DENTAL CLINIC
                </span>
              </div>
            </Link>

            <p className="text-emerald-100/70 text-sm max-w-sm leading-relaxed">
              Providing modern, compassionate, and gentle dental care in Yamunanagar, Haryana. Led by Dr. Asha Chopra.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-emerald-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00BFA6] shrink-0" />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00BFA6] transition-colors">
                  Krishna Colony, Near Kamani Chowk, Yamunanagar, Haryana 135002
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00BFA6] shrink-0" />
                <a href="tel:+919729437758" className="hover:text-[#00BFA6] transition-colors font-bold text-white">
                  +91 97294 37758
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00BFA6] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 9:00 PM (Sunday Closed)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li><Link to="/" className="hover:text-[#00BFA6] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00BFA6] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#00BFA6] transition-colors">Dental Services</Link></li>
              <li><Link to="/doctors" className="hover:text-[#00BFA6] transition-colors">Our Specialists</Link></li>
              <li><Link to="/news" className="hover:text-[#00BFA6] transition-colors">Latest News & Articles</Link></li>
              <li><Link to="/contact" className="hover:text-[#00BFA6] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li><Link to="/services/single-sitting-rct" className="hover:text-[#00BFA6] transition-colors">Single-Sitting Painless RCT</Link></li>
              <li><Link to="/services/crowns-bridges" className="hover:text-[#00BFA6] transition-colors">Zirconia Crowns & Caps</Link></li>
              <li><Link to="/services/dental-implants" className="hover:text-[#00BFA6] transition-colors">Dental Implants</Link></li>
              <li><Link to="/services/scaling-polishing" className="hover:text-[#00BFA6] transition-colors">Teeth Scaling & Polishing</Link></li>
              <li><Link to="/services/painless-extractions" className="hover:text-[#00BFA6] transition-colors">Painless Tooth Extractions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-emerald-100/70">
              Subscribe to receive dental wellness tips and updates from Shree Ram Dental Clinic.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#063D35] border border-emerald-800/60 rounded-xl px-3.5 py-2 text-xs text-white placeholder-emerald-300/40 focus:outline-none focus:border-[#00BFA6]"
              />
              <button
                type="submit"
                className="w-full bg-[#00BFA6] hover:bg-[#00A892] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {subscribed && (
                <div className="text-[11px] text-[#00BFA6] font-semibold text-center animate-fadeIn">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <p>© 2026 Shree Ram Dental Clinic, Yamunanagar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00BFA6] transition-colors">Google Maps Location</a>
            <Link to="/about" className="hover:text-[#00BFA6] transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
