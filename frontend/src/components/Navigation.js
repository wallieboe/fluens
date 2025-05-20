import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuth } from '../context/AuthContext';
import FluensLogo from './FluensLogo';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sluit dropdown als er buiten geklikt wordt
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Uitloggen mislukt:', error);
    }
  };

  const handleAccount = () => {
    navigate('/account');
    setIsOpen(false);
  };

  // Haal de gebruikersnaam uit het e-mailadres (alles voor de @)
  const username = currentUser?.email ? currentUser.email.split('@')[0] : 'Gebruiker';

  return (
    <nav className="bg-fluens-blue dark:bg-fluens-dark-blue text-white shadow-md transition-colors">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-white">
              <FluensLogo size={32} color="white" />
            </div>
            <span className="ml-3 text-xl font-bold text-white">fluens</span>
          </div>
          
          <div className="flex items-center space-x-2" ref={dropdownRef}>
            <button
              onClick={toggleTheme}
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
              >
                <span className="hidden md:inline-block font-medium">
                  {username}
                </span>
                <svg 
                  className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={handleAccount}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Mijn Account
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Uitloggen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
