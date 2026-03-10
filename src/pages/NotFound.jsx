import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '4rem' }}>⚠️ 404</h1>
      <h2>Page Not Found</h2>
      <p>Opps! Lagta hai aap galat raste par aa gaye hain.</p>
      <Link to="/" style={{ 
        color: '#646cff', 
        textDecoration: 'none', 
        fontWeight: 'bold',
        border: '1px solid #646cff',
        padding: '10px 20px',
        borderRadius: '5px'
      }}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;