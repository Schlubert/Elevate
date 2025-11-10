// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B6E4F] text-white py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/elevate-logo2.png" 
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
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Strategic Planning</li>
              <li>Operational Excellence</li>
              <li>Leadership Development</li>
              <li>Change Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Auckland, New Zealand</li>
              <li>
                <a href="mailto:info@elevatemanagement.co.nz" className="hover:text-[#6BA94D] transition-colors">
                  info@elevatemanagement.co.nz
                </a>
              </li>
              <li>
                <a href="tel:+6421234567" className="hover:text-[#6BA94D] transition-colors">
                  +64 21 234 567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Elevate Management Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;