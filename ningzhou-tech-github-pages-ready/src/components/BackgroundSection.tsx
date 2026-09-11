import React from 'react';
import { Briefcase, Code, LineChart, School } from 'lucide-react';
import { AcademicProfile } from '../types';
import { isPlaceholderValue } from '../utils/environment';

interface BackgroundSectionProps {
  profile: AcademicProfile;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ profile }) => {
  const { professionalBackground } = profile;

  return (
    <section id="background" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold font-sans">
            Career Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            {professionalBackground.title}
          </h2>
          <div className="w-12 h-0.5 bg-amber-700"></div>
          <p className="text-stone-600 text-sm max-w-2xl font-sans pt-1">
            {professionalBackground.summary}
          </p>
        </div>

        {/* 3 Core Experience Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionalBackground.pillars.map((pillar, idx) => {
            const getIcon = () => {
              switch (idx) {
                case 0:
                  return <School className="w-5 h-5 text-amber-800" />;
                case 1:
                  return <Code className="w-5 h-5 text-amber-800" />;
                case 2:
                  return <LineChart className="w-5 h-5 text-amber-800" />;
                default:
                  return <Briefcase className="w-5 h-5 text-amber-800" />;
              }
            };

            return (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center">
                    {getIcon()}
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-stone-900 text-lg leading-snug">
                      {pillar.category}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed font-sans">
                    {pillar.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                      Core Competencies
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {pillar.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-700 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {pillar.timelineNote && !isPlaceholderValue(pillar.timelineNote) && (
                  <div className="pt-3 mt-4 border-t border-stone-100 text-[11px] text-stone-600 font-sans">
                    {pillar.timelineNote}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
