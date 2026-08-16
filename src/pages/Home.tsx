import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SelectedWorks from '../components/SelectedWorks';
import TechStack from '../components/TechStack';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const handleViewWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Intro Hero Section */}
      <Hero onViewWork={handleViewWork} />

      {/* Scrolling Banner */}
      <Marquee />

      {/* Portfolio Projects list */}
      <SelectedWorks />

      {/* Interactive tech cockpit */}
      <TechStack />

      {/* Interactive form & guestbook logger */}
      <ContactForm />
    </div>
  );
}
