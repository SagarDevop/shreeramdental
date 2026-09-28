import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CareFeatures from '../components/CareFeatures';
import ImageCollageSection from '../components/ImageCollageSection';
import DoctorsSection from '../components/DoctorsSection';
import Testimonials from '../components/Testimonials';
import PromoBanner from '../components/PromoBanner';

export default function Home({ onOpenBooking, onOpenVideo }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero onOpenBooking={onOpenBooking} onOpenVideo={onOpenVideo} />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Services Overview */}
      <ServicesSection onOpenBooking={onOpenBooking} onOpenVideo={onOpenVideo} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Care Features */}
      <CareFeatures onOpenBooking={onOpenBooking} />

      {/* Doctors Gallery */}
      <DoctorsSection onOpenBooking={onOpenBooking} />

      {/* Gallery Collage */}
      <ImageCollageSection />

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Promotional Banner */}
      <PromoBanner onOpenBooking={onOpenBooking} />
    </div>
  );
}
