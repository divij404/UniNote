// src/components/FeatureCard.tsx

import React from 'react';
import SpotlightCard from '../animated/SpotlightCard';
import uwMadisonColors from '../../theme/colors';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ emoji, title, description }) => (
  <SpotlightCard 
  className="bg-gray-800/80 rounded-xl px-6 py-8 flex flex-col items-start shadow-md
   hover:shadow-xl hover:bg-gray-700/90 transition-transform
    duration-300 ease-in-out text-left
   transition-shadow duration-150 border border-gray-700">
    {/* Emoji/Icon */}
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 mb-4 text-3xl shadow-inner">
      {emoji}
    </div>
    {/* Title */}
    <h3 className="font-bold text-lg text-gray-100 mb-2">{title}</h3>
    {/* Description */}
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </SpotlightCard>
);

export default FeatureCard;
