import React, { useState, useRef } from 'react';
import ProfilePage from './profilePage';
import GraphComponent from './GraphComponent';
import DarkLight from '../DarkLight';

const Home = () => {
  const [currentView, setCurrentView] = useState('home');
  const syncRef = useRef(null); // Reference for the sync checkbox

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
        return <ProfilePage />;
      case 'home':
        return <GraphComponent />;
      case 'about':
        return <div>About Page</div>;
      case 'contact':
        return <div>Contact Page</div>;
      default:
        return <GraphComponent />;
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
            aria-pressed="false"
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
