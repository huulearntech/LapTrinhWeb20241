// HomePage.js
import React, { useState } from 'react';
import Header from '../components/Header'
import SlideShow from '../components/SlideShow'
// import RoomFilter from '../components/RoomFilter1'
import ProductSection from '../components/ProductSection'
import Sidebar from '../components/Sidebar';
import ScrollToTopButton from '../components/ScrollToTopButton'
import ProfileMenu from '../components/ProfileMenu';

const HomePage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const [isProfileMenuCollapsed, setIsProfileMenuCollapsed] = useState(true);

  const toggleProfileMenu = () => {
    setIsProfileMenuCollapsed(prev => !prev);
  };


  return (
    <>
      <Header onToggleSidebar={toggleSidebar}
        onToggleProfileMenu={toggleProfileMenu} />
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <ProfileMenu isCollapsed={isProfileMenuCollapsed} />
      <div className="pt-16">

        {/* <RoomFilter /> */}
        <SlideShow />
        <ScrollToTopButton />
        <ProductSection />
      </div>
    </>
  );
};

export default HomePage;