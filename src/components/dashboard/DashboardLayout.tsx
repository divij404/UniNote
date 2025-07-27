// src/components/DashboardLayout.tsx
import React, { useState } from 'react';
import Sidebar from '../nav/Sidebar';
import colors from '../../theme/colors';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: colors.background }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((c) => !c)} />
      <main
        style={{
          flexGrow: 1,
          padding: 24,
          marginLeft: sidebarCollapsed ? 72 : 260,
          transition: 'margin-left 0.3s ease',
          overflowY: 'auto',
          minHeight: '100vh',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
