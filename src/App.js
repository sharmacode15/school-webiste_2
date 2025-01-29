import React from 'react';
import TopBar from './components/TopBar';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Hero from './components/Hero';
import PrincipalSection from './components/PrincipalSection';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Marquee />
      <Header />
      <Hero />
      <PrincipalSection />
      <Facilities />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;