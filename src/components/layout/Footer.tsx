import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              AI Resume Analyzer
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Enhance your resume with AI-powered analysis and recommendations to stand out to employers and applicant tracking systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  Resume Writing Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  ATS Optimization Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  Industry Keywords
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} AI Resume Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;