import React from 'react';
import { Clock, Users, Award } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import { motion } from 'framer-motion';

const CourseCard = ({ course, onClick }) => {
  return (
    <Card hover onClick={onClick} className="h-full flex flex-col">
      <div className="relative h-36 rounded-t-lg overflow-hidden -mx-6 -mt-6">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 15 }}
            className="absolute top-3 right-3"
          >
            <div className="bg-white rounded-full p-1 shadow-md">
              <Award className="w-5 h-5 text-accent-500" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex-1 flex flex-col pt-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {course.skillsGained.slice(0, 2).map((skill, index) => (
            <Badge key={index} variant="primary" label={skill} />
          ))}
          {course.skillsGained.length > 2 && (
            <Badge variant="secondary" label={`+${course.skillsGained.length - 2} more`} />
          )}
        </div>

        <h3 className="text-lg font-medium mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{course.enrolledCount} enrolled</span>
            </div>
          </div>

          {course.progress !== undefined && (
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">Progress</span>
                <span>{course.progress}%</span>
              </div>
              <ProgressBar progress={course.progress} color="primary" />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;