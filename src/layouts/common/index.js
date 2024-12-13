import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ProfileMenu from '../../components/ProfileMenu';
import AuthModal from '../../components/AuthModal';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Footer from '../../components/Footer';


const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(prev => !prev);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signIn');
  const openModal = (mode) => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="layout-root bg-gray-100">
      <Header
        onToggleSidebar={toggleSidebar}
        onToggleProfileMenu={toggleProfileMenu}
        onOpenAuthModal={openModal}
        className={`bg-white transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <ProfileMenu isOpen={isProfileMenuOpen} closeProfileMenu={closeProfileMenu} />
      <ScrollToTopButton threshold={200} />
      <AuthModal isOpen={isModalOpen} closeModal={closeModal} mode={authMode} />
      <main className='w-full min-h-screen'>
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
