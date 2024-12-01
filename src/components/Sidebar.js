// src/components/Sidebar.js
import React from 'react';
import { RiHome2Line as HomeIcon, RiSearchLine as SearchIcon } from 'react-icons/ri';
import { RxCross2 as CloseSidebarIcon } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { label: 'Home', icon: <HomeIcon className="w-6 h-6" />, link: "/" },
    { label: 'Search', icon: <SearchIcon className="w-6 h-6" />, link: "/search" },
  ];

  return (
    <>
      {isOpen &&
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50" onClick={closeSidebar}></div>
      }
      <div
        className={`bg-white text-black h-screen transition-all duration-300 ${isOpen ? 'w-80' : 'w-0'} fixed top-0 left-0 bottom-0 z-50 overflow-hidden transition-all duration-300 shadow-lg rounded-r-lg`}
      >
        <div className="flex p-4 items-center justify-between">
          <div className="p-4 text-xl font-bold text-blue-700">Logo</div>
          <button
            onClick={closeSidebar}
            className="my-auto p-2 rounded-full hover:bg-gray-200"
            aria-label="Close Sidebar"
          >
            <CloseSidebarIcon className="w-6 h-6" />
          </button>
        </div>
        <ul className="px-2">
          {menuItems.map((item, index) => (
            <Link to={item.link} onClick={closeSidebar} key={index}>
              <li className="flex w-full rounded-lg px-4 items-center space-x-4 py-4 transition-transform duration-300 ease-in-out cursor-pointer hover:bg-gray-200">
                <div className="relative flex items-center">
                  {item.icon}
                  <span className="mt-1 px-2 text-lg font-medium whitespace-nowrap transform transition-all duration-300">
                    {item.label}
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;