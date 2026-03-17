import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Emergency from './components/Emergency';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useReveal } from './hooks/useReveal';
import './App.css';

function App() {
  useReveal();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Emergency />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
