import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import { RiMenuLine as SidebarIcon } from 'react-icons/ri';
import { FaCartShopping as CartIcon } from 'react-icons/fa6';
import { RxAvatar } from 'react-icons/rx';

// can them tinh nang dem so luong trong gio hang
const CartButton = ({ itemCount }) => {
  return (
    <Link to="/cart" className="relative inline-block p-2 rounded-full hover:bg-gray-500 cursor-pointer">
      <CartIcon className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-4 inline-flex items-center justify-center min-w-5 w-auto h-5 px-1 text-xs font-medium text-white bg-red-600 rounded-full">
          {itemCount <= 99 ? itemCount : "99+"}
        </span>
      )}
    </Link>
  );
};

const Header = ({ onToggleSidebar, onToggleProfileMenu, onOpenAuthModal }) => {
  const { user } = useAuth();

  return (
    <header className="relative w-full h-20 z-50">
      <div className="relative flex w-full h-full justify-between items-center px-4 py-2 bg-gray-800 text-white">

        {/* Left Section */}
        <div className="flex space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-full text-white hover:bg-gray-500"
            aria-label="Toggle Sidebar"
          >
            <SidebarIcon className="size-6" />
          </button>
        </div>

        {/* Center Section (Logo) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-xl font-bold">Logo</Link>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          {user ?
            (
              <>
                <CartButton itemCount={1009} />
                <button
                  onClick={onToggleProfileMenu}
                  className="p-2 rounded-full text-white hover:bg-gray-500 hover:ring hover:ring-blue-500"
                  aria-label="Toggle ProfileMenu"
                >

                  {/* Place holder for Avatar */}
                  <RxAvatar className="size-6" />
                </button>
              </>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="bg-blue-700 px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Sign in / Sign up
              </button>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
