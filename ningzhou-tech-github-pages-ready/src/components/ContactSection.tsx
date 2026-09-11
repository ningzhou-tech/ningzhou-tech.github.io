import React, { useState } from 'react';
import { Mail, MapPin, Clock, Building2, ExternalLink, Copy, Check, Edit3, FileText, Globe, Github, Linkedin } from 'lucide-react';
import { AcademicProfile } from '../types';
import { isPlaceholderValue } from '../utils/environment';

interface ContactSectionProps {
  profile: AcademicProfile;
  onOpenEditModal: () => void;
  isEditor?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onOpenEditModal, isEditor = false }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { contact } = profile;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold font-sans">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Contact & Office Details
            </h2>
            <div className="w-12 h-0.5 bg-amber-700"></div>
          </div>

          {isEditor && (
            <button
              onClick={onOpenEditModal}
              id="contact-customize-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-300/80 rounded-md hover:bg-amber-100 transition-colors shadow-2xs self-start md:self-auto"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-800" />
              <span>Edit Contact Details</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Direct Contact & Office Card */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200 shadow-2xs space-y-6">
            <h3 className="font-serif font-bold text-stone-900 text-lg border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Instructional & Office Info</span>
              <span className="text-xs font-sans font-normal text-stone-600">Purdue CS</span>
            </h3>

            <div className="space-y-5 text-sm">
              {/* Email */}
              {!isPlaceholderValue(contact.email) && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-amber-800" />
                      University Email
                    </span>
                    <button
                      onClick={() => copyToClipboard(contact.email, 'email')}
                      className="text-stone-400 hover:text-stone-700 p-1"
                      title="Copy email"
                    >
                      {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/80 font-mono text-xs text-stone-800 break-all">
                    {contact.email}
                  </div>
                </div>
              )}

              {/* Office Location */}
              {!isPlaceholderValue(contact.office) && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-amber-800" />
                      Office Location
                    </span>
                  </div>
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/80 font-mono text-xs text-stone-800">
                    {contact.office}
                  </div>
                </div>
              )}

              {/* Office Hours */}
              {!isPlaceholderValue(contact.hours) && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-800" />
                      Student Office Hours
                    </span>
                  </div>
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/80 font-mono text-xs text-stone-800 font-medium">
                    {contact.hours}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Department & Mailing Address Card */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200 shadow-2xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="font-serif font-bold text-stone-900 text-lg border-b border-stone-100 pb-3 flex items-center justify-between">
                <span>Departmental Mailing Address</span>
                <span className="text-xs font-sans font-normal text-stone-600">West Lafayette</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-1" />
                  <div className="text-xs space-y-1 text-stone-700">
                    <p className="font-semibold text-stone-900">Ning Zhou, Lecturer</p>
                    <p>Department of Computer Science</p>
                    <p>Purdue University</p>
                    <p>305 N. University Street</p>
                    <p>West Lafayette, IN 47907-2107</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <button
                    onClick={() => copyToClipboard(contact.departmentAddress, 'dept-address')}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-medium py-1 px-2.5 rounded bg-stone-100 border border-stone-200 transition-colors"
                  >
                    {copiedKey === 'dept-address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Department Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Profiles & Links */}
              {(!isPlaceholderValue(contact.directoryLink) || !isPlaceholderValue(contact.githubLink) || !isPlaceholderValue(contact.linkedinLink)) && (
                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                    Academic & Professional Profiles
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {!isPlaceholderValue(contact.directoryLink) && (
                      <a
                        href={contact.directoryLink.startsWith('http') ? contact.directoryLink : `https://${contact.directoryLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5 text-stone-500" />
                        <span>Purdue CS Faculty Directory</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                    {!isPlaceholderValue(contact.githubLink) && (
                      <a
                        href={contact.githubLink.startsWith('http') ? contact.githubLink : `https://${contact.githubLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-stone-500" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                    {!isPlaceholderValue(contact.linkedinLink) && (
                      <a
                        href={contact.linkedinLink.startsWith('http') ? contact.linkedinLink : `https://${contact.linkedinLink}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-stone-500" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3 text-stone-400" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-stone-100">
              <p className="text-[11px] text-stone-500 italic">
                * For confidential student advising or grade inquiries, please send messages through designated Purdue email accounts.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
