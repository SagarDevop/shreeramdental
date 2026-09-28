import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Stethoscope, UserCheck, PhoneCall, CalendarPlus } from 'lucide-react';

export default function MobileBottomNav({ onOpenBooking }) {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Stethoscope },
    { name: 'Doctors', path: '/doctors', icon: UserCheck },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <div className="md:hidden mobile-bottom-nav-fixed bg-[#042E28]/95 backdrop-blur-lg border-t border-emerald-900/60 px-2 py-1.5 shadow-2xl safe-area-pb">
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
                  isActive ? 'text-[#00BFA6]' : 'text-emerald-200/70 hover:text-white'
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
            className="w-13 h-13 rounded-full bg-[#00BFA6] hover:bg-[#00A892] text-white flex flex-col items-center justify-center shadow-lg shadow-[#00BFA6]/40 border-4 border-[#042E28] transform active:scale-95 transition-all cursor-pointer"
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
                  isActive ? 'text-[#00BFA6]' : 'text-emerald-200/70 hover:text-white'
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
