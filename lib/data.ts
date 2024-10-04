import React from 'react';
import { CgController, CgData, CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Bsc in Computer Science and Engineering',
    place: 'American International University-Bangladesh',
    location: 'Dhaka, Bangladesh',
    description: 'Before graduation, I got a job as a full stack developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Teaching Assistant',
    place: 'American International University-Bangladesh',
    location: 'Dhaka, Bangladesh',
    description:
      'Worked on four In-House products: Restaurant Portal, Delivery Service Portal, Admin Portal and Consumer Application',
    icon: React.createElement(CgController),
    date: '2023 - 2024',
  },
  {
    title: 'Full-Stack Developer',
    place: 'Munchies',
    location: 'Dhaka, Bangladesh',
    description:
      'Worked on four In-House products: Restaurant Portal, Delivery Service Portal, Admin Portal and Consumer Application',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - 2024',
  },
  {
    title: 'Software Engineer',
    place: 'JB Connect',
    location: 'Dhaka, Bangladesh',
    description:
      "I'm now a Software Engineer working in a Multinational Company. Associated with two large scaled projects, where I worked on both as a Full Stack Engineer and Frontend Engineer",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
  {
    title: 'Future Researcher',
    place: 'maybe !..🤔',
    location: 'anywhere 🌍',
    description:
      'I would love to be a Data Scientist or a Researcher in the field of Neuro Data Science.',
    icon: React.createElement(CgData),
    date: '2024 - present',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Seaborn',
  'Scikit-learn',
  'Jupyter',
  'OpenCV',
  'TensorFlow',
  'Keras',
  'PyTorch',
  'MATLAB',
  // 'Caffe',
  // 'YOLO',
  // 'Scikit-image',
  // 'SimpleCV',
  // 'dlib',
  // 'OpenPose',
  // 'DeepLab',
  // 'NVIDIA DIGITS',
  // 'Neuroph',
  // 'NEST',
  // 'Brian2',
  // 'NEURON',
  // 'BindsNET',
  // 'Nengo',
] as const;
