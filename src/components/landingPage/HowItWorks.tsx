import React from 'react';

const HowItWorksSection: React.FC = () => (
  <section
    id="how-it-works"
    className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
  >
    <h2 className="text-3xl font-bold text-red-600 mb-6">How It Works</h2>
    <ol className="space-y-6 text-left max-w-2xl mx-auto text-gray-700">
      <li className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">1</span>
        <p className="text-lg">Join your courses by code or invite.</p>
      </li>
      <li className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">2</span>
        <p className="text-lg">Take notes or transcribe lectures effortlessly.</p>
      </li>
      <li className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full">3</span>
        <p className="text-lg">Review, organize, and collaborate with classmates.</p>
      </li>
    </ol>
  </section>
);

export default HowItWorksSection;