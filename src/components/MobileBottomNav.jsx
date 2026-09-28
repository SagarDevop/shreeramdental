import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Stethoscope, UserCheck, PhoneCall, CalendarPlus } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Stethoscope },
    { name: 'Doctors', path: '/doctors', icon: UserCheck },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <div className="md:hidden mobile-bottom-nav-fixed bg-[#081E3D]/95 backdrop-blur-lg border-t border-[#0F3566]/80 px-2 py-1.5 shadow-2xl safe-area-pb">
      <div className="flex items-center justify-around relative">
        
        {/* Home & Services */}
        {navItems.slice(0, 2).map((item) => {
          const IconComp = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-3 text-[10px] font-medium transition-colors ${
                  isActive ? 'text-[#4AB0F0] font-bold' : 'text-sky-200/70 hover:text-white'
                }`
              }
            >
              <IconComp className="w-5 h-5 mb-0.5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

        {/* Highlighted Middle Quick Action Button (Book Appointment) */}
        <div className="relative -top-4 flex items-center justify-center">
          <button
            onClick={onOpenBooking}
            className="w-13 h-13 rounded-full bg-[#4AB0F0] hover:bg-[#2898E0] text-white flex flex-col items-center justify-center shadow-lg shadow-[#4AB0F0]/50 border-4 border-[#081E3D] transform active:scale-95 transition-all cursor-pointer"
            aria-label="Book Appointment"
          >
            <CalendarPlus className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Doctors & Contact */}
        {navItems.slice(2, 4).map((item) => {
          const IconComp = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-3 text-[10px] font-medium transition-colors ${
                  isActive ? 'text-[#4AB0F0] font-bold' : 'text-sky-200/70 hover:text-white'
                }`
              }
            >
              <IconComp className="w-5 h-5 mb-0.5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}

      </div>
    </div>
  );
}
