import { AcademicProfile } from '../types';

export const initialProfileData: AcademicProfile = {
  name: "Ning Zhou",
  title: "Lecturer",
  department: "Department of Computer Science",
  institution: "Purdue University",
  degree: "M.S. in Computer Science",
  welcomeIntro: "Welcome to my academic homepage. I am a Lecturer in the Department of Computer Science at Purdue University, dedicated to teaching fundamental programming, fostering computational problem-solving, and mentoring the next generation of engineers and computer scientists.",
  aboutParagraphs: [
    "I have a master's degree in Computer Science. My professional background includes software development, business analysis, and college-level computer science instruction.",
    "At Purdue University, I serve as a Lecturer in the Department of Computer Science, teaching CS 15900 (Programming Applications for Engineers). I also serve as Adjunct Faculty at Ivy Tech Community College, where I teach courses including Website Development and Data Science.",
    "I enjoy helping students understand programming concepts and develop practical problem-solving skills. Whether students are writing their very first lines of code or applying computational techniques to engineering challenges, my goal is to provide a supportive and rigorous learning environment that builds lasting confidence."
  ],
  teaching: {
    currentCourseCode: "CS 15900 – C Programming",
    currentCourseName: "Programming Applications for Engineers",
    institution: "Purdue University",
    description: "CS 15900 introduces programming principles, algorithmic logic, and computational problem-solving using the C programming language, tailored specifically to students in engineering disciplines.",
    coreTopics: [
      "Structured programming fundamentals and control structures",
      "Function design, modularity, and scope",
      "Pointers, address arithmetic, and dynamic memory",
      "One-dimensional and multidimensional arrays",
      "Character handling, string manipulation, and standard I/O",
      "Algorithmic design and engineering application modeling"
    ],
    teachingInterests: [
      "Introductory Programming Pedagogy",
      "C Programming Language Mastery",
      "Systematic Problem Solving",
      "Building Strong Programming Foundations"
    ],
    semesterPlaceholder: "Fall 2026",
    officeHoursPlaceholder: "Monday noon–2:00 PM and Thursday noon–1:00 PM",
    syllabusPlaceholder: "https://purdue.simplesyllabus.com/en-US/doc/bgo06lbu7/WL-Fall-2026-CS-%28WL%29-15900-LE1-C-Programming?mode=view",
    courseLocationPlaceholder: "Lawson Computer Science & Engineering Lecture Halls"
  },
  professionalBackground: {
    title: "Professional Background",
    summary: "My professional background includes software development, business analysis, and college-level computer science instruction.",
    pillars: [
      {
        category: "College-Level Teaching & CS Education",
        description: "Instructional experience at the college and university level teaching programming and computer science courses. Lecturer in Computer Science at Purdue University and Adjunct Faculty at Ivy Tech Community College.",
        highlights: [
          "Lecturer, Department of Computer Science at Purdue University (CS 15900 – C Programming)",
          "Adjunct Faculty at Ivy Tech Community College, teaching courses including Website Development and Data Science",
          "Curriculum delivery, lab instruction, and student mentorship in foundational programming"
        ]
      },
      {
        category: "Software Development",
        description: "Hands-on professional experience developing software applications, writing clean maintainable code, and implementing software solutions.",
        highlights: [
          "Application development and clean code implementation",
          "Software debugging, code testing, and troubleshooting",
          "Translating functional specifications into reliable software implementations"
        ]
      },
      {
        category: "Business Analysis",
        description: "Experience examining operational and technical requirements, bridging stakeholder needs with computational capabilities, and formulating clear analytical specifications.",
        highlights: [
          "Requirements elicitation and workflow analysis",
          "Translating complex domain problems into structured technical tasks",
          "Data-driven evaluation and structured problem decomposition"
        ]
      }
    ]
  },
  interests: [
    {
      title: "Computer Science Education",
      description: "I am interested in how beginners learn programming, common student misconceptions, and effective approaches to computer science education.",
      tags: ["CS Education", "Pedagogy", "Active Learning", "Concept Mastery"]
    },
    {
      title: "Programming & Foundations",
      description: "I am interested in programming fundamentals, structured programming, core concepts in C, and approaches that help students transition from syntax mechanics to problem solving.",
      tags: ["C Programming", "Structured Programming", "Code Quality", "Problem Solving"]
    },
    {
      title: "Educational Technology",
      description: "I am interested in educational technologies, interactive coding tools, and instructional platforms that support student learning and engagement in the classroom.",
      tags: ["Instructional Tools", "Interactive Learning", "Educational Tech"]
    },
    {
      title: "AI to Support Teaching & Learning",
      description: "I am interested in exploring how artificial intelligence and tutoring tools can responsibly assist students in understanding programming concepts and support instructional workflows.",
      tags: ["AI in Education", "Learning Support", "Instructional Tools"]
    }
  ],
  contact: {
    email: "zhou1489@purdue.edu",
    office: "LWSN B116A",
    hours: "Monday noon–2:00 PM and Thursday noon–1:00 PM",
    departmentAddress: "Department of Computer Science, Purdue University, 305 N. University Street, West Lafayette, IN 47907",
    directoryLink: "https://www.cs.purdue.edu/people/faculty/zhou1489.html",
    githubLink: "https://github.com/ningzhou-tech",
    linkedinLink: ""
  }
};
