import React, { useEffect, useState } from 'react';
import { BookOpen, Award, Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import StatsCard from '../components/dashboard/StatsCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import CourseCard from '../components/courses/CourseCard';
import ProjectCard from '../components/projects/ProjectCard';
import api from '../api'; // ✅ new

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    api.get('/users/me').then(res => setUser(res.data));
    api.get('/courses').then(res => setCourses(res.data));
    api.get('/projects').then(res => setProjects(res.data));
    api.get('/analytics').then(res => setMetrics(res.data));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      <div>
        <motion.h1 className="text-2xl font-bold text-gray-900" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          Welcome back, {user?.name || 'Employee'}!
        </motion.h1>
        <motion.p className="mt-1 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
          Here's what's happening with your development journey
        </motion.p>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp}>
          <StatsCard title="Courses in Progress" value={metrics.courseCount || 0} icon={<BookOpen className="h-6 w-6 text-primary-600" />} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatsCard title="Projects Assigned" value={metrics.projectCount || 0} icon={<Briefcase className="h-6 w-6 text-secondary-600" />} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatsCard title="Badges Earned" value={metrics.badgeCount || 0} icon={<Award className="h-6 w-6 text-accent-500" />} />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <StatsCard title="Upcoming Deadlines" value="2" icon={<Calendar className="h-6 w-6 text-error-500" />} />
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
        <PerformanceChart data={metrics.performanceMetrics || []} title="Your Performance" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Active Courses</h2>
            <a href="/courses" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View all</a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {courses.slice(0, 2).map(course => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Current Projects</h2>
            <a href="/projects" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View all</a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects.slice(0, 2).map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
