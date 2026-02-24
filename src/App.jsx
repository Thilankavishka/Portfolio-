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
      {/* 🔵 DARK BLUE GALAXY BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30,64,175,0.25) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(15,23,42,0.40) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(29,78,216,0.15) 0%, transparent 60%),
            linear-gradient(135deg, #020617 0%, #0b1120 50%, #030712 100%)
          `,
        }}
      />

      {/* 🔵 Soft Blue Glow (Top Left) */}
      <div className="fixed -top-40 -left-40 w-[700px] h-[700px] bg-blue-800 opacity-20 rounded-full blur-[220px] -z-10" />

      {/* 🔵 Deep Navy Glow (Bottom Right) */}
      <div className="fixed -bottom-40 -right-40 w-[700px] h-[700px] bg-blue-900 opacity-20 rounded-full blur-[220px] -z-10" />

      {/* 🌟 Content */}
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
