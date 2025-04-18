import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ResumeScore from './ResumeScore';
import SectionAnalysis from './SectionAnalysis';
import FeedbackSummary from './FeedbackSummary';
import SuggestionsList from './SuggestionsList';

const AnalysisResults: React.FC = () => {
  const { resume } = useResume();
  
  if (!resume?.analysis) return null;
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Resume Analysis Results
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ResumeScore />
        <SectionAnalysis />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FeedbackSummary />
        <SuggestionsList />
      </div>
    </div>
  );
};

export default AnalysisResults;