import React, { useState } from 'react';
import Header from './components/header.jsx';
import SignInPage from './components/signInPage/SignIn.jsx';
import Menu from './components/homePage/menu.jsx'; // Import the Menu component
import './index.css'; // Ensure this is the correct path
import DarkLight from './components/DarkLight.jsx';

function App() {
  const [showGraph, setShowGraph] = useState(false);

  const handleSignInClick = () => {
    setShowGraph(true);
  };

  return (
    <div className="bg-hero-pattern flex flex-col text-black dark:text-white bg-white dark:bg-gray-800">
      <Header />
      <div className="flex justify-end p-4 bg-white dark:bg-gray-800" >
        <DarkLight />
      </div>
      {!showGraph ? (
        <SignInPage onSignInClick={handleSignInClick} />
      ) : (
        <>
          <Menu show={true} />
        </>
      )}
    </div>
  );
}

export default App;