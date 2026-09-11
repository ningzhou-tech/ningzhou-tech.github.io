export interface AcademicProfile {
  name: string;
  title: string;
  department: string;
  institution: string;
  degree: string;
  welcomeIntro: string;
  aboutParagraphs: string[];
  teaching: {
    currentCourseCode: string;
    currentCourseName: string;
    institution: string;
    description: string;
    coreTopics: string[];
    teachingInterests: string[];
    semesterPlaceholder: string;
    officeHoursPlaceholder: string;
    syllabusPlaceholder: string;
    courseLocationPlaceholder: string;
  };
  professionalBackground: {
    title: string;
    summary: string;
    pillars: {
      category: string;
      description: string;
      highlights: string[];
      timelineNote?: string;
    }[];
  };
  interests: {
    title: string;
    description: string;
    tags: string[];
  }[];
  contact: {
    email: string;
    office: string;
    hours: string;
    departmentAddress: string;
    campusMail?: string;
    directoryLink: string;
    githubLink: string;
    linkedinLink: string;
  };
}

export type ThemePalette = 'purdue-gold' | 'classic-navy' | 'forest-slate' | 'charcoal';
