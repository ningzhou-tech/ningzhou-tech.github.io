import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Clock, Calendar, FileText, MapPin, Terminal, AlertCircle, Sparkles, HelpCircle, ExternalLink } from 'lucide-react';
import { AcademicProfile } from '../types';
import { isPlaceholderValue } from '../utils/environment';

interface TeachingSectionProps {
  profile: AcademicProfile;
  onOpenEditModal: () => void;
  isEditor?: boolean;
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ profile, onOpenEditModal, isEditor = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interests' | 'student-guide'>('overview');
  const { teaching } = profile;

  return (
    <section id="teaching" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold font-sans">
              Instruction & Pedagogy
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Teaching at Purdue
            </h2>
            <div className="w-12 h-0.5 bg-amber-700"></div>
          </div>

          {/* Navigation Pill Tabs */}
          <div className="inline-flex p-1 bg-stone-200/80 rounded-lg text-xs font-medium font-sans">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Current Course (CS 15900)
            </button>
            <button
              onClick={() => setActiveTab('interests')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'interests'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Teaching Interests
            </button>
            <button
              onClick={() => setActiveTab('student-guide')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'student-guide'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              CS 15900 Student Guide
            </button>
          </div>
        </div>

        {/* Tab 1: Current Course (CS 15900) */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Primary Course Card */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-900/40 text-amber-200 border border-amber-800 text-xs font-mono font-medium mb-2">
                    <Terminal className="w-3.5 h-3.5" />
                    Purdue University CS Department
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    {teaching.currentCourseCode}
                  </h3>
                  <p className="text-lg text-stone-300 font-sans mt-1">
                    {teaching.currentCourseName}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-800 text-amber-300 border border-stone-700 text-xs font-medium">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    Instructor: Ning Zhou
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2 font-sans">
                    Course Description & Role
                  </h4>
                  <p className="text-stone-700 leading-relaxed text-base">
                    {teaching.description}
                  </p>
                </div>

                {/* Core Topics Covered */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 font-sans">
                    Core Topics & Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teaching.coreTopics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Logistics */}
                <div className="pt-4 border-t border-stone-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 font-sans">
                      Semester Logistics & Course Details
                    </h4>
                    {isEditor && (
                      <button
                        onClick={onOpenEditModal}
                        className="text-xs text-amber-800 hover:text-amber-950 font-medium underline"
                      >
                        Edit Course Details
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {!isPlaceholderValue(teaching.semesterPlaceholder) && (
                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1">
                        <div className="flex items-center gap-2 text-stone-500 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-stone-400" />
                          <span>Academic Term</span>
                        </div>
                        <div className="font-mono text-stone-800">
                          {teaching.semesterPlaceholder}
                        </div>
                      </div>
                    )}

                    {!isPlaceholderValue(profile.contact.hours || teaching.officeHoursPlaceholder) && (
                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1">
                        <div className="flex items-center gap-2 text-stone-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          <span>Office Hours</span>
                        </div>
                        <div className="font-mono text-stone-800 font-medium">
                          {profile.contact.hours || teaching.officeHoursPlaceholder}
                        </div>
                      </div>
                    )}

                    {!isPlaceholderValue(teaching.syllabusPlaceholder) && (
                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1">
                        <div className="flex items-center gap-2 text-stone-500 font-medium">
                          <FileText className="w-3.5 h-3.5 text-stone-400" />
                          <span>Syllabus & Course Materials</span>
                        </div>
                        <div>
                          <a
                            href={
                              teaching.syllabusPlaceholder && teaching.syllabusPlaceholder.startsWith('http')
                                ? teaching.syllabusPlaceholder
                                : 'https://purdue.simplesyllabus.com/en-US/doc/bgo06lbu7/WL-Fall-2026-CS-%28WL%29-15900-LE1-C-Programming?mode=view'
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-medium text-amber-900 hover:text-amber-950 underline hover:no-underline"
                          >
                            <span>CS 15900 Syllabus — Fall 2026</span>
                            <ExternalLink className="w-3 h-3 text-amber-700" />
                          </a>
                        </div>
                      </div>
                    )}

                    {!isPlaceholderValue(teaching.courseLocationPlaceholder) && (
                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1">
                        <div className="flex items-center gap-2 text-stone-500 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-stone-400" />
                          <span>Lecture & Labs</span>
                        </div>
                        <div className="font-mono text-stone-800">
                          {teaching.courseLocationPlaceholder}
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-stone-500 mt-2.5 italic">
                    * Enrolled students should always consult official Purdue Brightspace course pages for daily assignment deadlines and lab schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Teaching Interests */}
        {activeTab === 'interests' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                  Pedagogical Focus & Teaching Interests
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  My instructional approach prioritizes building deep conceptual mental models rather than superficial syntax memorization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {teaching.teachingInterests.map((interest, i) => (
                  <div key={i} className="p-5 rounded-lg border border-stone-200 bg-stone-50/60 hover:bg-stone-50 transition-colors">
                    <div className="w-8 h-8 rounded bg-amber-100/80 text-amber-900 flex items-center justify-center font-bold text-sm mb-3">
                      0{i + 1}
                    </div>
                    <h4 className="font-serif font-bold text-stone-900 text-base mb-1.5">
                      {interest}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {i === 0 && "Empowering beginners with accessible step-by-step programming paradigms, active feedback loops, and demystified computer operations."}
                      {i === 1 && "Guiding students through low-level memory layout, address pointers, data typing, and compiler behaviors inherent in the C language."}
                      {i === 2 && "Teaching algorithmic decomposition: breaking complicated real-world engineering specifications into testable mathematical subroutines."}
                      {i === 3 && "Instilling sound code structuring, defensive programming practices, code readability, and diagnostic self-troubleshooting."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CS 15900 Student Quick Guide */}
        {activeTab === 'student-guide' && (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 mb-1">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                Guidance for Enrolled Students
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                How to Succeed in CS 15900
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Helpful advice for students taking Programming Applications for Engineers.
              </p>
            </div>

            <div className="space-y-4 text-sm text-stone-700">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-800 text-white text-xs flex items-center justify-center">1</span>
                  Trace Before You Type
                </h4>
                <p className="text-xs text-stone-600">
                  Before writing C code, write pseudocode or trace variables by hand. Understanding what memory locations contain step-by-step saves hours of debugging.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-800 text-white text-xs flex items-center justify-center">2</span>
                  Embrace Compiler Warnings & Diagnostics
                </h4>
                <p className="text-xs text-stone-600">
                  Read gcc compiler flags and warnings carefully. They point directly to uninitialized pointers, format string mismatches, and boundary hazards.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-800 text-white text-xs flex items-center justify-center">3</span>
                  Start Assignments Early & Use Office Hours
                </h4>
                <p className="text-xs text-stone-600">
                  Do not wait until the night before a programming assignment is due. Early starts allow you to consult instructional office hours and test edge cases thoroughly.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
