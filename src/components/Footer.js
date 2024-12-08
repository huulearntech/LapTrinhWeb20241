import React from 'react';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaInstagram as InstagramIcon
} from 'react-icons/fa';

import { ReactComponent as FooterIcon } from '../assets/icons/logo_footer.svg';
import BoCongThuong from '../assets/icons/bo_cong_thuong.webp';
import { ReactComponent as IATA } from '../assets/icons/iata.svg';
import Bsi from '../assets/icons/bsi.webp';

import Jcb from '../assets/icons/jcb.webp';
import Mastercard from '../assets/icons/mastercard.webp';
import Visa from '../assets/icons/visa.webp';
import VnPay from '../assets/icons/vnpay.png';
import MoMo from '../assets/icons/momo.webp';

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 text-white p-8 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* Website Logo */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <FooterIcon className="h-20" />
          </div>

          {/* Business Partners */}
          <div className="w-full items-center">
            <h3 className="text-lg font-semibold mb-2">Our Partners</h3>
            <ul className="list-none flex flex-row space-x-6">
              <li>
                <img src={BoCongThuong} alt="Bo Cong Thuong" className="h-10" />
              </li>
              <li>
                <IATA className="h-10" />
              </li>
              <li>
                <img src={Bsi} alt="BSI" className="h-10" />
              </li>
            </ul>
          </div>

          {/* Payment Partners */}
          <div className="w-full items-center">
            <h3 className="text-lg font-semibold mb-2">Payment Partners</h3>
            <ul className="list-none flex flex-row space-x-6">
              <li className="flex w-16 h-10 rounded-md bg-white items-center justify-center">
                <img src={Jcb} alt="JCB" className="object-cover object-center" />
              </li>
              <li className="flex w-16 h-10 rounded-md bg-white items-center justify-center">
                <img src={Mastercard} alt="Mastercard" className="object-cover object-center" />
              </li>
              <li className="flex w-16 h-10 rounded-md bg-white items-center justify-center">
                <img src={Visa} alt="Visa" className="object-cover object-center" />
              </li>
              <li className="flex w-16 h-10 rounded-md bg-white items-center justify-center">
                <img src={VnPay} alt="VNPay" className="object-cover object-center" />
              </li>
              <li className="flex w-16 h-10 rounded-md bg-white items-center justify-center">
                <img src={MoMo} alt="MoMo" className="object-cover object-center" />
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full items-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-start space-x-6">
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
    </footer>
  );
};

export default Footer;