import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { RiMenuLine } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx';

const Cart = ({ itemCount }) => {
  return (
    <Link to="/cart" className="relative inline-block p-2 rounded-full hover:bg-gray-500 cursor-pointer">
      <FaCartShopping className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-4 inline-flex items-center justify-center min-w-5 w-auto h-5 px-1 text-xs font-medium text-white bg-red-600 rounded-full">
          {itemCount <= 99 ? itemCount : "99+"}
        </span>
      )}
    </Link>
  );
};

const Header = ({ onToggleSidebar, onToggleProfileMenu }) => {
  return (
    <div className="z-50 fixed w-full flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-full text-white hover:bg-gray-500"
        aria-label="Toggle Sidebar"
      >
        <RiMenuLine className="size-6" />
      </button>
      <div className="flex items-center mx-auto">
        <Link to="/" className="text-xl font-bold">Logo</Link>
      </div>
      <div className="flex items-center space-x-10">
        <Cart itemCount={1009} />
        <button
          onClick={onToggleProfileMenu}
          className="p-2 rounded-full text-white hover:bg-gray-500 hover:ring hover:ring-blue-500"
          aria-label="Toggle ProfileMenu"
        >
          <RxAvatar className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
