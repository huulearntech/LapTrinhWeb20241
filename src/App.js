import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import paths from './router/paths';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import ForgotPassword from './pages/ForgotPassword';
import { AuthRequired } from './context/AuthContext';
// import Admin from './pages/Admin';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={paths.account} element={<AuthRequired><ProfilePage /></AuthRequired>} />
          <Route path={paths.search} element={<SearchPage />} />
          <Route path={paths.forgotPassword} element={<ForgotPassword />} />
        </Routes>
      </Layout>
      {/* <Admin /> */}
    </Router>
  );
};

export default App;
