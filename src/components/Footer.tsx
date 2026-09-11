import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  name: string;
  department: string;
  institution: string;
}

export const Footer: React.FC<FooterProps> = ({ name, department, institution }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800 text-xs font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="font-serif text-lg font-bold text-stone-100">
              {name}
            </div>
            <p className="text-stone-400 mt-1">
              Lecturer, {department}, {institution}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              About
            </a>
            <a
              href="#teaching"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              Teaching
            </a>
            <a
              href="#background"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              Background
            </a>
            <a
              href="#contact"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Academic Notice */}
        <div className="space-y-3 text-stone-400">
          <div className="flex items-start gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-stone-300">Academic Website Notice & Institutional Disclaimer:</strong> This website is the personal academic homepage of Ning Zhou for informational and instructional communication with students and colleagues. It does not represent an official publication, endorsement, or formal institutional statement of Purdue University.
            </p>
          </div>
          <p className="text-stone-500">
            © {currentYear} Ning Zhou. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
