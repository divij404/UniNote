// src/components/NoteList.tsx
import React from 'react';
import NoteCard from './NoteCard'; // Individual card component
import colors from '../../theme/colors';

interface Note {
  id: string;
  content: string;
  createdAt: string;
  title?: string;
}

interface NoteListProps {
  courseId: string;
  notes?: Note[];
}

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Stacks & Queues',
    content: 'Discussion on stack vs. queue with examples.',
    createdAt: '2025-07-01 15:24',
  },
  {
    id: '2',
    title: 'Linked Lists',
    content: 'Detailed explanation and code for singly and doubly linked lists.',
    createdAt: '2025-07-03 16:00',
  },
];

const NoteList: React.FC<NoteListProps> = ({ notes = mockNotes }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '2rem',
      marginTop: 16,
    }}
  >
    {notes && notes.length > 0 ? (
      notes.map((note) => <NoteCard key={note.id} {...note} />)
    ) : (
      <div style={{ color: colors.textSecondary, fontSize: 16, padding: 32 }}>
        No notes for this course yet.
      </div>
    )}
  </div>
);

export default NoteList;
