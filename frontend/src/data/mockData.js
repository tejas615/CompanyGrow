export const currentUser = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@company.com',
  role: 'employee',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  department: 'Engineering',
  position: 'Frontend Developer',
  skills: [
    { id: '1', name: 'JavaScript', level: 4, category: 'Programming' },
    { id: '2', name: 'React', level: 3, category: 'Frontend' },
    { id: '3', name: 'CSS', level: 4, category: 'Frontend' },
    { id: '4', name: 'Node.js', level: 2, category: 'Backend' },
  ],
  badges: [
    { 
      id: '1', 
      name: 'React Master', 
      description: 'Completed Advanced React Course', 
      icon: 'award', 
      value: 500,
      dateEarned: '2024-04-10' 
    },
    { 
      id: '2', 
      name: 'Team Player', 
      description: 'Successfully completed team project', 
      icon: 'users', 
      value: 300,
      dateEarned: '2024-03-15' 
    },
  ],
  enrolledCourses: [],
  completedCourses: [],
  assignedProjects: [],
  completedProjects: [],
};

export const badges = [
  { 
    id: '1', 
    name: 'React Master', 
    description: 'Completed Advanced React Course', 
    icon: 'award', 
    value: 500,
    dateEarned: '2024-04-10' 
  },
  { 
    id: '2', 
    name: 'Team Player', 
    description: 'Successfully completed team project', 
    icon: 'users', 
    value: 300,
    dateEarned: '2024-03-15' 
  },
  { 
    id: '3', 
    name: 'Fast Learner', 
    description: 'Completed course in record time', 
    icon: 'zap', 
    value: 200,
    dateEarned: '2024-02-20' 
  },
  { 
    id: '4', 
    name: 'Problem Solver', 
    description: 'Solved complex project challenge', 
    icon: 'lightbulb', 
    value: 400,
    dateEarned: '2024-01-30' 
  },
];

export const courses = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Learn advanced React patterns like compound components, context API, and more.',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    instructor: 'Sarah Wilson',
    skillsGained: ['React', 'JavaScript', 'State Management'],
    duration: '4 weeks',
    modules: [
      { id: '1-1', title: 'Introduction to Advanced Patterns', duration: '1 hour', completed: true },
      { id: '1-2', title: 'Compound Components', duration: '2 hours', completed: true },
      { id: '1-3', title: 'Context API Deep Dive', duration: '2 hours', completed: false },
      { id: '1-4', title: 'Render Props Pattern', duration: '1.5 hours', completed: false },
    ],
    enrolledCount: 128,
    completionRate: 72,
    badge: badges[0],
    progress: 50,
  },
  {
    id: '2',
    title: 'Full-Stack Development with Node.js',
    description: 'Build complete web applications with Node.js, Express, and MongoDB.',
    thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    instructor: 'Michael Chen',
    skillsGained: ['Node.js', 'Express', 'MongoDB', 'RESTful API'],
    duration: '6 weeks',
    modules: [
      { id: '2-1', title: 'Node.js Fundamentals', duration: '2 hours', completed: false },
      { id: '2-2', title: 'Express Framework', duration: '2.5 hours', completed: false },
      { id: '2-3', title: 'MongoDB Integration', duration: '3 hours', completed: false },
      { id: '2-4', title: 'Building RESTful APIs', duration: '2 hours', completed: false },
    ],
    enrolledCount: 96,
    completionRate: 65,
    badge: badges[2],
    progress: 0,
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Master the fundamentals of UI/UX design for creating exceptional user experiences.',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    instructor: 'Emily Rodriguez',
    skillsGained: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
    duration: '5 weeks',
    modules: [
      { id: '3-1', title: 'Design Thinking', duration: '1.5 hours', completed: false },
      { id: '3-2', title: 'User Research Methods', duration: '2 hours', completed: false },
      { id: '3-3', title: 'Wireframing Techniques', duration: '2 hours', completed: false },
      { id: '3-4', title: 'Prototyping with Figma', duration: '2.5 hours', completed: false },
    ],
    enrolledCount: 154,
    completionRate: 78,
    badge: badges[1],
    progress: 0,
  },
];

export const projects = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'Redesign the company\'s e-commerce platform with improved UI/UX and performance optimization.',
    requiredSkills: ['React', 'CSS', 'UI/UX Design'],
    startDate: '2024-05-15',
    endDate: '2024-07-30',
    status: 'in-progress',
    assignedEmployees: ['1', '3', '5'],
    progress: 35,
    badge: badges[1],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Develop a cross-platform mobile app for client appointment scheduling and management.',
    requiredSkills: ['React Native', 'JavaScript', 'API Integration'],
    startDate: '2024-06-01',
    endDate: '2024-09-15',
    status: 'not-started',
    assignedEmployees: [],
    progress: 0,
    badge: badges[0],
  },
  {
    id: '3',
    title: 'Internal Dashboard Improvements',
    description: 'Enhance the internal analytics dashboard with new visualizations and real-time data.',
    requiredSkills: ['JavaScript', 'Data Visualization', 'API Integration'],
    startDate: '2024-04-10',
    endDate: '2024-05-30',
    status: 'in-progress',
    assignedEmployees: ['1', '4'],
    progress: 70,
    badge: badges[3],
  },
];

export const performanceMetrics = [
  { month: 'Jan', coursesCompleted: 1, projectsCompleted: 0, badgesEarned: 1, value: 200 },
  { month: 'Feb', coursesCompleted: 1, projectsCompleted: 1, badgesEarned: 1, value: 500 },
  { month: 'Mar', coursesCompleted: 0, projectsCompleted: 1, badgesEarned: 1, value: 300 },
  { month: 'Apr', coursesCompleted: 1, projectsCompleted: 0, badgesEarned: 1, value: 500 },
  { month: 'May', coursesCompleted: 0, projectsCompleted: 0, badgesEarned: 0, value: 0 },
  { month: 'Jun', coursesCompleted: 0, projectsCompleted: 0, badgesEarned: 0, value: 0 },
];