import React from 'react';
import { BookOpen, Cpu, Sparkles, Terminal, Layers, Lightbulb } from 'lucide-react';
import { AcademicProfile } from '../types';

interface InterestsSectionProps {
  profile: AcademicProfile;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ profile }) => {
  const { interests } = profile;

  const getInterestIcon = (title: string) => {
    if (title.toLowerCase().includes('education')) {
      return <BookOpen className="w-5 h-5 text-amber-800" />;
    }
    if (title.toLowerCase().includes('programming')) {
      return <Terminal className="w-5 h-5 text-amber-800" />;
    }
    if (title.toLowerCase().includes('technology')) {
      return <Layers className="w-5 h-5 text-amber-800" />;
    }
    return <Sparkles className="w-5 h-5 text-amber-800" />;
  };

  return (
    <section id="interests" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold font-sans">
            Pedagogical & Professional Interests
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Interests
          </h2>
          <div className="w-12 h-0.5 bg-amber-700"></div>
          <p className="text-stone-600 text-sm max-w-2xl font-sans pt-1">
            Areas of pedagogical interest, instructional focus, and educational exploration.
          </p>
        </div>

        {/* Grid of Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-2xs hover:border-amber-300/80 transition-all space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200/80">
                  {getInterestIcon(interest.title)}
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-xl">
                  {interest.title}
                </h3>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed font-sans">
                {interest.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-100">
                {interest.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-stone-100 text-stone-700 text-xs font-mono font-medium border border-stone-200/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
