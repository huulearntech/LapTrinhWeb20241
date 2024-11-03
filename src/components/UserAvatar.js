import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignOutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

const UserAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSignOut = () => {
    setIsModalOpen(true);
  };

  const confirmSignOut = () => {
    // Add your sign-out logic here
    console.log('Signing out...');
    setIsModalOpen(false); // Close modal after confirming
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <img
          src="/path/to/user-avatar.jpg" // Replace with your avatar image path
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/manage-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Manage Profile
            </Link>
            <Link to="/my-voucher" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              My Voucher
            </Link>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Sign Out Modal */}
      <SignOutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSignOut}
      />
    </div>
  );
};

export default UserAvatar;

