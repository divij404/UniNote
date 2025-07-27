// src/components/AddCourseForm.tsx
import React, { useState } from 'react';
import colors from '../../theme/colors';

interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
}

interface AddCourseFormProps {
  onAddCourse: (course: Course) => void;
  onClose: () => void;
}

const AddCourseForm: React.FC<AddCourseFormProps> = ({ onAddCourse, onClose }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !code.trim()) {
      alert('Please fill in both course name and code.');
      return;
    }
    const newCourse: Course = { id: code.toLowerCase(), name: name.trim(), code: code.trim().toUpperCase(), description: description.trim() };
    onAddCourse(newCourse);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="addCourseTitle"
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <form
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          backgroundColor: colors.surface,
          padding: '2rem',
          borderRadius: 12,
          boxShadow: `0 4px 16px ${colors.primary}55`,
          maxWidth: 400,
          width: '90%',
        }}
      >
        <h2 id="addCourseTitle" style={{ marginBottom: '1rem', color: colors.primary }}>
          Add / Join a Course
        </h2>
        <label htmlFor="courseName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Course Name
        </label>
        <input
          id="courseName"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: 4, border: `1px solid ${colors.border}` }}
        />

        <label htmlFor="courseCode" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Course Code
        </label>
        <input
          id="courseCode"
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: 4, border: `1px solid ${colors.border}` }}
        />

        <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Description (optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
          style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: `1px solid ${colors.border}`, resize: 'vertical', marginBottom: '1.5rem' }}
        ></textarea>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button type="button" onClick={onClose} style={{ padding: '0.5rem 1rem', borderRadius: 4, border: `1px solid ${colors.border}`, backgroundColor: 'transparent' }}>
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: colors.primary,
              color: colors.surface,
              border: 'none',
              borderRadius: 4,
              fontWeight: 600,
            }}
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
