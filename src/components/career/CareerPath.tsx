import React from 'react';
import { Award, BookOpen, Calendar, CheckCircle, FileCode, GraduationCap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { CareerPath as ICareerPath } from '../../types';
import * as Progress from '@radix-ui/react-progress';

interface CareerPathProps {
  path: ICareerPath;
}

const CareerPath: React.FC<CareerPathProps> = ({ path }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{path.title}</CardTitle>
            <div className="flex items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">Match:</span>
              <div className="relative w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <Progress.Root value={path.match} className="w-full h-full">
                  <Progress.Indicator
                    className="h-full bg-green-500 transition-transform duration-500"
                    style={{ transform: `translateX(-${100 - path.match}%)` }}
                  />
                </Progress.Root>
              </div>
              <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">
                {path.match}%
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {path.description}
          </p>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Why This Fits You
              </h3>
              <ul className="space-y-2">
                {path.reasons.map((reason, index) => (
                  <li key={index} className="text-slate-600 dark:text-slate-400 flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2" />
                    {reason}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-500" />
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {path.requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                Learning Roadmap
              </h3>
              <div className="space-y-4">
                {path.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"
                  >
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      {milestone.duration} Month Goal: {milestone.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {milestone.description}
                    </p>
                    <ul className="space-y-2">
                      {milestone.goals.map((goal, goalIndex) => (
                        <li
                          key={goalIndex}
                          className="text-slate-600 dark:text-slate-400 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-teal-500" />
                Recommended Courses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {path.courses.map((course) => (
                  <a
                    key={course.id}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      {course.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">
                        {course.provider}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        course.type === 'free'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                      }`}>
                        {course.type}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <FileCode className="h-5 w-5 mr-2 text-indigo-500" />
                Project Ideas
              </h3>
              <div className="space-y-4">
                {path.projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-slate-200 dark:border-slate-700 rounded-lg p-4"
                  >
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-orange-500" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {path.certifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {cert.provider}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">
                        {cert.duration}
                      </span>
                      <span className="text-orange-600 dark:text-orange-400">
                        {cert.cost}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Interview Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {path.interviewTopics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerPath;