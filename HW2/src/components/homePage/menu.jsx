import React from 'react';
/**this component show the menu in home page */

const Menu = ({ show }) => {
  if (!show) return null;

  const menuStyle = 'flex flex-row items-center pb-8 pr-8 pl-8 rounded-lg place-content-center';
  const menuItemStyle = 'menu-item bg-gray-200 p-2 rounded-lg shadow-lg mr-3 ml-3 bg-white text-slate-700 hover:ease-in text-blue-500 hover:ease-in duration-400';

  const menuItems = [
    { text: 'Home', href: '#', id: 'HomeButton' },
    { text: 'About', href: '#', id: 'AboutButton' },
    { text: 'Profile', href: '#', id: 'ProfileButton' },
    { text: 'Contact', href: '#', id: 'ContactButton' },
  ];

  return (
    <div id="menu" className={menuStyle}>
      {menuItems.map(item => (
        <a
          key={item.id}
          href={item.href}
          id={item.id}
          className={menuItemStyle}
          
        >
          {item.text}
          
        </a>
      ))}
    </div>
  );
};

export default Menu;
