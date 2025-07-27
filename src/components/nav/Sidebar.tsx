import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';

// Custom useLocalStorage hook to avoid useMemo error
const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Handle localStorage errors (e.g., quota exceeded)
    }
  }, [key, value]);

  return [value, setValue] as const;
};

const navItems = [
  { label: 'Courses', path: '/dashboard', icon: '📚' },
  { label: 'Profile', path: '/profile', icon: '👤' },
];

const Sidebar: React.FC<{ collapsed: boolean; onToggle: () => void }> = ({ collapsed, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 h-screen ${collapsed ? 'w-20' : 'w-64'} bg-surface dark:bg-surface-dark border-r border-border dark:border-border-dark shadow-xl flex flex-col transition-all duration-300 z-50 pt-4`}
    >
      {/* Top Header: Hamburger + Logo */}
      <div className="flex items-center px-4 mb-8 gap-3">
        <button
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={onToggle}
          className="p-2 rounded-lg bg-transparent hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Menu size={28} className="text-primary dark:text-primary-dark" />
        </button>
        {!collapsed && (
          <div className="font-bold text-2xl text-primary dark:text-primary-dark truncate">
            UniNotes
          </div>
        )}
      </div>

      {/* Profile Section */}
      <button
        onClick={() => navigate('/profile')}
        className={`flex items-center gap-3 mx-2 p-3 rounded-lg ${
          location.pathname === '/profile'
            ? 'bg-primary dark:bg-primary-dark text-surface dark:text-surface-dark'
            : 'bg-transparent text-text-secondary dark:text-text-secondary-dark'
        } hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark mb-6 border-b border-border/50 dark:border-border-dark/50`}
        aria-current={location.pathname === '/profile' ? 'page' : undefined}
      >
        <div
          className="w-10 h-10 rounded-full bg-primary dark:bg-primary-dark text-surface dark:text-surface-dark flex items-center justify-center font-bold text-lg"
          aria-hidden="true"
        >
          👤
        </div>
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="font-semibold text-base truncate">Harry Potter</span>
            <span className="text-xs text-text-secondary dark:text-text-secondary-dark truncate">
              harrypotter@hogwarts.edu
            </span>
          </div>
        )}
      </button>

      {/* Navigation Links */}
      <div role="list" className="flex-1 flex flex-col gap-2 px-2">
        {navItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex items-center gap-3 p-3 rounded-lg text-sm font-semibold ${
                isActive
                  ? 'bg-primary dark:bg-primary-dark text-surface dark:text-surface-dark'
                  : 'bg-transparent text-text dark:text-text-dark hover:bg-primary/10 dark:hover:bg-primary-dark/10'
              } ${collapsed ? 'justify-center' : 'justify-start'} transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark`}
              aria-current={isActive ? 'page' : undefined}
              title={collapsed ? label : undefined}
            >
              <span className="text-lg">{icon}</span>
              {!collapsed && <span className="truncate">{label}</span>}
            </button>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div className="mt-auto px-2 pb-4">
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="flex items-center justify-center w-full p-2 rounded-lg bg-transparent hover:bg-primary/20 dark:hover:bg-primary-dark/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition-colors"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon size={24} className="text-primary dark:text-primary-dark" />
          ) : (
            <Sun size={24} className="text-primary dark:text-primary-dark" />
          )}
          {!collapsed && (
            <span className="ml-2 text-sm font-semibold text-text dark:text-text-dark">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;