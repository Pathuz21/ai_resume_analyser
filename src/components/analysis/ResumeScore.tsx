import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useResume } from '../../context/ResumeContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const ResumeScore: React.FC = () => {
  const { resume } = useResume();
  
  if (!resume?.analysis) return null;
  
  const { score } = resume.analysis;
  
  // Determine color based on score
  const getScoreColor = () => {
    if (score >= 80) return '#10B981'; // green
    if (score >= 60) return '#F59E0B'; // yellow/amber
    return '#EF4444'; // red
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Score</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-36 h-36 mb-4">
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: getScoreColor(),
              textColor: getScoreColor(),
              trailColor: '#E2E8F0',
            })}
          />
        </div>
        
        <div className="text-center mt-4">
          <p className="text-slate-600 dark:text-slate-400">
            {score >= 80 
              ? 'Excellent! Your resume is well-optimized.'
              : score >= 60 
                ? 'Good start, but there\'s room for improvement.'
                : 'Your resume needs significant improvements.'}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 w-full mt-6">
          <ScoreCard 
            title="Keywords" 
            score={resume.analysis.keywordScore} 
          />
          <ScoreCard 
            title="Formatting" 
            score={resume.analysis.formatScore} 
          />
          <ScoreCard 
            title="Content" 
            score={resume.analysis.contentScore} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface ScoreCardProps {
  title: string;
  score: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, score }) => {
  const getColor = () => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };
  
  return (
    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 text-center">
      <p className="text-sm text-slate-600 dark:text-slate-400">{title}</p>
      <p className={`text-lg font-bold ${getColor()}`}>{score}%</p>
    </div>
  );
};

export default ResumeScore;