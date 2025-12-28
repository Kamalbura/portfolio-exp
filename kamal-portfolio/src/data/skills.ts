export interface SkillWord {
  text: string;
  category: 'ai' | 'iot' | 'systems';
  weight: number;
}

// Deep engineering vocabulary - actual technical skills
export const skillWords: SkillWord[] = [
  // AI / Machine Learning
  { text: 'PyTorch', category: 'ai', weight: 5 },
  { text: 'TensorFlow', category: 'ai', weight: 4 },
  { text: 'Neural Networks', category: 'ai', weight: 5 },
  { text: 'Transformers', category: 'ai', weight: 4 },
  { text: 'CUDA', category: 'ai', weight: 3 },
  { text: 'Computer Vision', category: 'ai', weight: 4 },
  { text: 'CNNs', category: 'ai', weight: 3 },
  { text: 'GANs', category: 'ai', weight: 3 },
  { text: 'Reinforcement Learning', category: 'ai', weight: 4 },
  { text: 'NLP', category: 'ai', weight: 4 },
  { text: 'LLMs', category: 'ai', weight: 5 },
  { text: 'Hugging Face', category: 'ai', weight: 3 },
  { text: 'Scikit-learn', category: 'ai', weight: 3 },
  { text: 'OpenCV', category: 'ai', weight: 3 },
  { text: 'YOLO', category: 'ai', weight: 3 },
  { text: 'Attention', category: 'ai', weight: 3 },
  { text: 'Backpropagation', category: 'ai', weight: 2 },
  { text: 'Gradient Descent', category: 'ai', weight: 2 },
  { text: 'Feature Extraction', category: 'ai', weight: 2 },
  { text: 'Model Quantization', category: 'ai', weight: 2 },
  
  // IoT / Embedded Systems
  { text: 'MQTT', category: 'iot', weight: 4 },
  { text: 'ESP32', category: 'iot', weight: 5 },
  { text: 'Arduino', category: 'iot', weight: 4 },
  { text: 'Raspberry Pi', category: 'iot', weight: 4 },
  { text: 'LoRaWAN', category: 'iot', weight: 3 },
  { text: 'Zigbee', category: 'iot', weight: 3 },
  { text: 'Edge Computing', category: 'iot', weight: 4 },
  { text: 'Sensor Fusion', category: 'iot', weight: 3 },
  { text: 'I2C', category: 'iot', weight: 2 },
  { text: 'SPI', category: 'iot', weight: 2 },
  { text: 'UART', category: 'iot', weight: 2 },
  { text: 'PWM', category: 'iot', weight: 2 },
  { text: 'FreeRTOS', category: 'iot', weight: 3 },
  { text: 'Embedded C', category: 'iot', weight: 3 },
  { text: 'CoAP', category: 'iot', weight: 2 },
  { text: 'OTA Updates', category: 'iot', weight: 2 },
  { text: 'GPIO', category: 'iot', weight: 2 },
  { text: 'Bluetooth LE', category: 'iot', weight: 3 },
  { text: 'WiFi Mesh', category: 'iot', weight: 3 },
  
  // Systems / DevOps / Languages
  { text: 'Python', category: 'systems', weight: 5 },
  { text: 'TypeScript', category: 'systems', weight: 4 },
  { text: 'Rust', category: 'systems', weight: 3 },
  { text: 'C++', category: 'systems', weight: 4 },
  { text: 'Linux', category: 'systems', weight: 4 },
  { text: 'Docker', category: 'systems', weight: 4 },
  { text: 'Kubernetes', category: 'systems', weight: 3 },
  { text: 'WebGL', category: 'systems', weight: 4 },
  { text: 'Three.js', category: 'systems', weight: 4 },
  { text: 'React', category: 'systems', weight: 4 },
  { text: 'Next.js', category: 'systems', weight: 4 },
  { text: 'Node.js', category: 'systems', weight: 3 },
  { text: 'PostgreSQL', category: 'systems', weight: 3 },
  { text: 'Redis', category: 'systems', weight: 2 },
  { text: 'GraphQL', category: 'systems', weight: 3 },
  { text: 'REST APIs', category: 'systems', weight: 3 },
  { text: 'WebSockets', category: 'systems', weight: 3 },
  { text: 'Git', category: 'systems', weight: 3 },
  { text: 'CI/CD', category: 'systems', weight: 3 },
  { text: 'AWS', category: 'systems', weight: 3 },
  { text: 'GCP', category: 'systems', weight: 2 },
  { text: 'Shell', category: 'systems', weight: 2 },
  { text: 'WebGPU', category: 'systems', weight: 3 },
];

export const categoryColors = {
  ai: { 
    color: '#00d4ff', 
    glow: '0 0 40px rgba(0, 212, 255, 0.9)', 
    label: 'AI/ML' 
  },
  iot: { 
    color: '#00ffc8', 
    glow: '0 0 40px rgba(0, 255, 200, 0.9)', 
    label: 'IoT' 
  },
  systems: { 
    color: '#8b5cf6', 
    glow: '0 0 40px rgba(139, 92, 246, 0.9)', 
    label: 'Systems' 
  },
} as const;
