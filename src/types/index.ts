export interface ResumeSection {
  name: string;
  status: 'good' | 'warning' | 'error';
  message: string;
}

export interface ResumeFeedbackItem {
  id: string;
  category: 'good' | 'warning' | 'error';
  message: string;
}

export interface ResumeSuggestion {
  id: string;
  category: 'action-verbs' | 'achievements' | 'formatting' | 'skills' | 'contact' | 'education';
  title: string;
  description: string;
}

export interface ResumeAnalysis {
  score: number;
  sections: ResumeSection[];
  feedback: ResumeFeedbackItem[];
  suggestions: ResumeSuggestion[];
  grammarIssues: number;
  spellingIssues: number;
  keywordScore: number;
  formatScore: number;
  contentScore: number;
  missingKeywords?: string[];
}

export interface Resume {
  file: File;
  preview?: string;
  analysis?: ResumeAnalysis;
  isAnalyzing: boolean;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  url: string;
  type: 'free' | 'paid';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  resources?: string[];
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  url: string;
  cost: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Milestone {
  duration: '3' | '6' | '12';
  title: string;
  description: string;
  goals: string[];
}

export interface SkillGap {
  category: string;
  missing: string[];
  resources: Course[];
}

export interface CareerPath {
  id: string;
  title: string;
  match: number;
  description: string;
  reasons: string[];
  requiredSkills: string[];
  skillGaps: SkillGap[];
  milestones: Milestone[];
  courses: Course[];
  projects: Project[];
  interviewTopics: string[];
  certifications: Certification[];
}

export interface UserProfile {
  skills: string[];
  interests: string[];
  education: {
    level: string;
    field: string;
  };
  goal: string;
}

export interface CareerAnalysis {
  paths: CareerPath[];
  userProfile: UserProfile;
}