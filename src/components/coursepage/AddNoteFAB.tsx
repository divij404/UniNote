import React from 'react';
import colors from '../../theme/colors';
import { Plus } from 'lucide-react';

interface AddNoteFABProps {
  onClick: () => void;
}

const AddNoteFAB: React.FC<AddNoteFABProps> = ({ onClick }) => (
  <button
    aria-label="Add Note"
    onClick={onClick}
    style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: 'none',
      backgroundColor: colors.secondary,
      color: colors.primary,
      fontSize: 38,
      fontWeight: 'bold',
      boxShadow: '0 4px 16px #FFD20055',
      cursor: 'pointer',
      zIndex: 120,
      transition: 'background 0.2s',
      justifyContent: 'center',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = colors.primary
      e.currentTarget.style.color = colors.surface
      e.currentTarget.style.boxShadow = '0 6px 20px #FFD20055';
    }}

    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = colors.secondary
      e.currentTarget.style.color = colors.primary
    }}
  >
    <Plus size={32} strokeWidth={3}/>
  </button>
);

export default AddNoteFAB;
