// src/components/HowItWorksSection.tsx

import React from 'react';
import AnimatedList from '../animated/AnimatedList';
const steps = [
  'Join your courses by code or invite.',
  'Take notes or transcribe lectures effortlessly.',
  'Review, organize, and collaborate with classmates.',
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 sm:py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">How It Works</h2>
      <AnimatedList 
      items={steps}
      showGradients={false}
      enableArrowNavigation={false}
      className="space-y-6 text-gray-200 text-base sm:text-lg list-decimal list-inside text-left max-w-xl mx-auto"/>
  
      
    </section>
  );
};

export default HowItWorksSection;
