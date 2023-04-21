import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    // for button navigation
    const Navigation = useNavigate();

    const handleLogin = () => {
        Navigation('/login');
    }
    const handleHomepage = () => {
        Navigation('/home');
    }

  return (
    <div>
          {/**Adding buttons to landing page */}
          <button onClick={handleLogin} >Login</button>
          <button onClick={handleHomepage} >Homepage</button>
            
    </div>
  )
}

export default LandingPage