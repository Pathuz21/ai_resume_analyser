import React from 'react';
import { Lightbulb, TrendingUp, FileCode, Hammer, UserCircle, GraduationCap } from 'lucide-react';
import { ResumeSuggestion } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useResume } from '../../context/ResumeContext';

const SuggestionsList: React.FC = () => {
  const { resume } = useResume();
  
  if (!resume?.analysis) return null;
  
  const { suggestions } = resume.analysis;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <SuggestionItem key={suggestion.id} suggestion={suggestion} />
          ))}
          
          {resume.analysis.missingKeywords && resume.analysis.missingKeywords.length > 0 && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 flex items-center">
                <Lightbulb className="h-4 w-4 mr-2" />
                Consider adding these keywords
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.analysis.missingKeywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface SuggestionItemProps {
  suggestion: ResumeSuggestion;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ suggestion }) => {
  const { category, title, description } = suggestion;
  
  const getCategoryIcon = () => {
    switch (category) {
      case 'action-verbs':
        return <Lightbulb className="h-5 w-5 text-purple-500" />;
      case 'achievements':
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case 'formatting':
        return <FileCode className="h-5 w-5 text-teal-500" />;
      case 'skills':
        return <Hammer className="h-5 w-5 text-orange-500" />;
      case 'contact':
        return <UserCircle className="h-5 w-5 text-indigo-500" />;
      case 'education':
        return <GraduationCap className="h-5 w-5 text-green-500" />;
      default:
        return <Lightbulb className="h-5 w-5 text-slate-500" />;
    }
  };
  
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="bg-slate-50 dark:bg-slate-800 px-4 py-3 flex items-center">
        <div className="mr-3">
          {getCategoryIcon()}
        </div>
        <h4 className="font-medium text-slate-900 dark:text-white">
          {title}
        </h4>
      </div>
      <div className="p-4">
        <p className="text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SuggestionsList;