import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile';


const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  
  const handleSignIn = () => {
    setAuthenticated(true)
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
