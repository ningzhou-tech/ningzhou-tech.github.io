/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/initialData';
import { AcademicProfile } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TeachingSection } from './components/TeachingSection';
import { BackgroundSection } from './components/BackgroundSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditModal } from './components/EditModal';
import { Edit3, Eye, Sparkles, X, Info } from 'lucide-react';
import { isEditModeAvailable } from './utils/environment';

const STORAGE_KEY = 'ning_zhou_academic_profile_v6';

export default function App() {
  const isDevEnv = isEditModeAvailable();
  const [isEditorMode, setIsEditorMode] = useState<boolean>(isDevEnv);

  // Keyboard shortcut (Ctrl+Shift+E or Cmd+Shift+E) to toggle editor
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setIsEditorMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [profile, setProfile] = useState<AcademicProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ning_zhou_academic_profile_v5');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.contact?.directoryLink === 'https://www.cs.purdue.edu' || !parsed.contact?.directoryLink) {
          parsed.contact = {
            ...parsed.contact,
            directoryLink: initialProfileData.contact.directoryLink,
          };
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
          } catch {
            // ignore
          }
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load profile from storage', e);
    }
    return initialProfileData;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  const handleSaveProfile = (updated: AcademicProfile) => {
    // Keep office hours synchronized across contact and teaching
    const syncedProfile: AcademicProfile = {
      ...updated,
      teaching: {
        ...updated.teaching,
        officeHoursPlaceholder: updated.contact.hours,
      },
    };
    setProfile(syncedProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedProfile));
    } catch (e) {
      console.error('Failed to save profile to storage', e);
    }
  };

  const handleResetProfile = () => {
    if (window.confirm('Reset all information back to default values?')) {
      setProfile(initialProfileData);
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('ning_zhou_academic_profile_v1');
      } catch (e) {
        console.error('Failed to clear storage', e);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* Top Notification Banner for Lecturer Revision Control (Visible in AI Studio Editor mode) */}
      {showWelcomeBanner && isEditorMode && (
        <aside
          aria-label="Welcome notice"
          id="version-welcome-banner"
          className="no-print bg-stone-900 text-stone-200 px-4 py-2.5 text-xs flex items-center justify-between border-b border-stone-800"
        >
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-amber-800/80 text-amber-200 font-mono text-[10px] font-semibold tracking-wide uppercase">
                Studio Edit Mode
              </span>
              <span className="text-stone-300">
                Personal Academic Website for <strong>Ning Zhou</strong> (Purdue CS Lecturer).
              </span>
              <span className="hidden sm:inline text-stone-400">
                Editing controls are visible to you here in Google AI Studio.
              </span>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsEditorMode(false)}
                className="text-stone-400 hover:text-stone-200 font-medium flex items-center gap-1 border border-stone-700 px-2 py-0.5 rounded"
                title="Preview public site without editing buttons"
              >
                <Eye className="w-3 h-3 text-stone-400" />
                <span>Preview Public View</span>
              </button>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="underline hover:text-amber-300 text-stone-300 font-medium flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit Profile Details</span>
              </button>
              <button
                onClick={() => setShowWelcomeBanner(false)}
                className="text-stone-400 hover:text-stone-200 p-0.5"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Navigation Header */}
      <Header
        name={profile.name}
        title={profile.title}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        isEditor={isEditorMode}
      />

      {/* Main Academic Content Flow */}
      <main className="flex-1">
        <HeroSection
          profile={profile}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          isEditor={isEditorMode}
        />

        <AboutSection
          profile={profile}
        />

        <TeachingSection
          profile={profile}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          isEditor={isEditorMode}
        />

        <BackgroundSection
          profile={profile}
        />

        <InterestsSection
          profile={profile}
        />

        <ContactSection
          profile={profile}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          isEditor={isEditorMode}
        />
      </main>

      {/* Academic Footer with Institutional Disclaimer */}
      <Footer
        name={profile.name}
        department={profile.department}
        institution={profile.institution}
      />

      {/* Content Revision Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      {/* Persistent Floating Edit Button (AI Studio Editor Mode Only) */}
      {isEditorMode && (
        <div className="no-print fixed bottom-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={() => setIsEditModalOpen(true)}
            id="floating-edit-btn"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-stone-900 text-stone-100 text-xs font-medium shadow-lg hover:bg-amber-900 hover:text-white transition-all border border-stone-700/60 group"
            title="Revise content or update profile details"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-200" />
            <span className="hidden sm:inline">Edit Profile Details</span>
            <span className="sm:hidden">Edit</span>
          </button>
        </div>
      )}

      {/* In dev/Studio only: Preview mode indicator to easily toggle back */}
      {isDevEnv && !isEditorMode && (
        <div className="no-print fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setIsEditorMode(true)}
            id="floating-preview-toggle-btn"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-900/90 text-stone-300 hover:text-white text-xs shadow-md border border-stone-700/80 transition-all hover:bg-stone-900"
            title="Return to Studio Editor Mode"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-400" />
            <span>Public Preview (Click to Edit)</span>
          </button>
        </div>
      )}

    </div>
  );
}
