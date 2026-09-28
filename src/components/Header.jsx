import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Phone, Clock } from 'lucide-react';

export default function Header({ onOpenBooking }) {


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#063D35] text-white border-b border-[#0B4A41]/40 sticky top-0 z-50 backdrop-blur-md transition-all">
      {/* Top micro bar */}
      <div className="bg-[#042E28] text-xs text-emerald-200/80 py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-emerald-950">
        <div className="flex items-center gap-6">
          <a href="tel:+919729437758" className="flex items-center gap-1.5 hover:text-[#00BFA6] transition-colors">
            <Phone className="w-3 h-3 text-[#00BFA6]" />
            <span>+91 97294 37758</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-emerald-200/60">
            <Clock className="w-3 h-3 text-[#00BFA6]" />
            Mon - Sat: 9:00 AM - 9:00 PM (Sun Closed)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 text-[#00BFA6] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse" />
            Yamunanagar, Haryana
          </span>
        </div>
      </div>

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#00BFA6] flex items-center justify-center shadow-lg shadow-[#00BFA6]/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Shree Ram
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#00BFA6] font-bold">
              DENTAL CLINIC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-all py-1 relative ${
                  isActive
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00BFA6]'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenBooking}
            className="bg-[#00BFA6] hover:bg-[#00A892] text-white font-semibold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-[#00BFA6]/20 hover:shadow-lg hover:shadow-[#00BFA6]/30 transition-all cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Quick Action (Direct Call Button) */}
        <a
          href="tel:+919729437758"
          className="md:hidden flex items-center gap-1.5 bg-[#00BFA6]/15 hover:bg-[#00BFA6]/25 text-[#00BFA6] px-3 py-1.5 rounded-full text-xs font-semibold border border-[#00BFA6]/30 transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-3.5 h-3.5 text-[#00BFA6]" />
          <span>Call</span>
        </a>
      </div>
    </header>
  );
}

