import React from 'react';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon
} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Website Logo */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="text-xl font-bold text-white">Logo</div>
          </div>

          {/* Business Partners */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <h3 className="text-lg font-semibold mb-2">Our Partners</h3>
            <ul className="list-none">
              <li>Partner 1</li>
              <li>Partner 2</li>
              <li>Partner 3</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <FacebookIcon className="h-8 w-8 text-white hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <TwitterIcon className="h-8 w-8 text-white hover:text-cyan-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <InstagramIcon className="h-8 w-8 text-white hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;