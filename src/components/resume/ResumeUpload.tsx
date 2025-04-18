import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { useResume } from '../../context/ResumeContext';
import { Card, CardContent } from '../ui/Card';

const ResumeUpload: React.FC = () => {
  const { setResumeFile } = useResume();
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setResumeFile(file);
    }
  }, [setResumeFile]);
  
  const { 
    getRootProps, 
    getInputProps, 
    isDragActive,
    isDragReject
  } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    multiple: false
  });
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Optimize Your Resume with AI
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Upload your resume and get instant AI-powered feedback on formatting, content, and ATS compatibility.
        </p>
      </div>
      
      <Card>
        <CardContent className="p-8">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-700'}
              ${isDragReject ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}
              hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10
            `}
          >
            <input {...getInputProps()} />
            
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                {isDragActive ? (
                  <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Upload className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                  {isDragActive
                    ? 'Drop your resume here'
                    : 'Drag & drop your resume here'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {isDragReject ? (
                    <span className="flex items-center justify-center text-red-600 dark:text-red-400">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Only PDF and DOCX files are supported
                    </span>
                  ) : (
                    'Upload your resume in PDF or DOCX format'
                  )}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                type="button"
                onClick={(e) => e.stopPropagation()}
              >
                Select File
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              By uploading your resume, you agree to our 
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">Terms of Service</a>
              and
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Privacy Policy</a>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeUpload;