import React, { useState } from 'react';
import { UserCircle, BookOpen, Target, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';

interface CareerFormProps {
  onSubmit: (data: {
    skills: string[];
    interests: string[];
    education: { level: string; field: string };
    goal: string;
  }) => void;
  isLoading?: boolean;
}

const CareerForm: React.FC<CareerFormProps> = ({ onSubmit, isLoading }) => {
  const [skills, setSkills] = useState<string>('');
  const [interests, setInterests] = useState<string>('');
  const [educationLevel, setEducationLevel] = useState<string>('');
  const [educationField, setEducationField] = useState<string>('');
  const [goal, setGoal] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      skills: skills.split(',').map(s => s.trim()),
      interests: interests.split(',').map(i => i.trim()),
      education: {
        level: educationLevel,
        field: educationField
      },
      goal
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Career Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Code className="h-4 w-4 mr-2" />
              Skills (comma-separated)
            </label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., Python, SQL, JavaScript"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Target className="h-4 w-4 mr-2" />
              Interests (comma-separated)
            </label>
            <input
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., Data Analysis, Machine Learning, Web Development"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Education Level
              </label>
              <input
                type="text"
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                placeholder="e.g., Bachelor's, Master's"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Field of Study
              </label>
              <input
                type="text"
                value={educationField}
                onChange={(e) => setEducationField(e.target.value)}
                placeholder="e.g., Computer Science"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <UserCircle className="h-4 w-4 mr-2" />
              Career Goal
            </label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Describe your career goal..."
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white h-24"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            Analyze Career Path
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CareerForm;