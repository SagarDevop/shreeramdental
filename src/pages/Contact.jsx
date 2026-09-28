import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Phone, MapPin, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const googleMapsUrl = "https://maps.google.com/?q=Shree+Ram+Dental+Clinic+Krishna+Colony+Yamunanagar+Haryana";

  return (
    <div>
      <PageHeader
        title="Contact & Location"
        subtitle="We are here to assist you with dental appointments, consultations, and inquiry requests."
        category="Shree Ram Dental Clinic Yamunanagar"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00BFA6]">
                  VISIT OUR CLINIC
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  Shree Ram Dental Clinic
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Located in Krishna Colony near Kamani Chowk, Yamunanagar, Haryana. Easily accessible with local transport and parking nearby.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F7FAF9] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#00BFA6]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900">Clinic Address</h4>
                    <p className="text-xs text-gray-600 mt-1">Krishna Colony, Near Kamani Chowk, Yamunanagar, Haryana - 135002</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#00BFA6] font-bold mt-2 hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7FAF9] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#00BFA6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Phone & WhatsApp</h4>
                    <a href="tel:+919729437758" className="text-xs text-[#00BFA6] font-bold block mt-1 hover:underline">
                      +91 97294 37758
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7FAF9] border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/10 text-[#00BFA6] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#00BFA6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Working Hours</h4>
                    <p className="text-xs text-gray-600 mt-1">Monday – Saturday: 9:00 AM – 9:00 PM</p>
                    <p className="text-xs text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl space-y-6">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900">Message Sent Successfully!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out to Shree Ram Dental Clinic. Our team will respond to your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#00BFA6] text-white font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-[#00A892] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-gray-500 mb-6">
                      Fill out the form below for consultation requests or general queries.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 97294 XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Email Address (Optional)</label>
                          <input
                            type="email"
                            placeholder="yourname@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-gray-700 mb-1">Service Required</label>
                          <input
                            type="text"
                            placeholder="Root Canal / Crowns / Dental Checkup"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-gray-700 mb-1">Message</label>
                        <textarea
                          rows="4"
                          required
                          placeholder="Please describe your query or preferred appointment time"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00BFA6] focus:outline-none text-sm text-gray-900 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#00BFA6] hover:bg-[#00A892] text-white font-bold text-sm py-3.5 rounded-full shadow-lg shadow-[#00BFA6]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
