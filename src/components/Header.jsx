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
    <header className="bg-[#081E3D] text-white border-b border-[#0F3566]/60 relative md:sticky md:top-0 z-50 backdrop-blur-md transition-all">
      {/* Top micro bar */}
      <div className="bg-[#051429] text-xs text-sky-200/80 py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-sky-950">
        <div className="flex items-center gap-6">
          <a href="tel:+919729437758" className="flex items-center gap-1.5 hover:text-[#4AB0F0] transition-colors">
            <Phone className="w-3 h-3 text-[#4AB0F0]" />
            <span>+91 97294 37758</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-sky-200/60">
            <Clock className="w-3 h-3 text-[#4AB0F0]" />
            Mon - Sat: 9:00 AM - 9:00 PM (Sun Closed)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 text-[#4AB0F0] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#4AB0F0] animate-pulse" />
            Yamunanagar, Haryana
          </span>
        </div>
      </div>

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#4AB0F0] flex items-center justify-center shadow-lg shadow-[#4AB0F0]/30 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Shree Ram
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#4AB0F0] font-bold">
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
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4AB0F0]'
                    : 'text-sky-100/70 hover:text-white'
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
            className="bg-[#4AB0F0] hover:bg-[#2898E0] text-white font-semibold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-[#4AB0F0]/25 hover:shadow-lg hover:shadow-[#4AB0F0]/40 transition-all cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Quick Action (Direct Call Button) */}
        <a
          href="tel:+919729437758"
          className="md:hidden flex items-center gap-1.5 bg-[#4AB0F0]/15 hover:bg-[#4AB0F0]/25 text-[#4AB0F0] px-3 py-1.5 rounded-full text-xs font-semibold border border-[#4AB0F0]/40 transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-3.5 h-3.5 text-[#4AB0F0]" />
          <span>Call</span>
        </a>
      </div>
    </header>
  );
}
