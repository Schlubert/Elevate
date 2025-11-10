import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getImagePath } from '../utils/paths';

interface SubLink {
  href: string;
  label: string;
  description?: string;
}

interface NavItem {
  href: string;
  label: string;
  subLinks?: SubLink[];
}

const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home' },
  { 
    href: '/about', 
    label: 'About Us',
    subLinks: [
      { href: '/about/our-story', label: 'Our Story', description: 'The founding of Elevate' },
      { href: '/about/team', label: 'Leadership Team', description: 'Meet Kevin & Esther Gilbert' },
      { href: '/about/values', label: 'Our Values', description: 'What drives us' },
          ]
  },
  { 
    href: '/expertise', 
    label: 'Our Expertise',
    subLinks: [
      { href: '/expertise/strategic-planning', label: 'Strategic Planning', description: 'Vision to execution' },
      { href: '/expertise/operational-excellence', label: 'Operational Excellence', description: 'Optimize & scale' },
      { href: '/expertise/leadership-development', label: 'Leadership Development', description: 'Build great leaders' },
      { href: '/expertise/change-management', label: 'Change Management', description: 'Navigate transformation' },
      { href: '/expertise/performance-management', label: 'Performance Management', description: 'Drive accountability' },
      { href: '/expertise/customer-experience', label: 'Customer Experience', description: 'Service excellence' },
      { href: '/expertise/sustainable-practices', label: 'Sustainable Practices', description: 'Responsible growth' },
    ]
  },
  { 
    href: '/industries', 
    label: 'Industries',
    subLinks: [
      { href: '/industries/hospitality', label: 'Hospitality & Tourism' },
      { href: '/industries/retail', label: 'Retail & Consumer Services' },
      { href: '/industries/professional-services', label: 'Professional Services' },
      { href: '/industries/not-for-profit', label: 'Not-for-Profit' },
      { href: '/industries/manufacturing', label: 'Manufacturing & Logistics' },
    ]
  },
  { 
    href: '/approach', 
    label: 'How We Work',
    subLinks: [
      { href: '/approach/our-process', label: 'Our Process', description: 'How we engage' },
      { href: '/approach/methodologies', label: 'Methodologies', description: 'Our proven frameworks' },
      { href: '/approach/engagement-models', label: 'Engagement Models', description: 'Flexible partnerships' },
      { href: '/approach/tools-and-techniques', label: 'Tools & Techniques', description: 'Our toolset' },
    ]
  },
  
  { href: '/contact', label: 'Contact' },
];

const Logo: React.FC = () => (
  <div className="flex items-center">
    <img 
      src={getImagePath('elevate-logo2.png')} 
      alt="Elevate Management Solutions" 
      className="h-16 w-auto"
    />
  </div>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileItem = (label: string) => {
    setMobileExpandedItem(mobileExpandedItem === label ? null : label);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          <Link to="/" className="flex items-center flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 flex-grow justify-end">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.subLinks && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.subLinks ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-base font-semibold transition-colors duration-300 ${
                      activeDropdown === link.label
                        ? 'text-[#0B6E4F]'
                        : 'text-gray-700 hover:text-[#0B6E4F]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-[#0B6E4F] border-b-2 border-[#6BA94D]'
                          : 'text-gray-700 hover:text-[#0B6E4F]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block px-6 py-2 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="font-semibold text-gray-900 group-hover:text-[#0B6E4F] transition-colors">
                            {subLink.label}
                          </div>
                          {subLink.description && (
                            <div className="text-sm text-gray-600 mt-1">
                              {subLink.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#0B6E4F] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="border-b border-gray-100">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleMobileItem(link.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      {link.label}
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 ${
                          mobileExpandedItem === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileExpandedItem === link.label && (
                      <div className="bg-gray-50 px-3 py-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0B6E4F] hover:bg-white rounded transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#6BA94D] text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;