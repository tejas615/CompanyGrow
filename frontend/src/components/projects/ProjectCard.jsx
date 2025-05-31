import React from 'react';
import { Calendar, Award } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'not-started':
        return 'secondary';
      case 'in-progress':
        return 'accent';
      case 'completed':
        return 'success';
      default:
        return 'primary';
    }
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card hover onClick={onClick} className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium">{project.title}</h3>
        {project.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="bg-white rounded-full p-1 shadow-sm"
          >
            <Award className="w-5 h-5 text-accent-500" />
          </motion.div>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="mb-3 flex flex-wrap gap-1">
        {project.requiredSkills.map((skill, index) => (
          <Badge key={index} variant="primary" label={skill} />
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
          </div>
          <Badge
            variant={getStatusColor(project.status)}
            label={project.status.replace('-', ' ')}
            className="capitalize"
          />
        </div>

        {typeof project.progress === 'number' && (
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium">Progress</span>
              <span>{project.progress}%</span>
            </div>
            <ProgressBar 
              progress={project.progress} 
              color={getStatusColor(project.status)} 
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;