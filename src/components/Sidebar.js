import React from 'react';
import { RiHome2Line, RiFileListLine, RiSearchLine, RiSettings4Line } from 'react-icons/ri';

const Sidebar = ({ isCollapsed }) => {
  const menuItems = [
    { label: 'Home', icon: <RiHome2Line className="w-6 h-6" /> },
    { label: 'Files', icon: <RiFileListLine className="w-6 h-6" /> },
    { label: 'Search', icon: <RiSearchLine className="w-6 h-6" /> },
    { label: 'Settings', icon: <RiSettings4Line className="w-6 h-6" /> },
  ];

  return (
    <>
      {!isCollapsed &&
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"> </div>
      }
      <div
        className={`pt-16 bg-white text-black h-screen transition-all duration-300 ${isCollapsed ? 'w-0' : 'w-64'
          } fixed top-0 left-0 bottom-0 z-40 overflow-hidden transition-all duration-300 shadow-lg rounded-r-lg`}
      >
        <ul className={`mt-4`}>
          {menuItems.map((item, index) => (
            // placeholder for something wraps the <li>
            <li
              key={index}
              className={`flex w-full px-4 items-center space-x-4 py-4 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200`}
            >
              <div className="relative flex items-center">
                {item.icon}
                <span
                  className={`mt-1 px-2 text-lg font-medium whitespace-nowrap transform transition-all duration-300`}
                >
                  {item.label}
                </span>
              </div>
            </li>
            // wrapper ends here
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
