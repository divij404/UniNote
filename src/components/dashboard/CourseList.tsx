// src/components/CourseList.tsx
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import AddCourseForm from './AddCourseForm';
import AddCourseFAB from './AddCourseFAB';
import colors from '../../theme/colors';

import { useNavigate } from 'react-router-dom';


interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
}

const mockCourses: Course[] = [
  { id: 'comp2021', name: 'Data Structures', code: 'COMP2021', description: 'Learn essential data structures.' },
  { id: 'math101', name: 'Calculus I', code: 'MATH101', description: 'Beginner level calculus.' },
  { id: 'phys101', name: 'Physics I', code: 'PHYS101', description: 'Introduction to classical mechanics.' },
  { id: 'chem101', name: 'Chemistry I', code: 'CHEM101', description: 'Basic principles of chemistry.' },
  { id: 'bio101', name: 'Biology I', code: 'BIO101', description: 'Fundamentals of biology.' },
];

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [isAddFormOpen, setAddFormOpen] = useState(false);
  const navigate = useNavigate();


  const handleViewNotes = (courseId: string) => {
    navigate(`/courses/${courseId}`);
    
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses((prev) => [...prev, newCourse]);
    setAddFormOpen(false);
  };

  return (
    <>
      <section
        style={{
          maxWidth: 1200,
          margin: '2rem auto',       // increased vertical margin for breathing room
          padding: '0 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',               // space between header and grid/empty state
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '2.25rem',
            fontWeight: 700,
            color: colors.primary,
            letterSpacing: '0.02em',
          }}
        >
          Your Courses
        </h2>

        {courses.length === 0 ? (
          <p
            style={{
              color: colors.textSecondary,
              fontSize: '1.125rem',
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            You haven't joined any courses yet. Use the button at the bottom right to add your first course.
          </p>
        ) : (
          <div
          className='blur-background-sm'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2.5rem',
              padding: '2rem 1rem 3rem 1rem',      // increased all-side padding
              justifyItems: 'stretch',
              alignItems: 'stretch',
              background: colors.surface,              
              borderRadius: 20,
              boxShadow: '0 4px 32px rgba(197,5,12,0.10)',
              margin: '0 auto',
              maxWidth: 1300,
            }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} onViewNotes={handleViewNotes} />
            ))}
          </div>
        )}
      </section>

      {/* Floating Add Course Button with margin from bottom right */}
      <AddCourseFAB onClick={() => setAddFormOpen(true)} />

      {/* Add Course Form Modal */}
      {isAddFormOpen && (
        <AddCourseForm 
          onClose={() => setAddFormOpen(false)} 
          onAddCourse={handleAddCourse} 
        />
      )}
    </>
  );
};

export default CourseList;
