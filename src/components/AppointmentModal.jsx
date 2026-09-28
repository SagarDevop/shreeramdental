import React, { useState } from 'react';
import { X, User, Phone, CheckCircle2, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Single-Sitting Painless RCT',
    date: '2026-10-05',
    time: '10:00 AM'
  });

  if (!isOpen) return null;

  const validatePhone = (phoneStr) => {
    // Standard Indian 10-digit mobile validation (starts with 6,7,8,9)
    const cleaned = phoneStr.replace(/\D/g, '');
    const tenDigit = cleaned.length >= 10 ? cleaned.slice(-10) : cleaned;
    return /^[6-9]\d{9}$/.test(tenDigit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number (e.g. 9729437758).');
      return;
    }
    setPhoneError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappConfirmUrl = `https://wa.me/919729437758?text=${encodeURIComponent(
    `Hello Shree Ram Dental Clinic, I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nTime: ${formData.time}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900">Request Prepared!</h3>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              Thank you <span className="font-bold text-gray-900">{formData.name}</span>. To complete and instantly confirm your appointment for <span className="font-bold text-[#00BFA6]">{formData.service}</span> with Dr. Asha Chopra, click below to connect with us on WhatsApp or call directly.
            </p>
            
            <div className="pt-2 space-y-3">
              <a
                href={whatsappConfirmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>Confirm Appointment via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919729437758"
                className="block text-xs font-semibold text-gray-600 hover:text-[#00BFA6] pt-1"
              >
                Or Call Us Directly: +91 97294 37758
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-gray-400 hover:text-gray-600"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#00BFA6] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Shree Ram Dental Clinic Yamunanagar</span>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
              Book Your Consultation
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Enter your details below to schedule your appointment with Dr. Asha Chopra.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Mobile Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number (e.g. 9729437758)"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                  />
                </div>
                {phoneError && (
                  <p className="text-[11px] text-red-500 font-medium mt-1">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Select Treatment</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900 bg-white"
                >
                  <option>Single-Sitting Painless RCT</option>
                  <option>Dental Crowns & Zirconia Caps</option>
                  <option>Dental Implants & Surgery</option>
                  <option>Teeth Scaling & Cleaning</option>
                  <option>Painless Extractions</option>
                  <option>Kids Dental Care</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900 bg-white"
                  >
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>01:00 PM</option>
                    <option>05:00 PM</option>
                    <option>07:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00BFA6] hover:bg-[#00A892] text-white font-bold text-sm py-3.5 rounded-full shadow-lg shadow-[#00BFA6]/20 transition-colors mt-2 cursor-pointer"
              >
                Request Appointment
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
