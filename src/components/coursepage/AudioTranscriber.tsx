// src/components/AudioTranscriber.tsx
import React from 'react';
import colors from '../../theme/colors';

interface AudioTranscriberProps {
  courseId: string;
  // add props for file upload, status, callbacks as needed
}

const AudioTranscriber: React.FC<AudioTranscriberProps> = () => (
  <button
    style={{
      background: colors.primary,
      color: colors.surface,
      border: 'none',
      borderRadius: 7,
      padding: '0.5rem 1.25rem',
      marginLeft: 12,
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer',
    }}
    // Add logic for file upload, API call, etc.
  >
    🎙️ Transcribe Audio
  </button>
);

export default AudioTranscriber;
