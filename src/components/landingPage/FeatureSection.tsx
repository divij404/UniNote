// src/components/FeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';

const featureList = [
  { title: 'Rich Text Notes', description: 'Format notes with headings, lists, code, and more.', emoji: '📝' },
  { title: 'AI Transcription', description: 'Convert lecture audio to text automatically.', emoji: '🎙️' },
  { title: 'Course Collaboration', description: 'Join and share courses with classmates.', emoji: '🤝' },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      style={{
        padding: '3rem 2rem',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'space-around',
      }}
    >
      {featureList.map(({ title, description, emoji }) => (
        <FeatureCard key={title} emoji={emoji} title={title} description={description} />
      ))}
    </section>
  );
};

export default FeaturesSection;
