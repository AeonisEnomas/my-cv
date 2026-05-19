import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="ambient-orb primary"></div>
      <div className="ambient-orb secondary"></div>
      <Header />
      <main id="top">
        <Hero />
        <ProfessionalSummary />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
