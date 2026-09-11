import React from 'react';
import { GraduationCap, Code2, Users, Lightbulb, Compass, Award } from 'lucide-react';
import { AcademicProfile } from '../types';

interface AboutSectionProps {
  profile: AcademicProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold font-sans">
            Profile & Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-amber-700"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-stone text-stone-700 leading-relaxed font-sans space-y-4 text-base">
              {profile.aboutParagraphs.map((para, index) => (
                <p key={index} className="text-stone-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Teaching Philosophy Block Quote */}
            <div className="p-5 bg-amber-50/60 rounded-lg border-l-4 border-amber-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 font-sans">
                <Lightbulb className="w-4 h-4 text-amber-700" />
                Teaching Philosophy & Focus
              </div>
              <p className="font-serif italic text-stone-800 text-lg leading-snug">
                “I enjoy helping students understand programming concepts and develop practical problem-solving skills.”
              </p>
              <p className="text-xs text-stone-600 font-sans">
                Emphasizing conceptual clarity, systematic debugging, and computational confidence from the ground up.
              </p>
            </div>
          </div>

          {/* Quick Academic & Professional Credentials Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-50 rounded-lg p-6 border border-stone-200 space-y-5">
              <h3 className="font-serif font-bold text-stone-900 text-lg border-b border-stone-200 pb-3">
                Key Background Highlights
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-stone-200 text-stone-700 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900">Education</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Master's Degree in Computer Science
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-stone-200 text-stone-700 mt-0.5">
                    <Users className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900">Instruction & CS Education</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      College-level instruction at Purdue University (CS 15900) and Ivy Tech Community College (Web Dev & Data Science).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-stone-200 text-stone-700 mt-0.5">
                    <Code2 className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900">Software Development</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Hands-on professional experience developing software applications, writing clean maintainable code, and testing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white border border-stone-200 text-stone-700 mt-0.5">
                    <Compass className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900">Business Analysis</h4>
                    <p className="text-stone-600 text-xs mt-0.5">
                      Analyzing real-world requirements, formulating structured workflows, and bridging user objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
