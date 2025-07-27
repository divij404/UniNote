// src/components/CourseCard.tsx
import React from 'react';
import colors from '../../theme/colors';

interface CourseCardProps {
  id: string;
  name: string;
  code: string;
  description?: string;
  onViewNotes: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, name, code, description, onViewNotes }) => {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: '1.5rem',
        backgroundColor: colors.surface,
        boxShadow: `0 2px 6px ${colors.primary}22`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 280,
        maxWidth: 320,
        cursor: 'default',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0', color: colors.primary }}>{name}</h3>
        <div style={{ fontWeight: '600', marginBottom: '0.75rem', color: colors.textSecondary }}>{code}</div>
        {description && <p style={{ color: colors.textSecondary, fontSize: '0.9rem' }}>{description}</p>}
      </div>
      <button
        onClick={() => onViewNotes(id)}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1.25rem',
          backgroundColor: colors.primary,
          color: colors.surface,
          border: 'none',
          borderRadius: 4,
          fontWeight: 600,
          cursor: 'pointer',
          alignSelf: 'start',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = colors.secondary)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = colors.primary)}
      >
        View Notes
      </button>
    </div>
  );
};

export default CourseCard;
