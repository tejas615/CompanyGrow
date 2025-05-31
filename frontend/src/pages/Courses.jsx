import React, { useEffect, useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import CourseCard from '../components/courses/CourseCard';
import Button from '../components/ui/Button';
import api from '../api'; // ✅ using backend API

const Courses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Failed to fetch courses:', err));
  }, []);

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    course.description.toLowerCase().includes(searchValue.toLowerCase()) ||
    (course.skillsGained || []).some(skill => 
      skill.toLowerCase().includes(searchValue.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Training Courses</h1>
          <p className="mt-1 text-gray-600">Browse and enroll in courses to build your skills</p>
        </div>
        <Button 
          variant="primary"
          leftIcon={<BookOpen size={16} />}
        >
          My Courses
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
            placeholder="Search courses..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <Button 
          variant="outline"
          leftIcon={<Filter size={16} />}
          onClick={() => setFilterOpen(!filterOpen)}
        >
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills
            </label>
            <select className="input">
              <option>All Skills</option>
              <option>React</option>
              <option>JavaScript</option>
              <option>Node.js</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select className="input">
              <option>Any Duration</option>
              <option>Under 2 weeks</option>
              <option>2-4 weeks</option>
              <option>4-8 weeks</option>
              <option>Over 8 weeks</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Completion Rate
            </label>
            <select className="input">
              <option>Any Rate</option>
              <option>Over 50%</option>
              <option>Over 75%</option>
              <option>Over 90%</option>
            </select>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
