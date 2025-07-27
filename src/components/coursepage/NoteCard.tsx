// src/components/NoteCard.tsx
import React from 'react';
import colors from '../../theme/colors';

interface NoteCardProps {
  id: string;
  title?: string;
  content: string;
  createdAt: string;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  id,
  title,
  content,
  createdAt,
  onView,
  onDelete,
}) => (
  <div
    style={{
      background: colors.surface,
      borderRadius: 12,
      boxShadow: '0 2px 12px #C5050C12',
      padding: '1.2rem 1.15rem 1rem 1.15rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 160,
    }}
  >
    <div>
      {title && <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{title}</div>}
      <div
        style={{
          marginTop: 6,
          color: colors.textSecondary,
          fontSize: 15,
          maxHeight: 54,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {content}
      </div>
    </div>
    <div
      style={{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 13,
      }}
    >
      <span style={{ color: colors.textSecondary }}>{createdAt}</span>
      <div style={{ display: 'flex', gap: 6 }}>
        <button
          onClick={() => onView?.(id)}
          style={{
            background: colors.secondary,
            color: colors.text,
            border: 'none',
            borderRadius: 5,
            padding: '0.3rem 0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          View/Edit
        </button>
        <button
          onClick={() => onDelete?.(id)}
          style={{
            background: 'transparent',
            color: colors.primary,
            border: `1.2px solid ${colors.primary}`,
            borderRadius: 5,
            padding: '0.3rem 0.6rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default NoteCard;
