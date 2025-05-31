import React from 'react';
import Card from '../ui/Card';

const SkillsCard = ({
  skills,
  title = 'Skills',
  className = '',
}) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <Card className={className}>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="mb-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
          <div className="space-y-3">
            {categorySkills.map(skill => (
              <div key={skill.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">Level {skill.level}/5</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full" 
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default SkillsCard;