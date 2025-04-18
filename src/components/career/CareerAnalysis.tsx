import React from 'react';
import { CareerAnalysis as ICareerAnalysis } from '../../types';
import CareerPath from './CareerPath';

interface CareerAnalysisProps {
  analysis: ICareerAnalysis;
}

const CareerAnalysis: React.FC<CareerAnalysisProps> = ({ analysis }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Your Career Path Analysis
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Based on your skills, interests, and goals, here are personalized career paths that best match your profile.
        </p>
      </div>

      <div className="space-y-8">
        {analysis.paths.map((path) => (
          <CareerPath key={path.id} path={path} />
        ))}
      </div>
    </div>
  );
};

export default CareerAnalysis;