// src/pages/Dashboard.tsx
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import CourseList from '../components/dashboard/CourseList';

const Dashboard: React.FC = () => {
  return (
    <div>    
    <DashboardLayout>
      <CourseList />
    </DashboardLayout>
    </div>
  );
};

export default Dashboard;
