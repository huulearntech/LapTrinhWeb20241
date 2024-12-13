import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import paths from './router/paths';

import Layout from './layouts/common';
import HomePage from './pages/home';
import ProfilePage from './pages/profile'
import SearchPage from './pages/search'
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import { AuthRequired } from './context/AuthContext';

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
