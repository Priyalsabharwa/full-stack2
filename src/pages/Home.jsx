import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      {/* Ek cute animated bounce effect ke liye thodi styling */}
      <div style={{ fontSize: '5rem', marginBottom: '10px' }}>✨</div>
      
      <h1 style={{ 
        fontSize: '3rem', 
        margin: '10px 0', 
        background: 'linear-gradient(to right, #646cff, #ff64f2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
      }}>
        Hi, I'm Priyal!
      </h1>

      <p style={{ 
        fontSize: '1.2rem', 
        color: '#ccc', 
        fontStyle: 'italic',
        marginTop: '5px' 
      }}>
        Welcome to my cozy React space 🎀
      </p>

      <div style={{ 
        marginTop: '20px', 
        fontSize: '0.9rem', 
        color: '#888',
        letterSpacing: '1px'
      }}>
        LAB MST PROJECT • 2026
      </div>
    </div>
  );
};

export default Home;