// src/components/Footer.tsx
import React from 'react';
import colors from '../../theme/colors';

const Footer: React.FC = () => (
  <footer
    style={{
      backgroundColor: colors.surface,
      borderTop: `1px solid ${colors.border}`,
      padding: '1.5rem 2rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: colors.textSecondary,
    }}
  >
    <div>© 2025 UniNotes — University of Wisconsin–Madison</div>
    <div>
      <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, margin: '0 0.5rem' }}>
        GitHub
      </a>
      |
      <a href="https://twitter.com/yourapp" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary, margin: '0 0.5rem' }}>
        Twitter
      </a>
    </div>
  </footer>
);

export default Footer;
