// src/components/HeroSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import colors from '../../theme/colors';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        maxWidth: 1200,
        margin: '0 auto',
        gap: '2rem',
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, color: colors.primary, marginBottom: '1rem' }}>
          All Your Course Notes. Organized. Searchable. Accessible.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.5, marginBottom: '2rem' }}>
          Take smart, rich notes for every class, with AI transcription and seamless course collaboration.
        </p>
        <Button
          onClick={() => navigate('/dashboard')}
          style={{ padding: '0.75rem 2rem', fontSize: '1.1rem', fontWeight: 700, borderRadius: 6 }}
        >
          Get Started Free
        </Button>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img
          src="/app_preview_1.png"
          alt="App preview"
          className="w-full rounded-xl shadow-[0_6px_16px_rgba(197,5,12,0.33)] dark:shadow-[0_6px_16px_rgba(227,38,47,0.33)]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
