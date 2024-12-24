import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import paths from './router/paths';
import { AuthProvider, AuthRequired } from './context/AuthContext';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import SearchPage from './pages/search';
import ForgotPassword from './pages/forgot_password';
import HotelManager from './pages/hotel_manager';
import PartnershipRegister from './pages/partnership_register';
// import Admin from './pages/admin';


/////////////////////////////////////////////
import HotelInfoPage from './pages/hotel_info';
import OrderPaymentPage from './pages/payment';


const App = () => {
  return (
    <Router>
      <AuthProvider >
        <Routes>
          {/* common layout */}
          <Route path={paths.home} element={<HomePage />} />
          {/* <Route path={paths.account} element={<AuthRequired><ProfilePage /></AuthRequired>} /> */}
          <Route path={paths.account} element={<ProfilePage />} />
          <Route path={paths.search} element={<SearchPage />} />
          <Route path={paths.hotelManager} element={<HotelManager />} />

          {/* no layout */}
          <Route path={paths.forgotPassword} element={<ForgotPassword />} />
          <Route path={paths.partnershipRegister} element={<PartnershipRegister />} />

          {/* Admin layout */}
          {/* <Route path={paths.admin} element={<Admin />} /> */}

        </Routes>


        {/* Trang cua ong Huwng */}
        <Routes>
          <Route path={paths.hotel} element={<HotelInfoPage />} />
          <Route path={paths.payment} element={<OrderPaymentPage />} />
        </Routes>

      </AuthProvider>
    </Router>
  );
};

export default App;
