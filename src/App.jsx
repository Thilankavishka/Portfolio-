import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 🌌 FULL GALAXY BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #1e1b4b 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #0f172a 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #111827 0%, transparent 60%),
            linear-gradient(135deg, #020204 0%, #050510 40%, #030308 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Analytics />
        <About />
        <Achievements />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
