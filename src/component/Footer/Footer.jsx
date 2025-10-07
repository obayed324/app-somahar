import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#011630] text-white py-8 px-4 sm:px-6 lg:px-8 mt-0 mb-0">
      <div className="max-w-[900px] mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6 gap-6 sm:gap-0">
          
          <div className="flex items-center gap-3">
            <img
              src={footerLogo}
              alt="HERO.IO Logo"
              className="w-9 h-9 object-contain"
            />
            <h2 className="text-lg font-semibold tracking-wide">HERO.IO</h2>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-300 mb-2">Social Links</p>
            <div className="flex justify-center sm:justify-end gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#011630] hover:bg-gray-300 transition"
              >
                <FaXTwitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#011630] hover:bg-gray-300 transition"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#011630] hover:bg-gray-300 transition"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="text-center text-gray-400 text-sm mt-6">
          Copyright © 2025 - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
