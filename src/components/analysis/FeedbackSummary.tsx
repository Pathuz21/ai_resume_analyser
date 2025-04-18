import React, { useState } from 'react';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { ResumeFeedbackItem } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useResume } from '../../context/ResumeContext';
import Badge from '../ui/Badge';

const FeedbackSummary: React.FC = () => {
  const { resume } = useResume();
  const [activeTab, setActiveTab] = useState<'all' | 'good' | 'warning' | 'error'>('all');
  
  if (!resume?.analysis) return null;
  
  const { feedback, grammarIssues, spellingIssues } = resume.analysis;
  
  const filteredFeedback = activeTab === 'all' 
    ? feedback 
    : feedback.filter(item => item.category === activeTab);
  
  const feedbackCounts = {
    good: feedback.filter(item => item.category === 'good').length,
    warning: feedback.filter(item => item.category === 'warning').length,
    error: feedback.filter(item => item.category === 'error').length
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-1 px-3 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All ({feedback.length})
          </button>
          <button
            onClick={() => setActiveTab('good')}
            className={`py-1 px-3 rounded-full text-sm font-medium transition-colors flex items-center ${
              activeTab === 'good'
                ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                : 'text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20'
            }`}
          >
            <CheckCircle className="h-3 w-3 mr-1" />
            Good ({feedbackCounts.good})
          </button>
          <button
            onClick={() => setActiveTab('warning')}
            className={`py-1 px-3 rounded-full text-sm font-medium transition-colors flex items-center ${
              activeTab === 'warning'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                : 'text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
            }`}
          >
            <AlertCircle className="h-3 w-3 mr-1" />
            Needs Improvement ({feedbackCounts.warning})
          </button>
          <button
            onClick={() => setActiveTab('error')}
            className={`py-1 px-3 rounded-full text-sm font-medium transition-colors flex items-center ${
              activeTab === 'error'
                ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
            }`}
          >
            <XCircle className="h-3 w-3 mr-1" />
            Missing/Critical ({feedbackCounts.error})
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">Grammar Issues:</span>
            <Badge variant={grammarIssues > 5 ? "error" : grammarIssues > 2 ? "warning" : "success"}>
              {grammarIssues}
            </Badge>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 flex items-center">
            <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">Spelling Issues:</span>
            <Badge variant={spellingIssues > 5 ? "error" : spellingIssues > 2 ? "warning" : "success"}>
              {spellingIssues}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          {filteredFeedback.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400 text-center py-6">
              No feedback items in this category
            </p>
          ) : (
            filteredFeedback.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface FeedbackItemProps {
  item: ResumeFeedbackItem;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
  const { category, message } = item;
  
  const getIcon = () => {
    switch (category) {
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
  
  return (
    <div className="flex items-start p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
      <div className="mr-3">
        {getIcon()}
      </div>
      <div>
        <p className="text-slate-700 dark:text-slate-300">{message}</p>
      </div>
    </div>
  );
};

export default FeedbackSummary;