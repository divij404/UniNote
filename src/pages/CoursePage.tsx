// src/pages/CoursePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseHeader from '../components/coursepage/CourseHeader';
import NoteList from '../components/coursepage/NoteList';
import AddNoteFAB from '../components/coursepage/AddNoteFAB';
import AddNoteModal from '../components/coursepage/AddNoteModal';
import AudioTranscriber from '../components/coursepage/AudioTranscriber';
import Sidebar from '../components/nav/Sidebar';
import colors from '../theme/colors'
import NotesSearch from '../components/ui/Searchbar';


const CoursePage: React.FC = () => {
  const [isAddNoteOpen, setAddNoteOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigate = useNavigate();

  // Replace this with real data integration
  const course = { name: 'Data Structures', code: 'COMP2021', description: 'Learn essential data structures.' };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', minHeight: '100vh', position: 'relative' }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((c) => !c)} />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back in history
        style={{
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: colors.primary, // Use UW–Madison primary
          color: 'white',
          border: 'none',
          borderRadius: 6,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(197,5,12,0.6)',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a1040a')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = colors.primary)}
        aria-label="Go back"
      >
        ← Back
      </button>

      <CourseHeader {...course} />
      <div style={{ margin: '2.25rem 0 1.5rem 0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <AddNoteFAB onClick={() => setAddNoteOpen(true)} />
        <AudioTranscriber courseId={course.code} />
      </div>

      <div>
        <NotesSearch/>
      </div>

      <NoteList courseId={course.code} />
      {isAddNoteOpen && (
        <AddNoteModal
          courseId={course.code}
          onClose={() => setAddNoteOpen(false)}
          // Provide your onSave logic here as needed
        />
      )}
    </div>
  );
};

export default CoursePage;
