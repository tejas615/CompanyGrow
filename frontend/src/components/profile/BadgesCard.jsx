import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const BadgesCard = ({
  badges,
  title = 'Earned Badges',
  className = '',
}) => {
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <Card className={className}>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {badges.map(badge => (
          <motion.div
            key={badge.id}
            className="flex items-start p-3 bg-gray-50 rounded-lg"
            variants={item}
            whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-2 bg-accent-100 rounded-full mr-3">
              <Award className="w-6 h-6 text-accent-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{badge.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <Calendar size={12} className="mr-1" />
                <span>{formatDate(badge.dateEarned)}</span>
                <span className="ml-auto font-medium text-accent-600">{badge.value} pts</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};

export default BadgesCard;