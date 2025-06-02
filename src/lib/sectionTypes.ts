interface ProjectItem {
  imagedir: string;
  images: string[];
  projectTitle: string;
  date: string;
  description: string;
  repo: string;
  deployment: string;
  techStack: string[];
}

export interface Projects {
  title: string;
  projects: ProjectItem[];
}

export interface Hero {
  name: string;
  description: string;
  scrollIndicatorText: string;
  greeting: string;
  resumeLink: string;
  connectLink: string;
}

// About

interface AboutDetail {
  label: string;
  value: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  major: string;
}

interface Quality {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface About {
  title: string;
  subtitle: string;
  bio: string[];
  details: AboutDetail[];
  education: EducationItem[];
  qualities: Quality[];
}

// SKILLS
interface TechStackItem {
  domain: string;
  skills: string[];
}

export interface Skills {
  title: string;
  description: string; // fixed typo from "descritpion"
  techstack: TechStackItem[];
}

//Coding Profiles
interface BaseCodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  rating: number;
  maxRating: number;
  rank: number;
  globalRank: number;
  problemSolved: number;
  contests: number;
  title: string;
}

interface TopRankedProfile extends BaseCodingProfile {
  top: number;
  stars?: undefined;
}

interface NormalProfile extends BaseCodingProfile {
  top?: undefined;
  stars?: undefined;
}

interface StarRatedProfile extends BaseCodingProfile {
  stars: number;
  top?: undefined;
}

export type CodingProfile = TopRankedProfile | NormalProfile | StarRatedProfile;


// SocialS
export interface Social{
    platform: string;
    link: string;
}
