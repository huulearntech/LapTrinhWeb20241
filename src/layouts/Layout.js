import React, { useState } from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ProfileMenu from '../components/ProfileMenu'
import AuthModal from '../components/AuthModal'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(prev => !prev);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Header onToggleSidebar={toggleSidebar}
        onToggleProfileMenu={toggleProfileMenu}
        onOpenAuthModal={openModal} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <ProfileMenu isOpen={isProfileMenuOpen} closeProfileMenu={closeProfileMenu} />
      <ScrollToTopButton threshold={200} />
      <AuthModal isOpen={isModalOpen} closeModal={closeModal} />
      <main className="pt-24">
        {children}
      </main>
    </div>
  );
}

export default Layout;