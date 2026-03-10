import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div style={{ 
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", 
        // Cute Smooth Gradient Background
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        color: 'white', 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        
        {/* Modern, Minimal Navbar */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          padding: '25px', 
          background: 'rgba(36, 36, 36, 0.8)', // Semi-transparent
          backdropFilter: 'blur(5px)', // Blurry background
          borderBottom: '1px solid #333'
        }}>
          <NavLink to="/" style={({ isActive }) => ({ 
            color: isActive ? '#646cff' : '#aaa', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            fontSize: '1.2rem',
            transition: 'color 0.3s ease',
            borderBottom: isActive ? '3px solid #646cff' : '3px solid transparent',
            paddingBottom: '5px'
          })}>Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ 
            color: isActive ? '#646cff' : '#aaa', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            fontSize: '1.2rem',
            transition: 'color 0.3s ease',
            borderBottom: isActive ? '3px solid #646cff' : '3px solid transparent',
            paddingBottom: '5px'
          })}>About</NavLink>
        </nav>

        {/* Content Section - centered and with a card */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
          padding: '20px',
        }}>
          {/* Main Card Container */}
          <div style={{
            background: '#242424',
            padding: '50px',
            borderRadius: '25px', // Super rounded corners
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)', // Nice soft shadow
            textAlign: 'center',
            minWidth: '350px',
            maxWidth: '600px',
            border: '1px solid #333'
          }}>
            <Suspense fallback={<div style={{color: 'white', fontSize: '1.2rem'}}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;