import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)


  const handleSignIn = () => {
    setAuthenticated(true)
  }

  return (
    <Router>
        <SignIn />
        <SignUp />
      <Routes>

      </Routes>
    </Router>
  );
};

export default App;
