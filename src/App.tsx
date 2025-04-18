import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ResumeProvider } from './context/ResumeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ResumeUpload from './components/resume/ResumeUpload';
import ResumePreview from './components/resume/ResumePreview';
import AnalysisResults from './components/analysis/AnalysisResults';
import CareerForm from './components/career/CareerForm';
import CareerAnalysis from './components/career/CareerAnalysis';
import { useResume } from './context/ResumeContext';
import { analyzeCareerPath } from './services/careerService';
import { CareerAnalysis as ICareerAnalysis } from './types';
import * as Tabs from '@radix-ui/react-tabs';

const AppContent: React.FC = () => {
  const { resume } = useResume();
  const [careerAnalysis, setCareerAnalysis] = useState<ICareerAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCareerFormSubmit = async (data: {
    skills: string[];
    interests: string[];
    education: { level: string; field: string };
    goal: string;
  }) => {
    setIsAnalyzing(true);
    try {
      const analysis = await analyzeCareerPath(
        data.skills,
        data.interests,
        data.education,
        data.goal
      );
      setCareerAnalysis(analysis);
    } catch (error) {
      console.error('Error analyzing career path:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs.Root defaultValue="resume" className="space-y-6">
          <Tabs.List className="flex space-x-2 border-b border-slate-200 dark:border-slate-700">
            <Tabs.Trigger
              value="resume"
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400"
            >
              Resume Analysis
            </Tabs.Trigger>
            <Tabs.Trigger
              value="career"
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400"
            >
              Career Path
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="resume" className="focus:outline-none">
            {!resume && <ResumeUpload />}
            {resume && !resume.analysis && <ResumePreview />}
            {resume?.analysis && <AnalysisResults />}
          </Tabs.Content>

          <Tabs.Content value="career" className="focus:outline-none">
            <div className="max-w-4xl mx-auto">
              {!careerAnalysis ? (
                <CareerForm onSubmit={handleCareerFormSubmit} isLoading={isAnalyzing} />
              ) : (
                <CareerAnalysis analysis={careerAnalysis} />
              )}
            
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </ThemeProvider>
  );
}

export default App;