import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Cloud, Cpu, Layers, Terminal } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  const skillCategories = [
    {
      name: 'Languages',
      icon: Code,
      color: '#2EA3FF',
      skills: [
        { name: 'Python', years: '4+ years', useCase: 'ML/AI & Backend Development' },
        { name: 'C++', years: '3+ years', useCase: 'System Programming & Algorithms' },
        { name: 'Java', years: '1+ years', useCase: 'Enterprise Applications' },
        { name: 'Go', years: '<1 year', useCase: 'Microservices & Cloud Native' },
        { name: 'JavaScript', years: '3+ years', useCase: 'Full-stack Development' },
      ],
    },
    {
      name: 'ML/AI',
      icon: Cpu,
      color: '#2AC0A6',
      skills: [
        { name: 'PyTorch', years: '3+ years', useCase: 'Deep Learning Models' },
        { name: 'TensorFlow', years: '3+ years', useCase: 'Production ML Systems' },
        { name: 'Scikit-Learn', years: '3+ years', useCase: 'Classical ML & Feature Engineering' },
        { name: 'LangChain', years: '1+ year', useCase: 'LLM Applications' },
        { name: 'YOLO', years: '2+ years', useCase: 'Object Detection' },
      ],
    },
    {
      name: 'Backend/DevOps',
      icon: Database,
      color: '#2EA3FF',
      skills: [
        { name: 'Docker', years: '2+ years', useCase: 'Containerization & Deployment' },
        { name: 'PostgreSQL', years: '3+ years', useCase: 'Relational Databases' },
        { name: 'Microservices', years: '2+ years', useCase: 'Distributed Systems' },
        { name: 'Flask', years: '3+ years', useCase: 'Python Web APIs' },
        { name: 'Django', years: '2+ years', useCase: 'Full-featured Web Apps' },
      ],
    },
    {
      name: 'Web/Frontend',
      icon: Layers,
      color: '#2AC0A6',
      skills: [
        { name: 'React', years: '1+ year', useCase: 'Modern UI Development' },
        { name: 'Node.js', years: '3+ years', useCase: 'Backend JavaScript' },
        { name: 'MongoDB', years: '2+ years', useCase: 'NoSQL Databases' },
        { name: 'Express', years: '3+ years', useCase: 'REST APIs' },
        { name: 'Streamlit', years: '2+ years', useCase: 'ML Dashboards' },
      ],
    },
    {
      name: 'Robotics',
      icon: Terminal,
      color: '#2EA3FF',
      skills: [
        { name: 'ROS', years: '1+ year', useCase: 'Robot Operating System' },
        { name: 'Arduino', years: '1+ year', useCase: 'Embedded Systems' },
        { name: 'Computer Vision', years: '2+ years', useCase: 'Image Processing' },
      ],
    },
    {
      name: 'Cloud/Tools',
      icon: Cloud,
      color: '#2AC0A6',
      skills: [
        { name: 'Git', years: '4+ years', useCase: 'Version Control' },
        { name: 'Linux', years: '1+ year', useCase: 'System Administration' },
        { name: 'CI/CD', years: '<1 year', useCase: 'Automation Pipelines' },
      ],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'Languages', label: 'Languages' },
    { id: 'ML/AI', label: 'ML/AI' },
    { id: 'Backend/DevOps', label: 'Backend' },
    { id: 'Web/Frontend', label: 'Web' },
    { id: 'Robotics', label: 'Robotics' },
  ];

  const filteredCategories =
    filter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === filter);

  return (
    <div ref={ref} className="section-padding px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center section-mb"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-[#2EA3FF]">Tech Stack</span>
          </h2>
          <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto mb-8">
            A comprehensive toolkit for building production-ready ML systems
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setFilter(f.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f.id
                    ? 'bg-[#2EA3FF] text-white shadow-lg shadow-[#2EA3FF]/25'
                    : 'bg-[#1C1F24] text-[#E6EEF3]/70 border border-[#2EA3FF]/20 hover:border-[#2EA3FF]/50'
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl p-6 hover:border-[#2EA3FF]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon style={{ color: category.color }} size={24} />
                </motion.div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (catIndex * 0.1) + (skillIndex * 0.05),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: `0 10px 30px ${category.color}40`
                    }}
                    className="group relative px-4 py-2 bg-[#0F1115] border rounded-lg cursor-pointer transition-all"
                    style={{ borderColor: `${category.color}30` }}
                  >
                    <span className="font-medium text-sm">{skill.name}</span>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs z-20 pointer-events-none"
                    >
                      <div className="bg-[#0F1115] border border-[#2EA3FF]/40 rounded-lg p-3 shadow-2xl">
                        <p className="text-xs font-semibold mb-1" style={{ color: category.color }}>
                          {skill.years}
                        </p>
                        <p className="text-xs text-[#E6EEF3]/70">{skill.useCase}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
