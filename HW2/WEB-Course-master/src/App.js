import React, { useState } from 'react';
import Header from './components/header.jsx';
import SignInPage from './components/SignIn.jsx';
import GraphComponent from './components/GraphComponent.jsx';

function App() {
  const [showGraph, setShowGraph] = useState(false);

  const handleSignInClick = () => {
    setShowGraph(true);
  };

  return (
    <div className="bg-hero-pattern flex flex-col text-black min-h-screen">
      <Header />
      {!showGraph ? (
        <SignInPage onSignInClick={handleSignInClick} />
      ) : (
        <GraphComponent />
      )}
    </div>
  );
}

export default App;
