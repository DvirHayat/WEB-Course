import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '0.5rem',
  };

  return (
    <div id="header" style={headerStyle}>
      <header>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Social Network</h1>
        <hr style={{ borderTop: '2px solid #4a5568', margin: '0.5rem auto', width: '100%', maxWidth: '768px' }} /> {}
      </header>
    </div>
  );
};

export default Header;
