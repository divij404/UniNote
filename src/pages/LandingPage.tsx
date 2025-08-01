// src/pages/LandingPage.tsx
import React from 'react';
import Navbar from '../components/nav/Navbar';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturesSection from '../components/landingPage/FeatureSection';
import HowItWorksSection from '../components/landingPage/HowItWorks';
import Footer from '../components/nav/Footer';

const LandingPage: React.FC = () => (
  <div className="w-full min-h-screen bg-gray-900">
    <Navbar />
    <main>
      {/* Hero fills screen, rest appears on scroll */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
