import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  label, 
  variant = 'primary', 
  className = '' 
}) => {
  const variantClasses = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    success: 'badge-success',
  };

  return (
    <motion.span 
      className={`${variantClasses[variant]} ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {label}
    </motion.span>
  );
};

export default Badge;