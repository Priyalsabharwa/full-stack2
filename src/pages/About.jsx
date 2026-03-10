import React from 'react';

const About = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🛡️</div>
      
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#ff64f2', 
        marginBottom: '15px' 
      }}>
        About Me
      </h1>

      <p style={{ 
        fontSize: '1.1rem', 
        color: '#eee', 
        lineHeight: '1.6',
        maxWidth: '450px'
      }}>
        Hi! I'm <strong>Priyal</strong>. Beyond building web apps, I'm deeply passionate about 
        <span style={{color: '#646cff'}}> Networking </span> and 
        <span style={{color: '#646cff'}}> Cybersecurity</span>. 🔐
      </p>

      <p style={{ 
        fontSize: '1rem', 
        color: '#ccc', 
        marginTop: '10px',
        maxWidth: '400px'
      }}>
        I love exploring how data travels securely across the web and protecting digital spaces from threats.
      </p>

      {/* Passion Badges */}
      <div style={{ 
        marginTop: '25px', 
        display: 'flex', 
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <span style={skillBadge}>Network Security</span>
        <span style={skillBadge}>Ethical Hacking</span>
        <span style={skillBadge}>React.js</span>
        <span style={skillBadge}>Cloud Safety</span>
      </div>

      <p style={{ marginTop: '30px', color: '#888', fontSize: '0.85rem' }}>
        Currently securing my path in tech! 🚀
      </p>
    </div>
  );
};

const skillBadge = {
  background: 'rgba(100, 108, 255, 0.15)',
  border: '1px solid #646cff',
  padding: '6px 14px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  color: '#646cff',
  fontWeight: '500'
};

export default About;