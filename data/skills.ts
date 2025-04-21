export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number;
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical Expertise",
    description: "Core programming languages and technologies I use to build robust, scalable applications.",
    skills: [
      { 
        name: "Python", 
        level: 70,
        description: "My primary language for AI development, data analysis, and backend services."
      },
      { 
        name: "TypeScript", 
        level: 85,
        description: "Used for building type-safe, maintainable frontend and backend applications."
      },
      { 
        name: "React", 
        level: 90,
        description: "My framework of choice for creating interactive, component-based user interfaces."
      },
      { 
        name: "HTML", 
        description: "Semantic markup for accessible, well-structured web applications."
      },
      { 
        name: "CSS", 
        description: "Styling with a focus on responsive design and modern techniques like Flexbox and Grid."
      },
      { 
        name: "JavaScript", 
        description: "Core language for web development, used across my full-stack projects."
      }
    ]
  },
  {
    title: "AI & Development",
    description: "Specialized skills in artificial intelligence and modern development practices.",
    skills: [
      { 
        name: "Machine Learning", 
        level: 92,
        description: "Designing and implementing ML models for various applications, with a focus on practical business solutions."
      },
      { 
        name: "Data Analysis", 
        description: "Extracting insights from complex datasets using statistical methods and visualization techniques."
      },
      { 
        name: "Full-Stack Development", 
        description: "End-to-end application development from database design to user interface."
      },
      { 
        name: "UI/UX Design", 
        level: 88,
        description: "Creating intuitive, accessible interfaces that balance aesthetics with functionality."
      }
    ]
  },
  {
    title: "Professional Skills",
    description: "Soft skills and approaches that enhance my technical capabilities.",
    skills: [
      { 
        name: "Architect Mindframe", 
        description: "Designing systems with scalability, maintainability, and future growth in mind."
      },
      { 
        name: "Rapid Adopter", 
        description: "Quickly learning and implementing new technologies and methodologies as needed."
      },
      { 
        name: "Proficient Soft Skills", 
        description: "Clear communication, collaboration, and translating technical concepts for non-technical stakeholders."
      },
      { 
        name: "Project Management", 
        description: "Planning, organizing, and executing projects efficiently to meet deadlines and requirements."
      }
    ]
  }
];
