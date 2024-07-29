import React, { useState, useEffect } from 'react';

const DarkLight = ({ sync }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    if (sync && sync.checked) {
      document.body.setAttribute("data-dark-mode", !darkMode);
    }
  };

  return (
    <button
      id="dark-light-toggle"
      className={`px-3 py-1.5 m-2 text-lg rounded ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'
      } hover:${
        darkMode ? 'bg-gray-700' : 'bg-blue-600'
      } transition duration-300 ease-in-out`}
      onClick={toggleDarkMode}
      aria-pressed={darkMode}
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkLight;
