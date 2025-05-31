import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Card from '../ui/Card';

const StatsCard = ({
  title,
  value,
  icon,
  change,
  className = '',
}) => {
  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-primary-50 rounded-full">
          {icon}
        </div>
      </div>
      
      {change && (
        <div className="mt-4 flex items-center">
          {change.trend === 'up' && (
            <div className="flex items-center text-success-600">
              <ArrowUp size={16} className="mr-1" />
              <span className="text-sm font-medium">{change.value}%</span>
            </div>
          )}
          {change.trend === 'down' && (
            <div className="flex items-center text-error-600">
              <ArrowDown size={16} className="mr-1" />
              <span className="text-sm font-medium">{change.value}%</span>
            </div>
          )}
          <span className="text-sm text-gray-500 ml-2">from last month</span>
        </div>
      )}
    </Card>
  );
};

export default StatsCard;