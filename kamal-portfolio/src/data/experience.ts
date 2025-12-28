export interface ExperienceData {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  color: 'ai' | 'iot' | 'systems';
}

export const experiences: ExperienceData[] = [
  {
    id: 1,
    role: 'B.Tech Student',
    company: 'Undergraduate Program',
    period: '2022 - 2026',
    description: 'Pursuing B.Tech with focus on embedded systems and AI research.',
    highlights: [
      'Specialization in embedded systems and AI',
      'Coursework in robotics, signals, and ML',
    ],
    color: 'systems',
  },
  {
    id: 2,
    role: 'Research Intern',
    company: 'IIIT Hyderabad',
    period: 'Summer 2024',
    description: 'Research internship in computer vision and machine learning.',
    highlights: [
      'Worked on ML model experiments and datasets',
      'Collaborated with faculty on project deliverables',
    ],
    color: 'ai',
  },
  {
    id: 3,
    role: 'Projects & Open Source',
    company: 'Personal',
    period: '2023 - Present',
    description: 'Building robotics, IoT, and ML projects; maintaining prototypes and repos.',
    highlights: [
      'Developed multiple proof-of-concept systems',
      'Published code and documentation for community use',
    ],
    color: 'iot',
  },
];
