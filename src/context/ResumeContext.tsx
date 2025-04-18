import React, { createContext, useContext, useState } from 'react';
import { Resume } from '../types';
import { analyzeResume } from '../services/resumeService';

interface ResumeContextType {
  resume: Resume | null;
  setResumeFile: (file: File) => void;
  analyzeResumeFile: () => Promise<void>;
  resetResume: () => void;
  isAnalyzing: boolean;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resume, setResume] = useState<Resume | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const setResumeFile = (file: File) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setResume({
        file,
        preview: reader.result as string,
        isAnalyzing: false
      });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const analyzeResumeFile = async () => {
    if (!resume) return;
    
    setIsAnalyzing(true);
    
    try {
      // Update the resume state to show it's analyzing
      setResume(prev => 
        prev ? { ...prev, isAnalyzing: true } : null
      );
      
      // Call the mock analyze service
      const analysis = await analyzeResume(resume.file);
      
      // Update the resume with the analysis results
      setResume(prev => 
        prev ? { ...prev, analysis, isAnalyzing: false } : null
      );
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetResume = () => {
    setResume(null);
  };

  return (
    <ResumeContext.Provider value={{ 
      resume, 
      setResumeFile, 
      analyzeResumeFile, 
      resetResume,
      isAnalyzing 
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};