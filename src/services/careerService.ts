import { CareerAnalysis, CareerPath } from '../types';

// Mock data for demonstration
const mockCareerPaths: CareerPath[] = [
  {
    id: '1',
    title: 'Data Scientist',
    match: 85,
    description: 'A data scientist combines statistical analysis, machine learning, and business knowledge to extract insights from data.',
    reasons: [
      'Strong foundation in Python and SQL',
      'Interest in data analysis and AI',
      'Relevant educational background in Computer Science',
      'Clear goal alignment with the field'
    ],
    requiredSkills: [
      'Python',
      'SQL',
      'Machine Learning',
      'Statistics',
      'Data Visualization',
      'Big Data Technologies'
    ],
    skillGaps: [
      {
        category: 'Machine Learning',
        missing: ['TensorFlow', 'scikit-learn', 'Neural Networks'],
        resources: [
          {
            id: '1',
            title: 'Machine Learning Specialization',
            provider: 'Coursera',
            url: 'https://www.coursera.org/specializations/machine-learning-introduction',
            type: 'paid',
            duration: '3 months',
            level: 'intermediate'
          }
        ]
      }
    ],
    milestones: [
      {
        duration: '3',
        title: 'Foundation Building',
        description: 'Build core ML skills and complete basic projects',
        goals: [
          'Complete ML fundamentals course',
          'Learn scikit-learn basics',
          'Build 2 supervised learning projects'
        ]
      },
      {
        duration: '6',
        title: 'Advanced Techniques',
        description: 'Master advanced ML concepts and tools',
        goals: [
          'Learn deep learning fundamentals',
          'Complete advanced ML projects',
          'Start building portfolio'
        ]
      },
      {
        duration: '12',
        title: 'Professional Ready',
        description: 'Prepare for professional roles',
        goals: [
          'Complete capstone projects',
          'Obtain relevant certification',
          'Start job applications'
        ]
      }
    ],
    courses: [
      {
        id: '1',
        title: 'Machine Learning Specialization',
        provider: 'Coursera',
        url: 'https://www.coursera.org/specializations/machine-learning-introduction',
        type: 'paid',
        duration: '3 months',
        level: 'intermediate'
      },
      {
        id: '2',
        title: 'Statistics for Data Science',
        provider: 'edX',
        url: 'https://www.edx.org/learn/statistics',
        type: 'free',
        duration: '2 months',
        level: 'beginner'
      }
    ],
    projects: [
      {
        id: '1',
        title: 'Customer Churn Prediction',
        description: 'Build a model to predict customer churn using historical customer data',
        skills: ['Python', 'scikit-learn', 'Data Analysis'],
        difficulty: 'intermediate',
        resources: [
          'https://www.kaggle.com/datasets/blastchar/telco-customer-churn'
        ]
      },
      {
        id: '2',
        title: 'Image Classification System',
        description: 'Create an image classification system using deep learning',
        skills: ['Python', 'TensorFlow', 'CNN'],
        difficulty: 'advanced'
      }
    ],
    interviewTopics: [
      'Machine Learning Algorithms',
      'Statistical Analysis',
      'Python Programming',
      'SQL and Database Concepts',
      'Data Structures and Algorithms',
      'Deep Learning Fundamentals'
    ],
    certifications: [
      {
        id: '1',
        name: 'TensorFlow Developer Certificate',
        provider: 'Google',
        url: 'https://www.tensorflow.org/certificate',
        cost: '$100',
        duration: '3 months',
        level: 'intermediate'
      },
      {
        id: '2',
        name: 'AWS Machine Learning Specialty',
        provider: 'Amazon',
        url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
        cost: '$300',
        duration: '6 months',
        level: 'advanced'
      }
    ]
  }
];

export const analyzeCareerPath = async (
  skills: string[],
  interests: string[],
  education: { level: string; field: string },
  goal: string
): Promise<CareerAnalysis> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  return {
    paths: mockCareerPaths,
    userProfile: {
      skills,
      interests,
      education,
      goal
    }
  };
};