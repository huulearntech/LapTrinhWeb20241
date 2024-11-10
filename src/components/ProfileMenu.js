import React, { useState } from 'react';
import { RiUser3Line, RiLogoutBoxRLine, RiCoupon2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SignOutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-30">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
        <h2 className="text-lg font-bold">Confirm Sign Out</h2>
        <p className="mt-2">Do you want to sign out?</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};


const ProfileMenu = ({ isCollapsed }) => {
  const menuItems = [
    { label: 'Profile', icon: <RiUser3Line className="w-6 h-6" />, link: '/profile' },
    { label: 'Coupon', icon: <RiCoupon2Line className="w-6 h-6" />, link: '/coupon' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    setIsModalOpen(true);
  };

  const confirmSignOut = () => {
    // Add your sign-out logic here
    console.log('Signing out...');
    setIsModalOpen(false); // Close modal after confirming
  };

  return (
    <>
      {!isCollapsed &&
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10"> </div>

      }
      <div
        className={`pt-16 bg-white text-black h-screen transition-all duration-300 ${isCollapsed ? 'w-0' : 'w-64'
          } fixed top-0 right-0 bottom-0 z-20 overflow-hidden transition-all duration-300 shadow-lg rounded-r-lg`}
      >
        <ul className={`mt-4`}>
          {menuItems.map((item, index) => (
            <Link to={item.link}>
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
            </Link>
          ))}
          <li
            className={`flex w-full px-4 items-center space-x-4 py-4 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200`}
            onClick={handleSignOut}
          >
            <div className="relative flex items-center text-red-500">
              <RiLogoutBoxRLine className="size-6" />
              <span
                className={`mt-1 px-2 text-lg font-medium whitespace-nowrap transform transition-all duration-300`}
              >
                Sign out
              </span>
            </div>
          </li>
        </ul>
      </div>
      <SignOutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSignOut}
      />
    </>
  );
};

export default ProfileMenu;