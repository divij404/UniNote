// src/components/FeaturesSection.tsx

import React from 'react';
import FeatureCard from './FeatureCard';

const featureList = [
  { title: 'Rich Text Notes', description: 'Format notes with headings, lists, code, and more.', emoji: '📝' },
  { title: 'AI Transcription', description: 'Convert lecture audio to text automatically.', emoji: '🎙️' },
  { title: 'Course Collaboration', description: 'Join and share courses with classmates.', emoji: '🤝' },
];

const FeaturesSection: React.FC = () => (
  <section className="w-full px-4 py-14 sm:px-8 max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center">
      Features
    </h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featureList.map(({ title, description, emoji }) => (
        <FeatureCard key={title} emoji={emoji} title={title} description={description} />
      ))}
    </div>
  </section>
);

export default FeaturesSection;
