
import React, { useState } from 'react';
import ProfilePage from './profilePage';
import GraphComponent from './GraphComponent.jsx';



const Home = () => {
  const [showGraph, setShowGraph1] = useState(true);

  const handleSignInClick1 = () => {
    setShowGraph1(false);
  };

  const [currentView, setCurrentView] = useState('home');

  const menuStyle = 'flex flex-row items-center pb-8 pr-8 pl-8 rounded-lg place-content-center';
  const menuItemStyle = 'menu-item bg-gray-200 p-2 rounded-lg shadow-lg mr-3 ml-3 bg-white text-slate-700 hover:ease-in text-blue-500 hover:ease-in duration-400';

  const menuItems = [
    { text: 'Home', view: 'home' },
    { text: 'About', view: 'about' },
    { text: 'Profile', view: 'profile' },
    { text: 'Contact', view: 'contact' },
  ];


  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        {showGraph ? (
          <GraphComponent onSignInClick1={handleSignInClick1} />
        ) : (
          <>
            <GraphComponent show={false} />
          </>
        )}
        return <ProfilePage />;
      default:
        return <div>Home Page Content</div>;
    }
  };

  return (
    <div>
      <div id="menu" className={menuStyle}>
        {menuItems.map(item => (
          <button
            key={item.text}
            className={menuItemStyle}
            onClick={() => setCurrentView(item.view)}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;