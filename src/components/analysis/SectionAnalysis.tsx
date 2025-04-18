import React from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { ResumeSection } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useResume } from '../../context/ResumeContext';

const SectionAnalysis: React.FC = () => {
  const { resume } = useResume();
  
  if (!resume?.analysis) return null;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Section Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resume.analysis.sections.map((section, index) => (
            <SectionItem 
              key={index}
              section={section}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface SectionItemProps {
  section: ResumeSection;
}

const SectionItem: React.FC<SectionItemProps> = ({ section }) => {
  const { name, status, message } = section;
  
  const getIcon = () => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />;
      default:
        return null;
    }
  };
  
  const getBgColor = () => {
    switch (status) {
      case 'good':
        return 'bg-green-50 dark:bg-green-900/20';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20';
      default:
        return 'bg-slate-50 dark:bg-slate-800';
    }
  };
  
  return (
    <div className={`rounded-lg p-4 ${getBgColor()}`}>
      <div className="flex items-start">
        <div className="mr-3 mt-0.5">
          {getIcon()}
        </div>
        <div>
          <h4 className="font-medium text-slate-900 dark:text-white text-sm">
            {name}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAnalysis;