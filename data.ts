export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // Level out of 100 for descriptive animated progress bars
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  techUsed: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string[];
  githubUrl: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export const USER_PROFILE = {
  name: "Umar A",
  role: "Aspiring AI Engineer | Data Analytics Student",
  tagline: "Turning Data Into Insights & Building Intelligent Solutions",
  aboutSummary:
    "Detail-oriented Data Analytics student with hands-on experience in Power BI, SQL, Excel, Python, and Microsoft Azure. Passionate about AI, Data Science, and building intelligent solutions using real-world datasets. Skilled in dashboard creation, data visualization, cloud fundamentals, and problem-solving.",
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "Dhanalakshmi Srinivasan Engineering College, Perambalur",
    period: "2023 – 2027",
    score: "CGPA: 8.0 / 10.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "LBK Wisdom Matriculation Higher Secondary School",
    period: "2022 – 2023",
    score: "Score: 70%",
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Data Analytics",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Excel", level: 88 },
      { name: "Data Cleaning", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "Dashboard Creation", level: 92 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 82 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Microsoft Azure", level: 80 },
      { name: "Jupyter Notebook", level: 88 },
      { name: "GitHub", level: 85 },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Microsoft Azure Intern",
    company: "Microsoft Elevate & AICTE",
    period: "Jan 2026 – Feb 2026",
    points: [
      "Learned cloud computing fundamentals and deployment concepts",
      "Worked extensively with Azure Core Services to model cloud configurations",
      "Gained key understanding of managing virtual machines, networking structures, and storage solutions",
    ],
    techUsed: ["Microsoft Azure", "Cloud Architecture", "VM Storage"],
  },
  {
    role: "Data Analytics Intern",
    company: "Internship Studio",
    period: "Oct 2025 – Jan 2026",
    points: [
      "Worked with Excel, SQL, Python, and Power BI on real-world datasets",
      "Cleaned, engineered, and analyzed large datasets to drive accuracy",
      "Created highly interactive, stakeholder-ready dashboards",
      "Generated actionable business insights to streamline performance metrics",
    ],
    techUsed: ["Excel", "SQL", "Python", "Power BI"],
  },
  {
    role: "Python Programming Intern",
    company: "InternPe",
    period: "Mar 2025 – Apr 2025",
    points: [
      "Worked on full-scope Python-based automation tasks",
      "Built programmatic solutions and scripts to resolve algorithmic problems",
      "Improved object-oriented programming metrics and overall debugging efficiency",
      "Learned essential web backend mechanics and server-side logic",
    ],
    techUsed: ["Python", "Automation", "OOP", "Backend Basics"],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Netflix Data Analytics Dashboard",
    tech: ["Power BI", "Excel", "SQL"],
    description: [
      "Analyzed an extensive database of 8,000+ Netflix movies and TV shows to uncover hidden content behaviors.",
      "Cleaned and transformed noisy tabular structural records with Power Query, aligning ratings, genres, and release dynamics.",
      "Created highly aesthetic, user-interactive visual workspaces depicting regional trends and target demographic splits.",
      "Engineered KPI metrics emphasizing genre clusters, peak release years, and country of origin distributions.",
    ],
    githubUrl: "https://github.com/Umar2410/Data-Analysis_dashboard",
  },
  {
    title: "AI vs Real Image Detector",
    tech: ["Python", "NumPy", "Matplotlib", "PIL"],
    description: [
      "Engineered an automated script targeting pixel density and patterns to class-evaluate AI-generated versus authentic photographs.",
      "Implemented raw mathematical image processing techniques, discarding dependencies on heavy third-party framework wrappers.",
      "Developed custom visualization graphs mapping channel intensity distributions, error levels, and metadata analysis.",
      "Successfully ran and displayed evaluation stages securely from a modular Jupyter Notebook framework.",
    ],
    githubUrl: "https://github.com/Umar2410/AICTE_MICROSOFT_INTERNSHIP_UMAR_A",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: "Microsoft Azure Internship Completion",
    provider: "AICTE",
  },
  {
    name: "Python Programming Internship",
    provider: "InternPe",
  },
  {
    name: "Data Analytics Internship",
    provider: "Studio Internship",
  },
  {
    name: "Data Science & Analytics",
    provider: "HP LIFE",
  },
  {
    name: "Data Analytics Job Simulation",
    provider: "Deloitte Forage",
  },
  {
    name: "Power BI Workshop",
    provider: "OfficeMaster",
  },
];

export const CONTACT_DATA: ContactInfo = {
  phone: "+91 7871610278",
  email: "umar7471346@gmail.com",
  location: "Labbaikudikadu, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/umar-74526b2a2/",
  github: "https://github.com/Umar2410",
};

export const STATISTICS_DATA = [
  { count: "3+", label: "Professional Internships", suffix: "" },
  { count: "10+", label: "Analytical Tools Mastered", suffix: "" },
  { count: "8.0", label: "Academics B.Tech CGPA", suffix: "/10" },
  { count: "8000+", label: "Data Records Analyzed", suffix: "" },
];
