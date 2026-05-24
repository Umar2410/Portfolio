/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Brain,
  Cpu,
  Database,
  LineChart,
  User,
  GraduationCap,
  Award,
  CirclePlay
} from "lucide-react";

import { USER_PROFILE, CONTACT_DATA } from "./data";
import CanvasParticles from "./components/CanvasParticles";
import TypingText from "./components/TypingText";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCards from "./components/ProjectCards";
import CertificationsGrid from "./components/CertificationsGrid";
import ContactForm from "./components/ContactForm";
import EducationTimeline from "./components/EducationTimeline";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadText, setLoadText] = useState("Initializing neural matrices...");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Loading text sequence
  useEffect(() => {
    const texts = [
      "Securing analytical pipelines...",
      "Analyzing Power BI database tables...",
      "Deploying Microsoft Azure components...",
      "Systems fully optimized. Launching."
    ];
    
    let textIdx = 0;
    const textInterval = setInterval(() => {
      if (textIdx < texts.length) {
        setLoadText(texts[textIdx]);
        textIdx++;
      }
    }, 450);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(textInterval);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrintResume = () => {
    // Initiate clean print of the resume contents in a well-formatted recruiter layout
    window.print();
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 bg-[#070913] z-50 flex flex-col items-center justify-center p-6"
          >
            {/* Spinning holographic nodes */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              {/* Outer neon pulse orbit */}
              <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-pulse" />
              {/* Spinning track 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-2 rounded-full border-t border-r border-blue-500 border-b-transparent border-l-transparent"
              />
              {/* Counter spinning track 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-4 rounded-full border-b border-l border-purple-500 border-t-transparent border-r-transparent"
              />
              {/* Central glowing reactor core */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Brain className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>

            {/* Status logs */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white font-display font-medium text-lg tracking-wide mb-2"
            >
              {USER_PROFILE.name} <span className="text-cyan-400">Portfolio</span>
            </motion.h2>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <p className="font-mono text-xs text-neutral-400 tracking-wider">
                {loadText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio System */}
      <div className="relative min-h-screen text-neutral-200 selection:bg-purple-500/20 selection:text-white print:bg-white print:text-black overflow-hidden bg-[#070913]">
        {/* Particle and Glow Overlay Systems */}
        <CanvasParticles />
        <CursorGlow />

        {/* Floating background glowing spheres */}
        <div className="fixed top-20 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-10 left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Global Floating Header */}
        <Navbar />

        {/* Main Section Content Wrapper */}
        <main className="relative z-10 print:p-0">
          
          {/* 1. Hero / Introduction Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative"
          >
            <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
              
              {/* Online indicator node badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-neutral-300"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Recruiting Status: Available for Internships
              </motion.div>

              {/* Display Header */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white"
                >
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400">{USER_PROFILE.name}</span>
                </motion.h1>

                {/* Animated Typer Role Block */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg sm:text-2xl font-semibold tracking-wide"
                >
                  <TypingText
                    phrases={[
                      "Aspiring AI Engineer",
                      "Data Analytics Student",
                      "Power BI Developer",
                      "Problem Solver"
                    ]}
                  />
                </motion.div>
              </div>

              {/* Mission Statement Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg leading-relaxed"
              >
                “Turning Data Into Insights & Building Intelligent Solutions”
              </motion.p>

              {/* Action Trigger Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
              >
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 select-none"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Print/Download interactive resume */}
                <button
                  onClick={handlePrintResume}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-semibold text-neutral-200 hover:text-white transition-all flex items-center gap-2 cursor-pointer select-none"
                >
                  <Download className="w-4 h-4 text-[#8b5cf6]" />
                  Download Resume
                </button>

                {/* External accounts */}
                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href={CONTACT_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-neutral-300 hover:text-white" />
                  </a>
                  <a
                    href={CONTACT_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-neutral-300 hover:text-blue-400" />
                  </a>
                </div>
              </motion.div>

              {/* Embedded Metrics Block */}
              <StatsSection />
            </div>
          </section>

          {/* 2. About Me Section */}
          <section id="about" className="py-24 px-6 border-t border-white/5 bg-white/1">
            <div className="max-w-5xl mx-auto relative z-10">
              
              {/* Pill & heading */}
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400">
                  <User className="w-3.5 h-3.5" />
                  Profile Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  About Me
                </h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mt-2" />
              </div>

              {/* Visual Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual Avatar / Core highlights left (5 spans) */}
                <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
                    {/* Glowing outer circular track borders */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-600 opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
                    
                    {/* Glass bento mockup representing technical space */}
                    <div className="absolute inset-0 rounded-3xl glass-panel border border-white/10 flex flex-col items-center justify-center p-6 text-center shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                      
                      {/* Interactive schematic core */}
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300">
                        <Cpu className="w-10 h-10 text-white" />
                      </div>

                      <span className="font-display font-bold text-lg text-white">
                        Umar A
                      </span>
                      <span className="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-widest">
                        AI & DATA ANALYTICS
                      </span>

                      <div className="flex gap-4 mt-6">
                        <div className="text-center">
                          <span className="block text-lg font-mono font-extrabold text-white">8.0</span>
                          <span className="text-[10px] text-neutral-500 lowercase">CGPA</span>
                        </div>
                        <div className="w-px bg-white/10" />
                        <div className="text-center">
                          <span className="block text-lg font-mono font-extrabold text-white">3</span>
                          <span className="text-[10px] text-neutral-500 lowercase">internships</span>
                        </div>
                        <div className="w-px bg-white/10" />
                        <div className="text-center">
                          <span className="block text-lg font-mono font-extrabold text-white">2</span>
                          <span className="text-[10px] text-neutral-500 lowercase">projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative content right (7 spans) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
                    Aspiring AI Engineer with a Data-First Mindset
                  </h3>
                  
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {USER_PROFILE.aboutSummary}
                  </p>

                  {/* Micro list metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/3 border border-white/5">
                      <Database className="w-5 h-5 text-blue-400" />
                      <div className="text-left">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500">Database Mastery</span>
                        <span className="text-sm font-semibold text-white">SQL & MySQL</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/3 border border-white/5">
                      <LineChart className="w-5 h-5 text-purple-400" />
                      <div className="text-left">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500">Visualization</span>
                        <span className="text-sm font-semibold text-white">Power BI & Excel</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 3. Skills Section */}
          <section id="skills" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-medium text-purple-400">
                  <Cpu className="w-3.5 h-3.5" />
                  Tech Stack
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Expertise & Core Skills
                </h2>
                <div className="h-1 w-12 bg-purple-500 mx-auto rounded-full mt-2" />
              </div>

              <SkillsGrid />
            </div>
          </section>

          {/* 4. Experience Section */}
          <section id="experience" className="py-24 px-6 border-t border-white/5 bg-white/1">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono font-medium text-cyan-400">
                  <Brain className="w-3.5 h-3.5" />
                  Timeline
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Professional Internships
                </h2>
                <div className="h-1 w-12 bg-cyan-400 mx-auto rounded-full mt-2" />
              </div>

              <ExperienceTimeline />
            </div>
          </section>

          {/* 5. Projects Section */}
          <section id="projects" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono font-medium text-pink-400">
                  <Database className="w-3.5 h-3.5" />
                  Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Featured Projects
                </h2>
                <div className="h-1 w-12 bg-pink-500 mx-auto rounded-full mt-2" />
              </div>

              <ProjectCards />
            </div>
          </section>

          {/* 6. Education Section */}
          <section id="education" className="py-24 px-6 border-t border-white/5 bg-white/1">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Academic History
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Education Background
                </h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full mt-2" />
              </div>

              <EducationTimeline />
            </div>
          </section>

          {/* 7. Certifications Section */}
          <section id="certifications" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-medium text-purple-400">
                  <Award className="w-3.5 h-3.5" />
                  Credentials
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Certifications & Workshops
                </h2>
                <div className="h-1 w-12 bg-purple-500 mx-auto rounded-full mt-2" />
              </div>

              <CertificationsGrid />
            </div>
          </section>

          {/* 8. Contact Section */}
          <section id="contact" className="py-24 px-6 border-t border-white/5 bg-white/1">
            <div className="max-w-5xl mx-auto relative z-10">
              
              <div className="text-center space-y-3 mb-16">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-400">
                  <Mail className="w-3.5 h-3.5" />
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Contact Me
                </h2>
                <div className="h-1 w-12 bg-emerald-400 mx-auto rounded-full mt-2" />
              </div>

              <ContactForm />
            </div>
          </section>

        </main>

        {/* Global Footer */}
        <footer className="border-t border-white/5 bg-cyber-dark py-12 px-6 text-center relative z-20 print:hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-left space-y-1">
              <span className="font-display font-bold text-lg text-white">
                UMAR A
              </span>
              <p className="text-xs text-neutral-400 font-mono">
                Aspiring AI Engineer & Data Analyst
              </p>
            </div>

            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Umar A. All rights reserved. Managed under secured local storage.
            </p>

            <div className="flex gap-4">
              <a
                href={CONTACT_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg border border-white/10"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-neutral-400 hover:text-white bg-white/5 rounded-lg border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>

        {/* Scroll Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer max-sm:bottom-4 max-sm:right-4 select-none"
              title="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Recruiter Print Sheet Styles (Hides interactive UI elements when printing) */}
      <style>{`
        @media print {
          header, footer, button, .canvas, canvas, .print\\:hidden {
            display: none !important;
          }
          body, html {
            background: white !important;
            color: black !important;
          }
          .glass-panel {
            background: transparent !important;
            border: 1px solid #ddd !important;
            color: black !important;
            box-shadow: none !important;
          }
          main {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
