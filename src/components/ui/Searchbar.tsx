import React, { useState } from 'react';

// Example notes data
const notes = [
  { id: 1, title: 'React Basics', content: 'Components, hooks, props...' },
  { id: 2, title: 'JavaScript Tips', content: 'ES6 features, map, filter...' },
  { id: 3, title: 'Exam Revision', content: 'Study schedule and topics.' },
];

const NotesSearch = () => {
  const [query, setQuery] = useState('');

  // Filter notes by title or content matching the query (case-insensitive)
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search notes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: '100%' }}
        aria-label="Search notes"
      />
    
    {filteredNotes.length === 0 && <h3>No notes found.</h3>}
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>
            <b>{note.title}</b>
            <div>{note.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesSearch;
