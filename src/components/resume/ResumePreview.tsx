import React from 'react';
import { FileText, FileWarning, Loader2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';

const ResumePreview: React.FC = () => {
  const { resume, analyzeResumeFile, resetResume, isAnalyzing } = useResume();
  
  if (!resume) return null;
  
  const fileName = resume.file.name;
  const fileSize = (resume.file.size / 1024 / 1024).toFixed(2);
  const fileType = resume.file.type;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            Resume Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex flex-col">
              <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg mb-4">
                <div className="flex items-center justify-center h-32 bg-slate-100 dark:bg-slate-800 rounded mb-4">
                  <FileText className="h-16 w-16 text-slate-400 dark:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-900 dark:text-white truncate">
                    {fileName}
                  </p>
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{fileType.split('/')[1].toUpperCase()}</span>
                    <span>{fileSize} MB</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mt-auto">
                <Button 
                  onClick={analyzeResumeFile} 
                  className="w-full"
                  isLoading={isAnalyzing}
                  disabled={isAnalyzing || resume.analysis !== undefined}
                >
                  {resume.analysis ? 'Already Analyzed' : 'Analyze Resume'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetResume}
                  className="w-full"
                >
                  Upload Different Resume
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="h-96 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden relative">
                {!resume.preview ? (
                  <div className="flex items-center justify-center h-full bg-slate-100 dark:bg-slate-800">
                    <FileWarning className="h-16 w-16 text-yellow-500" />
                    <p className="text-slate-500 dark:text-slate-400 mt-4">
                      Preview not available
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-100 dark:bg-slate-800">
                    <p className="text-slate-500 dark:text-slate-400">
                      Preview will be displayed here
                    </p>
                  </div>
                )}
                
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                      <p>Analyzing your resume...</p>
                      <p className="text-sm mt-2 text-slate-300">This may take a few moments</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between text-sm text-slate-500 dark:text-slate-400">
          <p>
            For best results, ensure your resume has clearly defined sections.
          </p>
          <p className="mt-2 sm:mt-0">
            PDF format is recommended for ATS compatibility.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResumePreview;