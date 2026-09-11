import React, { useState } from 'react';
import { X, Save, RotateCcw, Download, Check, AlertTriangle } from 'lucide-react';
import { AcademicProfile } from '../types';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: AcademicProfile;
  onSave: (updated: AcademicProfile) => void;
  onReset: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<AcademicProfile>(profile);
  const [activeTab, setActiveTab] = useState<'contact' | 'teaching' | 'background' | 'general'>('contact');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state if profile prop changes
  React.useEffect(() => {
    setFormData(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const syncedData: AcademicProfile = {
      ...formData,
      teaching: {
        ...formData.teaching,
        officeHoursPlaceholder: formData.contact.hours,
      },
    };
    onSave(syncedData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "ning_zhou_academic_profile.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      id="edit-profile-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs"
    >
      <div
        id="edit-profile-modal-card"
        className="bg-white rounded-xl shadow-xl border border-stone-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Revise Profile Details & Content
            </h3>
            <p className="text-xs text-stone-600 font-sans mt-0.5">
              Customize contact info, office hours, CS 15900 logistics, and career experience details.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-100/70 px-5 pt-2 text-xs font-medium font-sans gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`pb-2 px-3 border-b-2 font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'contact'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Contact & Office
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('teaching')}
            className={`pb-2 px-3 border-b-2 font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'teaching'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            CS 15900 Logistics
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('background')}
            className={`pb-2 px-3 border-b-2 font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'background'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Career Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`pb-2 px-3 border-b-2 font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'general'
                ? 'border-amber-700 text-amber-900'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            Bio & Intro
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs text-stone-700 font-sans">
          
          {/* TAB 1: Contact */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="p-3 bg-stone-50 rounded border border-stone-200 text-stone-700 text-xs">
                Enter your Purdue email, office room number, and office hours below. Unused profile links can be left blank.
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Email Address
                </label>
                <input
                  type="text"
                  value={formData.contact.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, email: e.target.value },
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  placeholder="e.g. zhou1489@purdue.edu"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Office Location
                </label>
                <input
                  type="text"
                  value={formData.contact.office}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, office: e.target.value },
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  placeholder="e.g. LWSN B116A"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Office Hours
                </label>
                <input
                  type="text"
                  value={formData.contact.hours}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, hours: val },
                      teaching: { ...formData.teaching, officeHoursPlaceholder: val },
                    });
                  }}
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  placeholder="e.g. Monday noon–2:00 PM and Thursday noon–1:00 PM"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Purdue CS Faculty Directory Link
                </label>
                <input
                  type="text"
                  value={formData.contact.directoryLink}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, directoryLink: e.target.value },
                    })
                  }
                  placeholder="https://www.cs.purdue.edu/people/faculty/zhou1489.html"
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    GitHub Profile
                  </label>
                  <input
                    type="text"
                    value={formData.contact.githubLink}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, githubLink: e.target.value },
                      })
                    }
                    className="w-full p-2 rounded border border-stone-300 font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    value={formData.contact.linkedinLink}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact: { ...formData.contact, linkedinLink: e.target.value },
                      })
                    }
                    className="w-full p-2 rounded border border-stone-300 font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Teaching / CS 159 */}
          {activeTab === 'teaching' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Academic Term / Semester
                </label>
                <input
                  type="text"
                  value={formData.teaching.semesterPlaceholder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      teaching: { ...formData.teaching, semesterPlaceholder: e.target.value },
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs"
                  placeholder="e.g. Fall 2026"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Office Hours Schedule
                </label>
                <input
                  type="text"
                  value={formData.contact.hours}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData({
                      ...formData,
                      contact: { ...formData.contact, hours: val },
                      teaching: { ...formData.teaching, officeHoursPlaceholder: val },
                    });
                  }}
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  placeholder="e.g. Monday noon–2:00 PM and Thursday noon–1:00 PM"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Syllabus / Brightspace Access
                </label>
                <input
                  type="text"
                  value={formData.teaching.syllabusPlaceholder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      teaching: { ...formData.teaching, syllabusPlaceholder: e.target.value },
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs"
                  placeholder="e.g. https://purdue.simplesyllabus.com/..."
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Lecture & Lab Locations
                </label>
                <input
                  type="text"
                  value={formData.teaching.courseLocationPlaceholder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      teaching: { ...formData.teaching, courseLocationPlaceholder: e.target.value },
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 font-mono text-xs"
                  placeholder="e.g. Elliott Hall of Music / Lawson CS Labs"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Career Experience */}
          {activeTab === 'background' && (
            <div className="space-y-4">
              <div className="p-3 bg-stone-50 rounded border border-stone-200 text-stone-700 text-xs">
                You can customize the descriptions for each career pillar or add an optional timeline/organization footnote below. Leave the footnote blank if you prefer no additional note on the card.
              </div>

              {formData.professionalBackground.pillars.map((pillar, pIdx) => (
                <div key={pIdx} className="p-3.5 bg-stone-50/80 rounded-lg border border-stone-200 space-y-3">
                  <div className="font-semibold text-stone-900 text-xs flex items-center justify-between">
                    <span>{pillar.category}</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Pillar #{pIdx + 1}</span>
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1 text-[11px]">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={pillar.description}
                      onChange={(e) => {
                        const newPillars = [...formData.professionalBackground.pillars];
                        newPillars[pIdx] = {
                          ...newPillars[pIdx],
                          description: e.target.value,
                        };
                        setFormData({
                          ...formData,
                          professionalBackground: {
                            ...formData.professionalBackground,
                            pillars: newPillars,
                          },
                        });
                      }}
                      className="w-full p-2 rounded border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1 text-[11px]">
                      Optional Timeline / Organization Note (leave blank to display nothing)
                    </label>
                    <input
                      type="text"
                      value={pillar.timelineNote || ''}
                      onChange={(e) => {
                        const newPillars = [...formData.professionalBackground.pillars];
                        newPillars[pIdx] = {
                          ...newPillars[pIdx],
                          timelineNote: e.target.value,
                        };
                        setFormData({
                          ...formData,
                          professionalBackground: {
                            ...formData.professionalBackground,
                            pillars: newPillars,
                          },
                        });
                      }}
                      placeholder="e.g. Purdue University (or leave blank)"
                      className="w-full p-2 rounded border border-stone-300 font-sans text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: General */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Welcoming Introduction (Home)
                </label>
                <textarea
                  rows={4}
                  value={formData.welcomeIntro}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      welcomeIntro: e.target.value,
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 text-xs focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Degree Description
                </label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      degree: e.target.value,
                    })
                  }
                  className="w-full p-2.5 rounded border border-stone-300 text-xs"
                />
              </div>
            </div>
          )}

          {/* Modal Footer Controls */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
                title="Reset to default prompt values"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
              <button
                type="button"
                onClick={handleExportJSON}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
                title="Export profile data as JSON"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 transition-colors shadow-xs"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Apply Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
