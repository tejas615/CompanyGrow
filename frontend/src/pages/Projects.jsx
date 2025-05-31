import React, { useEffect, useState } from 'react';
import { Search, Filter, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import Button from '../components/ui/Button';
import api from '../api';

const Projects = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    project.requiredSkills?.some(skill =>
      skill.toLowerCase().includes(searchValue.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="mt-1 text-gray-600">View assigned projects and track your progress</p>
        </div>
        <Button variant="primary" leftIcon={<Briefcase size={16} />}>
          My Projects
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10"
            placeholder="Search projects..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <Button variant="outline" leftIcon={<Filter size={16} />} onClick={() => setFilterOpen(!filterOpen)}>
          Filter
        </Button>
      </div>

      {filterOpen && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {/* Filters (if needed to work with backend filtering later) */}
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
