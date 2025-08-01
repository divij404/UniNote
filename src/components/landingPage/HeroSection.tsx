// src/components/landingPage/HeroSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { MoveDown } from 'lucide-react';
import BlurText from '../animated/BlurText';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-gray-900">
      {/* HERO HEADLINE */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-center drop-shadow space-y-2">
        <BlurText
          text="All Your Course Notes."
          direction='bottom'
          animateBy='letters'
          delay={8}
          className="inline-block"
        />
        {/* Accent tagline */}
        <BlurText 
        text='Organized. Searchable. Accessible.'
        direction='bottom'
        animateBy='words'
        className="block text-red-500"
        delay={250}/>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl text-center">
        Take smart, rich notes for every class, with AI transcription and seamless course collaboration.
      </p>

      {/* GET STARTED BUTTON */}
      <Button
        onClick={() => navigate('/dashboard')}
        className="mt-8 px-8 py-3 sm:text-lg font-semibold bg-red-500 hover:bg-red-600 text-white rounded-md shadow-lg transition"
      >
        Get Started
      </Button>

      {/* BOUNCING SCROLL INDICATOR */}
      <div className="mt-16 flex items-center justify-center">
        <span className="inline-block animate-bounce text-gray-400">
          <MoveDown size={32} strokeWidth={2.4} />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
