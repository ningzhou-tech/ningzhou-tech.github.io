import React from 'react';
import { BookOpen, GraduationCap, MapPin, Mail, ArrowDown, Sparkles, Terminal, Clock, School } from 'lucide-react';
import { AcademicProfile } from '../types';
import { isPlaceholderValue } from '../utils/environment';

interface HeroSectionProps {
  profile: AcademicProfile;
  onOpenEditModal: () => void;
  isEditor?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenEditModal, isEditor = false }) => {
  return (
    <section id="home" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Introduction Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-200/80 text-stone-800 border border-stone-300">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              Purdue University • Department of Computer Science
            </div>

            <div className="space-y-2">
              <h1 id="hero-heading-name" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight">
                {profile.name}
              </h1>
              <p id="hero-heading-title" className="text-xl sm:text-2xl font-serif text-stone-700 font-medium">
                {profile.title}, {profile.department}
              </p>
              <p className="text-base font-sans text-stone-600 font-medium">
                {profile.institution}
              </p>
            </div>

            {/* Welcoming introduction */}
            <p className="text-lg text-stone-700 leading-relaxed font-sans max-w-2xl">
              {profile.welcomeIntro}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
                <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
                {profile.degree}
              </span>
              <a
                href="#teaching"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                CS 15900 – C Programming
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
                <School className="w-3.5 h-3.5 text-stone-500" />
                Adjunct Faculty, Ivy Tech Community College
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#teaching"
                id="hero-cta-teaching"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-colors shadow-xs"
              >
                View Teaching & CS 15900
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-stone-100 text-stone-800 text-sm font-medium border border-stone-300 hover:bg-stone-200 transition-colors"
              >
                Contact & Office Details
              </a>
              <a
                href="#about"
                id="hero-cta-about"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-stone-500 hover:text-stone-800 text-sm font-medium transition-colors"
              >
                <span>Read Background</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Card / Profile Snapshot Column */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-stone-800 text-stone-100 flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
                  NZ
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg leading-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-semibold text-stone-700 font-sans mt-1">
                    Lecturer, Department of Computer Science
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-3 text-xs text-stone-600 font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Affiliations:</span>
                    <span className="block text-stone-800">Purdue University (Lecturer)</span>
                    <span className="block text-stone-600">Ivy Tech Community College (Adjunct Faculty)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Current Course:</span>
                    CS 15900 – C Programming
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-900 block">Academic Credential:</span>
                    {profile.degree}
                  </div>
                </div>

                {!isPlaceholderValue(profile.contact.hours) && (
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-stone-900 block">Office Hours:</span>
                      <span className="font-mono text-stone-800 text-[11px] font-medium">{profile.contact.hours}</span>
                    </div>
                  </div>
                )}
              </div>

              {isEditor && (
                <div className="pt-2 border-t border-stone-100">
                  <button
                    onClick={onOpenEditModal}
                    className="w-full text-center py-2 px-3 text-xs text-stone-600 hover:text-amber-900 hover:bg-amber-50/50 rounded border border-dashed border-stone-300 transition-colors"
                  >
                    Revise Profile Details
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
