export interface AboutData {
  stats: {
    value: string;
    label: string;
    color: 'ai' | 'iot' | 'systems' | 'gradient';
  }[];
  techStack: {
    name: string;
    category?: 'ai' | 'iot' | 'systems';
  }[];
  bio: {
    intro: string;
    journey: string;
    approach: string;
  };
}

export const aboutData: AboutData = {
  stats: [
    { value: '15+', label: 'Projects Completed', color: 'ai' },
    { value: '3+', label: 'Years Experience', color: 'iot' },
    { value: '∞', label: 'Curiosity', color: 'gradient' },
  ],
  
  techStack: [
    { name: 'TensorFlow', category: 'ai' },
    { name: 'PyTorch', category: 'ai' },
    { name: 'Arduino', category: 'iot' },
    { name: 'React', category: 'systems' },
    { name: 'Python', category: 'systems' },
    { name: 'Node.js', category: 'systems' },
  ],
  
  bio: {
    intro: "I'm a Computer Science Engineering student at Vasavi College of Engineering, Hyderabad, with a deep passion for the intersection of Artificial Intelligence and the Internet of Things.",
    
    journey: "My journey in tech is driven by an insatiable curiosity to understand how systems work and how they can be made smarter, more efficient, and more impactful. From building neural networks that predict patterns in complex datasets to designing IoT systems that bridge the physical and digital worlds.",
    
    approach: "I thrive on challenges that push the boundaries of what's possible. My approach combines rigorous engineering principles with creative problem-solving, always keeping the end user and real-world impact at the center of every solution I build.",
  },
};
