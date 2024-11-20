import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
  );
};

export default App;
