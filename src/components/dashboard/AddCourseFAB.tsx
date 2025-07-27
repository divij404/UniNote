// src/components/AddCourseFAB.tsx
import React from 'react';
import colors from '../../theme/colors';

interface AddCourseFABProps {
  onClick: () => void;
}

const AddCourseFAB: React.FC<AddCourseFABProps> = ({ onClick }) => {
  return (
    <button
      aria-label="Add Course"
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: 'none',
        backgroundColor: colors.secondary,
        color: colors.surface,
        fontSize: 32,
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: `0 4px 12px ${colors.secondary}aa`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        userSelect: 'none',
        zIndex: 110,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = colors.primary;
        e.currentTarget.style.boxShadow = `0 6px 16px ${colors.primary}cc`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = colors.secondary;
        e.currentTarget.style.boxShadow = `0 4px 12px ${colors.secondary}aa`;
      }}
    >
      +
    </button>
  );
};

export default AddCourseFAB;
