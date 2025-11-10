import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-[#0B6E4F] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        {/* Left side - Quick contact */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+6421234567" 
            className="flex items-center gap-2 hover:text-[#6BA94D] transition-colors"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">+64 21 234 567</span>
          </a>
          <a 
            href="mailto:info@elevatemanagement.co.nz" 
            className="flex items-center gap-2 hover:text-[#6BA94D] transition-colors"
          >
            <Mail size={16} />
            <span className="hidden md:inline">info@elevatemanagement.co.nz</span>
          </a>
        </div>

        {/* Right side - Social & CTA */}
        <div className="flex items-center gap-4">
          <a 
            href="https://linkedin.com/company/elevate-management-solutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#6BA94D] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="/contact" 
            className="hidden md:inline-block bg-[#6BA94D] text-white px-4 py-1 rounded hover:bg-white hover:text-[#0B6E4F] transition-colors font-semibold"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;