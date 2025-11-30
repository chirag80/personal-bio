import { ExperienceItem, SkillCategory, CertificationItem, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Chirag Patel",
  title: "Software Solutions Specialist",
  location: "Monroe Township, NJ",
  summary: "Senior Software Engineer with over 15 years of experience. Currently serving as a Principal Engineer at the New York Fed, specializing in modern UI architectures (React, Vue, Angular) and exploring the frontiers of AI with agentic frameworks. Passionate about building scalable applications and leveraging cloud technologies.",
  email: "chiragpaatel1@gmail.com",
  linkedin: "https://www.linkedin.com/in/chiraglpatel",
  // Profile image
  image: "https://media.licdn.com/dms/image/v2/D4E03AQFLF8Z5chxBBw/profile-displayphoto-crop_800_800/B4EZoRaI2lIQAI-/0/1761228656914?e=1766016000&v=beta&t=yaYG0aeyGlyI8Wur7oAL0dJS71wKbks_xIbHJ7cpdw4"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Federal Reserve Bank of New York",
    role: "Software Solutions Specialist",
    period: "2021 - Present",
    description: "Working on UI modernization initiatives using React, Vue, and Angular. Contributing to architectural decisions, building reusable UI components, improving performance, and supporting cloud-migration efforts. Exploring AI integration through Python-based agentic frameworks and RAG workflows."
  },
  {
    company: "AT&T",
    role: "Senior Software Engineer",
    period: "2016 - 2021",
    description: "Designed and maintained enterprise web applications. Contributed to frontend architecture, improved developer workflows, and supported the evolution of CI/CD pipelines and cloud migration efforts."
  },
  {
    company: "Deloitte",
    role: "Software Consultant",
    period: "2011 - 2016",
    description: "Developed full-stack solutions for enterprise clients, collaborating across frontend, backend, and DevOps teams."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "code",
    skills: ["React.js / Angular / Vue.js", "JavaScript / TypeScript", "Material UI / Bootstrap / Vite", "HTML5/CSS3"]
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: ["Python", "LangChain / LangGraph / CrewAI", "RAG & Agentic Workflows", "OpenAI / Anthropic / Amazon Bedrock"]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Jenkins", "Git", "CI/CD Pipelines", "Docker"]
  },
  {
    title: "Backend & Tools",
    icon: "server",
    skills: ["Java", "C# & .NET", "SQL Server", "REST APIs & Microservices", "NodeJs"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/chiraglpatel",
    icon: "linkedin"
  }
];