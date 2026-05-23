import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-0 bg-[#030712]" />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* 3D Background - lazy loaded */}
      <Suspense fallback={<LoadingFallback />}>
        <ThreeBackground />
      </Suspense>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
