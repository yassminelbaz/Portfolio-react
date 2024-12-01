import React from 'react';

const Footer = () => {
  return (
    <footer style={{  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
    color: 'white',
    borderRadius: '10px',
    height: '100px' }}>
      <p><strong>© {new Date().getFullYear()} Mon Portfolio.</strong></p>
    </footer>
  );
};

export default Footer;