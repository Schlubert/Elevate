// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { getImagePath } from '../utils/paths';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B6E4F] text-white py-3 mt-2 w-full">
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-3 max-w-7xl mx-auto">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-1">
              <img 
                src={getImagePath('elevate-logo2.png')} 
                alt="Elevate Management Solutions" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Elevating businesses through strategic insight, operational excellence, and partnership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-1">Quick Links</h3>
            <ul className="space-y-0">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#6BA94D] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#6BA94D] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-400 hover:text-[#6BA94D] transition-colors text-sm">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-[#6BA94D] transition-colors text-sm">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-1">Services</h3>
            <ul className="space-y-0 text-gray-400 text-sm">
              <li>Strategic Planning</li>
              <li>Operational Excellence</li>
              <li>Leadership Development</li>
              <li>Change Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-1">Contact</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Auckland, New Zealand</li>
              <li>
                <a href="mailto:info@elevates.nz" className="hover:text-[#6BA94D] transition-colors">
                  info@elevates.nz
                </a>
              </li>
              <li>
                <a href="tel:+64274859001" className="hover:text-[#6BA94D] transition-colors">
                  +64 27 485 9001
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-1 text-center text-gray-400 text-sm max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Elevate Management Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;