import React, { useState } from 'react';
import Header from './components/header.jsx';
import SignInPage from './components/signInPage/SignIn.jsx';
import GraphComponent from './components/homePage/GraphComponent.jsx';
import Menu from './components/homePage/menu.jsx'; // Import the Menu component
import './index.css';


function App() {
  const [showGraph, setShowGraph] = useState(false);

  const handleSignInClick = () => {
    setShowGraph(true);
  };

  return (
    <div className="bg-hero-pattern flex flex-col text-black ">
      <Header />
      {!showGraph ? (
        <SignInPage onSignInClick={handleSignInClick} />
      ) : (
        <>
          <Menu show={true} />
          <GraphComponent />
        </>
      )}
    </div>
  );
}

export default App;
