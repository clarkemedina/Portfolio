import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}