/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certification from './components/Certification';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050813] text-slate-100 selection:bg-blue-600/30 font-sans selection:text-white">
      {/* Global Background Glow Layers */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Top-center electric glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-[140px]" />
        {/* Mid-screen ambient purple */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/10 blur-[150px]" />
        {/* Bottom ambient indigo */}
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-blue-600/10 blur-[150px]" />
      </div>

      {/* Sticky Transparent Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Education />
        <Certification />
        <CareerObjective />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Interactive Resume Modal with PDF Download */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
