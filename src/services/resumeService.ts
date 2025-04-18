import { ResumeAnalysis } from '../types';

// This is a mock service that mimics analyzing a resume
// In a real application, this would connect to a backend API
export const analyzeResume = async (file: File): Promise<ResumeAnalysis> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate random score for demo purposes
  const score = Math.floor(Math.random() * 30) + 60;
  
  // Mock analysis result
  const analysis: ResumeAnalysis = {
    score,
    grammarIssues: Math.floor(Math.random() * 8),
    spellingIssues: Math.floor(Math.random() * 6),
    keywordScore: Math.floor(Math.random() * 40) + 60,
    formatScore: Math.floor(Math.random() * 30) + 70,
    contentScore: Math.floor(Math.random() * 25) + 65,
    
    sections: [
      {
        name: 'Contact Information',
        status: 'good',
        message: 'All essential contact details are present and well-formatted.'
      },
      {
        name: 'Professional Summary',
        status: score > 75 ? 'good' : 'warning',
        message: score > 75 
          ? 'Strong professional summary that highlights your value proposition.'
          : 'Your summary could be more impactful with specific achievements.'
      },
      {
        name: 'Work Experience',
        status: score > 70 ? 'good' : 'warning',
        message: score > 70
          ? 'Work experience is well-structured with quantifiable achievements.'
          : 'Consider adding more measurable results to your experience section.'
      },
      {
        name: 'Education',
        status: 'good',
        message: 'Education section is properly formatted and complete.'
      },
      {
        name: 'Skills',
        status: score > 65 ? 'warning' : 'error',
        message: score > 65
          ? 'Skills section could use more industry-specific keywords.'
          : 'Skills section is missing critical keywords for ATS optimization.'
      },
    ],
    
    feedback: [
      {
        id: '1',
        category: 'good',
        message: 'Consistent formatting throughout the resume.'
      },
      {
        id: '2',
        category: 'good',
        message: 'Appropriate length for your experience level.'
      },
      {
        id: '3',
        category: score > 70 ? 'good' : 'warning',
        message: 'Use of action verbs in experience descriptions.'
      },
      {
        id: '4',
        category: score > 75 ? 'warning' : 'error',
        message: 'Limited use of quantifiable achievements.'
      },
      {
        id: '5',
        category: 'warning',
        message: 'Some industry-specific keywords are missing.'
      },
      {
        id: '6',
        category: score > 65 ? 'warning' : 'error',
        message: 'Technical skills section could be more comprehensive.'
      },
      {
        id: '7',
        category: score < 70 ? 'error' : 'warning',
        message: 'ATS compatibility could be improved with better keyword optimization.'
      }
    ],
    
    suggestions: [
      {
        id: '1',
        category: 'action-verbs',
        title: 'Use stronger action verbs',
        description: 'Replace passive language with powerful action verbs like "spearheaded," "executed," "implemented," or "orchestrated" to make your achievements more impactful.'
      },
      {
        id: '2',
        category: 'achievements',
        title: 'Quantify your achievements',
        description: 'Add specific metrics and numbers to demonstrate your impact. For example, "Increased sales by 25%" instead of "Increased sales."'
      },
      {
        id: '3',
        category: 'formatting',
        title: 'Improve section ordering',
        description: 'Place your most impressive and relevant sections first. For your background, work experience should appear before education.'
      },
      {
        id: '4',
        category: 'skills',
        title: 'Enhance skills section',
        description: 'Add more industry-specific technical skills and keywords that align with job descriptions in your target role.'
      },
      {
        id: '5',
        category: 'formatting',
        title: 'Use consistent bullet formatting',
        description: 'Ensure all bullet points follow the same grammatical structure and punctuation pattern.'
      }
    ],
    
    missingKeywords: ['project management', 'agile methodology', 'cross-functional', 'stakeholder management']
  };
  
  return analysis;
};