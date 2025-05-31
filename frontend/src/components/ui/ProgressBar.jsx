import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({
  progress,
  color = 'primary',
  size = 'md',
  showPercentage = false,
  className = '',
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    accent: 'bg-accent-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
  };

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="progress-container">
        <motion.div 
          className={`progress-bar ${colorClasses[color]} ${sizeClasses[size]}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showPercentage && (
        <div className="text-right text-xs text-gray-500">
          {progress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;