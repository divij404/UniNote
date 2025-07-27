// src/pages/LandingPage.tsx
import React from 'react';
import Navbar from '../components/nav/Navbar';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturesSection from '../components/landingPage/FeatureSection';
import HowItWorksSection from '../components/landingPage/HowItWorks';
import Footer from '../components/nav/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
