// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page imports
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import CoursePage from './pages/CoursePage';

// If you add more pages, import them here.

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page (public) */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard page (after login) */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/courses/:courseId" element={<CoursePage />} />

        {/* Future: add route for course details, notes, etc. */}
        {/* <Route path="/courses/:id" element={<CoursePage />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
