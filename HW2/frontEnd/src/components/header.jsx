// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div id="header" className="text-center mt-4 mb-2 bg-white dark:bg-gray-800">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Social Network</h1>
        <hr className="border-t-2 border-gray-700 dark:border-gray-500 mt-2 mb-2 w-full max-w-lg mx-auto" />
      </header>
    </div>
  );
};

export default Header;