export const ABOUT_DATA = {
  summary:
    'Entry-level MERN Stack Developer with hands-on experience developing web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in JavaScript, TypeScript, REST API development, database operations, JWT authentication, and responsive UI development. Experienced in building full-stack projects and contributing to frontend and backend features in a professional development environment.',
  highlights: [
    { label: 'Role', value: 'MERN Stack Developer' },
    { label: 'Focus', value: 'Full-Stack Web Applications' },
    { label: 'Architecture', value: 'RESTful APIs & Micro-Components' },
    { label: 'Status', value: 'Intern @ ZikraByte Solutions' },
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    iconName: 'Code2',
    skills: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Frontend',
    iconName: 'Layout',
    skills: ['React.js', 'Next.js', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    category: 'Database',
    iconName: 'Database',
    skills: ['MongoDB', 'MongoDB Atlas'],
  },
  {
    category: 'Authentication & Validation',
    iconName: 'ShieldCheck',
    skills: ['JWT', 'Role-Based Access Control (RBAC)', 'Zod'],
  },
  {
    category: 'Tools',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'pnpm'],
  },
];

export const PROJECTS_DATA = [
  {
    id: 'teamtasks',
    title: 'TeamTasks – Kanban Task Management System',
    shortName: 'TeamTasks',
    featured: true,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'dnd-kit'],
    githubUrl: 'https://github.com/mohan636/teamtasks',
    liveUrl: 'https://teamtasks-nine.vercel.app',
    bullets: [
      'Developed a full-stack task management application with JWT authentication, allowing users to create boards, manage tasks, invite members, and track board activities.',
      'Created RESTful APIs using Node.js and Express.js for users, boards, tasks, and member management, with MongoDB Atlas for data storage.',
      'Implemented role-based access for board owners and members, along with drag-and-drop task management using dnd-kit.',
    ],
  },
  {
    id: 'gourmetflow',
    title: 'GourmetFlow – Online Food Ordering System',
    shortName: 'GourmetFlow',
    featured: false,
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'https://github.com/mohan636/food-delivery-react',
    liveUrl: null,
    bullets: [
      'Developed a full-stack food ordering application that allows users to register, log in, browse menus, manage shopping carts, and place orders.',
      'Created RESTful APIs using Node.js and Express.js for user authentication, menu management, cart operations, and order processing.',
      'Integrated MongoDB to store and manage user, menu, cart, and order information through CRUD operations.',
    ],
  },
];

export const EXPERIENCE_DATA = [
  {
    company: 'ZikraByte Solutions',
    position: 'MERN Stack Intern',
    duration: 'October 2026 – Present',
    responsibilities: [
      'Developed responsive web interfaces using React.js, Next.js, TypeScript, and Tailwind CSS for recruitment and administrative management features.',
      'Built interactive features including forms, search, filters, pagination, subscription management, and content management using Redux Toolkit.',
      'Developed RESTful APIs using Node.js, Express.js, and TypeScript, with MongoDB and Mongoose for data storage, searching, and filtering.',
      'Implemented JWT authentication, role-based access control, Zod request validation, and unique click-tracking functionality for backend APIs.',
    ],
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Siddharth Institute of Science and Technology',
    qualification: 'B.Tech in Computer Science (AI & ML)',
    metric: 'CGPA: 8.0',
    location: 'Puttur, Andhra Pradesh',
    duration: '2021 – 2025',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    qualification: 'Intermediate (MPC)',
    metric: 'Percentage: 91%',
    location: 'Tirupati, Andhra Pradesh',
    duration: '2019 – 2021',
  },
  {
    institution: 'Ajeet Public School',
    qualification: 'CBSE',
    metric: 'Percentage: 76%',
    location: 'Rajasthan',
    duration: '2018 – 2019',
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Full Stack Development',
    institution: 'Tap Academy',
    year: '2026',
    description: [
      'Completed Full Stack Development training covering frontend and backend web development, database management, and REST API development.',
      'Gained practical knowledge of building responsive web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB.',
    ],
  },
];

export const CONTACT_DATA = {
  email: 'kmohanr00@gmail.com',
  phone: '+91 7207529338',
  phoneRaw: '+917207529338',
  github: 'https://github.com/mohan636',
  linkedin: 'https://www.linkedin.com/in/mohan-reddy-818651282',
  resumeUrl: '/resume.pdf',
};
