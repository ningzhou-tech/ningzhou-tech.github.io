import React, { useState, useEffect } from 'react';
import { Menu, X, Edit3, Printer, ExternalLink, GraduationCap } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  onOpenEditModal: () => void;
  isEditor?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ name, title, onOpenEditModal, isEditor = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'teaching', 'background', 'interests', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'background', label: 'Professional Background' },
    { id: 'interests', label: 'Interests' },
    { id: 'contact', label: 'Contact' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-stone-50/95 backdrop-blur-md border-stone-200/80 shadow-xs'
          : 'bg-[#faf9f6] border-stone-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand / Name & Department */}
          <a
            href="#home"
            id="nav-brand-link"
            className="group flex items-center gap-3 text-left focus:outline-hidden focus:ring-2 focus:ring-amber-800/40 rounded-sm"
          >
            <div className="w-10 h-10 rounded-md bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-lg font-semibold tracking-wider group-hover:bg-amber-900 transition-colors">
              NZ
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-stone-900 tracking-tight leading-tight group-hover:text-amber-900 transition-colors">
                {name}
              </div>
              <div className="text-xs font-sans text-stone-500 font-medium">
                Purdue CS Lecturer
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-amber-950 bg-amber-100/70 font-semibold'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="header-print-btn"
              title="Print or Save CV page"
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 rounded-md transition-colors text-xs flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            {isEditor && (
              <button
                onClick={onOpenEditModal}
                id="header-edit-profile-btn"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-50 border border-amber-200/80 rounded-md hover:bg-amber-100/80 transition-colors shadow-2xs"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-800" />
                <span>Revise Profile</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {isEditor && (
              <button
                onClick={onOpenEditModal}
                id="mobile-edit-btn"
                className="p-2 text-amber-900 bg-amber-50 border border-amber-200 rounded-md text-xs font-medium"
                title="Revise Profile"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-md focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-5 space-y-1 shadow-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                activeSection === link.id
                  ? 'text-amber-950 bg-amber-100 font-semibold'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-stone-600 hover:bg-stone-200/60 rounded-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print Page</span>
            </button>
            {isEditor && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditModal();
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-amber-900 bg-amber-100 rounded-md"
              >
                <Edit3 className="w-4 h-4" />
                <span>Revise Information</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
