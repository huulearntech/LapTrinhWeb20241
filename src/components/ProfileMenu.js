import React, { useState } from 'react';
import { BsPersonGear as ProfileSettingIcon } from 'react-icons/bs';
import {
  RiLogoutBoxRLine as SignOutIcon,
  RiCoupon2Line as CouponIcon
} from 'react-icons/ri';
import { RxCross2 as CloseProfileMenuIcon } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { fake_user } from '../fake_data';


const SignOutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="w-full max-w-lg bg-white p-6 mx-auto rounded-lg shadow-lg">
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
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};


const ProfileMenu = ({ isOpen, closeProfileMenu }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Account Settings', icon: <ProfileSettingIcon className="w-6 h-6" />, link: '/account' },
    { label: 'Coupon', icon: <CouponIcon className="w-6 h-6" />, link: '/coupon' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    setIsModalOpen(true);
  };

  const confirmSignOut = () => {
    // Add your sign-out logic here

    // gui tin hieu ve server

    signOut();
    console.log('Signing out...');
    setIsModalOpen(false); // Close modal after confirming
    closeProfileMenu();
    navigate("/");
  };

  return (
    <>
      {isOpen &&
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50"
          onClick={closeProfileMenu}> </div>
      }
      <div
        className={`bg-white text-black h-screen transition-all duration-300 ${isOpen ? 'w-80' : 'w-0'
          } fixed top-0 right-0 bottom-0 z-50 overflow-hidden transition-all duration-300 shadow-lg rounded-r-lg`}
      >
        <div className="flex p-4 items-center justify-between">
          <div className="flex p-4 flex-col flex-grow">
            <div className="text-lg font-bold text-black truncate">{fake_user.fullName}</div>
            <div className="text-md text-gray-500 truncate max-w-48">{fake_user.email}</div>
          </div>
          <button
            onClick={closeProfileMenu}
            className="ml-4 p-2 rounded-full hover:bg-gray-200"
            aria-label="Close Profile Menu"
          >
            <CloseProfileMenuIcon className="w-6 h-6" />
          </button>
        </div>
        <ul className="px-2">
          {menuItems.map((item, index) => (
            <Link to={item.link} onClick={closeProfileMenu} key={index}>
              <li
                className="flex w-full rounded-lg px-4 items-center space-x-4 py-4 transition-transform duration-300 ease-in-out cursor-pointer hover:bg-gray-200"
              >
                <div className="relative flex items-center">
                  {item.icon}
                  <span
                    className="mt-1 px-2 text-lg font-medium whitespace-nowrap transform transition-all duration-300"
                  >
                    {item.label}
                  </span>
                </div>
              </li>
            </Link>
          ))}
          <li
            className="flex w-full rounded-lg px-4 items-center space-x-4 py-4 transition-transform duration-300 ease-in-out cursor-pointer hover:bg-gray-200 text-red-500"
            onClick={handleSignOut}
          >
            <div className="relative flex items-center">
              <SignOutIcon className="w-6 h-6" />
              <span
                className="mt-1 px-2 text-lg font-medium whitespace-nowrap transform transition-all duration-300"
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