import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import AppointmentModal from './components/AppointmentModal';
import VideoModal from './components/VideoModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Doctors from './pages/Doctors';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#00BFA6] selection:text-white pb-20 md:pb-0 relative">
        
        {/* Navigation Header */}
        <Header onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={() => setIsBookingOpen(true)}
                  onOpenVideo={() => setIsVideoOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenBooking={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/services"
              element={<Services onOpenBooking={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/services/:id"
              element={<ServiceDetail onOpenBooking={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/doctors"
              element={<Doctors onOpenBooking={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/news"
              element={<News />}
            />
            <Route
              path="/news/:id"
              element={<NewsDetail />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />

        {/* Mobile PWA Bottom Navigation Bar */}
        <MobileBottomNav onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Global Modals */}
        <AppointmentModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      </div>
    </Router>
  );
}
