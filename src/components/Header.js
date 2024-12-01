// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { RiMenuLine as SidebarIcon } from 'react-icons/ri';
import { FaCartShopping as CartIcon } from 'react-icons/fa6';

const CartButton = ({ itemCount }) => (
  <Link to="/cart" className="relative inline-block p-2 rounded-full hover:bg-gray-200 cursor-pointer">
    <CartIcon className="w-6 h-6" />
    {itemCount > 0 && (
      <span className="absolute -top-2 -right-4 inline-flex items-center justify-center min-w-5 w-auto h-5 px-1 text-xs font-medium text-white bg-red-600 rounded-full">
        {itemCount <= 99 ? itemCount : "99+"}
      </span>
    )}
  </Link>
);

const AvatarButton = ({ user, onToggleProfileMenu }) => (
  <button
    onClick={onToggleProfileMenu}
    className="flex items-center justify-center bg-blue-500 p-2 rounded-full hover:ring hover:ring-blue-600"
    aria-label="Toggle ProfileMenu"
  >
    {user.avatar ? (
      <img src={user.avatar} alt="User Avatar" className="w-6 h-6" />
    ) : (
      <span className="w-6 h-6 text-white font-bold">
        {user.email.charAt(0).toUpperCase()}
      </span>
    )}
  </button>
);

const Header = ({ onToggleSidebar, onToggleProfileMenu, onOpenAuthModal, isFixed, className }) => {
  const { user } = useAuth();

  return (
    <header className={`w-full h-20 z-50 shadow-sm ${isFixed ? 'fixed' : ''} ${className}`}>
      <div className="flex w-full h-full justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-full hover:bg-gray-200 lg:hidden"
            aria-label="Toggle Sidebar"
          >
            <SidebarIcon className="w-6 h-6" />
          </button>
          <Link to="/" className="text-xl font-bold text-blue-700">
            Logo
          </Link>
        </div>

        <div className="flex-grow flex justify-center">
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="hover:bg-gray-200 px-4 py-2 rounded-full hover:underline">Home</Link>
            <Link to="/search" className="hover:bg-gray-200 px-4 py-2 rounded-full hover:underline">Search</Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <CartButton itemCount={1009} />
              <AvatarButton user={user} onToggleProfileMenu={onToggleProfileMenu} />
            </>
          ) : (
            <>
              <button
                onClick={() => onOpenAuthModal('signIn')}
                className="bg-inherit px-4 py-2 rounded-full border border-black hover:bg-gray-200"
              >
                Sign in
              </button>
              <button
                onClick={() => onOpenAuthModal('signUp')}
                className="bg-inherit px-4 py-2 rounded-full border border-black hover:bg-gray-200"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;