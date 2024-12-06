import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Choose from '../components/sections/Choose';
import Contacts from '../components/sections/Contacts';
import Footer from '../components/sections/Footer';

import ContactForm from '@/components/ui/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Choose />
      <Contacts />
      <Footer />
    </>
  );
}
