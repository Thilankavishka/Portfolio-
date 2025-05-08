import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
     
      <Navbar />
      <Hero />
      <Analytics />
      <About />
      <Achievements/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
