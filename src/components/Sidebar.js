import React, { useState } from 'react';
import { ReactComponent as RightArrow } from './right-arrow.svg';
import { ReactComponent as LeftArrow } from './left-arrow.svg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  const menuItems = [
    { label: 'Item 1', href: '#' },
    { label: 'Item 2', href: '#' },
    { label: 'Item 3', href: '#' },
    { label: 'Item 4', href: '#' },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className={`text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>Sidebar</h2>
          <button
            onClick={toggleSidebar}
            className={`p-2 bg-blue-500 text-white rounded-full focus:outline-none transition-transform duration-300 ${
              isCollapsed ? 'transform rotate-90' : 'transform rotate-0'
            }`}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <RightArrow className="w-6 h-6" /> : <LeftArrow className="w-6 h-6" />}
          </button>
        </div>

        {!isCollapsed && (
          <ul className="mt-4 px-4">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex-grow p-4">
        <h1 className="text-2xl">Main Content</h1>
        <p>This is where your main content goes.</p>
      </div>
    </div>
  );
};

export default Sidebar;

