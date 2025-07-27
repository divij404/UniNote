// src/components/coursepage/AddNoteModal.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import colors from '../../theme/colors';

interface AddNoteModalProps {
  courseId: string;
  onClose: () => void;
  onSave?: (newNote: { title?: string; content: string }) => void;
}

const AddNoteModal: React.FC<AddNoteModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // will hold HTML from Quill

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.30)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 130,
      }}
      onClick={onClose}
    >
      <form
        onClick={e => e.stopPropagation()}
        onSubmit={e => {
          e.preventDefault();
          if (onSave) onSave({ title, content });
          onClose();
        }}
        style={{
          background: colors.surface,
          borderRadius: 12,
          boxShadow: '0 6px 28px #C5050C33',
          padding: '2rem',
          minWidth: 350,
          maxWidth: '90vw',
          width: 460,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        <h2 style={{ color: colors.primary, margin: 0 }}>Add Note</h2>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Note Title (optional)"
          style={{
            padding: '0.5rem',
            borderRadius: 6,
            border: `1.2px solid ${colors.border}`,
            fontSize: 16,
          }}
        />
        <div style={{ background: '#fafbff', borderRadius: 6, border: `1.2px solid ${colors.border}` }}>
          <ReactQuill value={content} onChange={setContent} theme="snow" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              border: 'none',
              background: 'transparent',
              color: colors.textSecondary,
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              border: 'none',
              background: colors.primary,
              color: colors.surface,
              borderRadius: 7,
              fontWeight: 600,
              fontSize: 16,
              padding: '0.5rem 1.2rem',
              cursor: 'pointer',
            }}
          >
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteModal;
