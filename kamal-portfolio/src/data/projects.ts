export interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  color: 'ai' | 'iot' | 'systems';
  link: string;
  github: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Air Quality Monitoring System',
    category: 'IoT / Environmental',
    description: 'End-to-end sensor network and dashboard for urban air quality monitoring with edge aggregation and anomaly alerts.',
    tech: ['ESP32', 'MQTT', 'LoRaWAN', 'InfluxDB'],
    color: 'iot',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Cyber Truck (Prototype)',
    category: 'Embedded / Systems',
    description: 'Custom vehicle control stack and telemetry system for rugged autonomous platform development.',
    tech: ['C++', 'ROS2', 'CAN', 'Python'],
    color: 'systems',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Quadcopter Autonomy',
    category: 'Robotics',
    description: 'Autonomous flight stack with SLAM-based navigation and obstacle avoidance for compact UAVs.',
    tech: ['PX4', 'OpenCV', 'C++', 'Python'],
    color: 'ai',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'AI-powered Blogging Platform (TCC)',
    category: 'Full Stack / AI',
    description: 'A content platform using ML to assist writing, SEO suggestions, and personalized feeds.',
    tech: ['Next.js', 'Python', 'Transformer Models'],
    color: 'systems',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Forest Fire Detection',
    category: 'AI / Computer Vision',
    description: 'Early detection pipeline using satellite imagery and edge inference to trigger alerts for firefighting teams.',
    tech: ['PyTorch', 'Satellite Imagery', 'Edge TPU'],
    color: 'ai',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: "Blind Assistance Device",
    category: 'Assistive Tech',
    description: 'Wearable device combining computer vision and haptic feedback to help visually impaired users navigate.',
    tech: ['Embedded C', 'OpenCV', 'Haptics'],
    color: 'iot',
    link: '#',
    github: '#',
  },
];
