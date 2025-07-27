// src/components/FeatureCard.tsx
import React from 'react';
import colors from '../../theme/colors';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ emoji, title, description }) => (
  <div
    style={{
      flex: '1 1 280px',
      border: `1px solid ${colors.border}`,
      borderRadius: 8,
      padding: '1.5rem',
      boxShadow: `0 2px 6px ${colors.primary}22`,
      backgroundColor: colors.background,
      textAlign: 'center',
    }}
  >
    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{emoji}</div>
    <h3 style={{ color: colors.primary }}>{title}</h3>
    <p style={{ color: colors.textSecondary }}>{description}</p>
  </div>
);

export default FeatureCard;
