// src/components/CourseHeader.tsx
import React from 'react';
import colors from '../../theme/colors';

interface CourseHeaderProps {
  name: string;
  code: string;
  description?: string;
  onEditCourse?: () => void;
  onLeaveCourse?: () => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
  name,
  code,
  description,
  onEditCourse,
  onLeaveCourse,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: colors.surface,
      borderRadius: 14,
      boxShadow: '0 2px 12px #C5050C14',
      padding: '1.5rem 2rem',
      marginBottom: '1.5rem',
    }}
  >
    <div>
      <div style={{ fontWeight: 700, fontSize: 25, color: colors.primary }}>{name}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: colors.textSecondary, letterSpacing: 1 }}>
        {code}
      </div>
      {description && (
        <div style={{ marginTop: 4, color: colors.textSecondary, fontSize: 15 }}>{description}</div>
      )}
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <button
        onClick={onEditCourse}
        style={{
          background: colors.secondary,
          color: colors.text,
          border: 'none',
          borderRadius: 6,
          padding: '0.5rem 1.2rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Edit Course
      </button>
      <button
        onClick={onLeaveCourse}
        style={{
          background: colors.primary,
          color: colors.surface,
          border: 'none',
          borderRadius: 6,
          padding: '0.5rem 1.2rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Leave
      </button>
    </div>
  </div>
);

export default CourseHeader;
