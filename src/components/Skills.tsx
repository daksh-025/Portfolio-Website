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
        { name: 'Python', level: 95, years: '4+ years', useCase: 'ML/AI & Backend Development' },
        { name: 'C++', level: 85, years: '3+ years', useCase: 'System Programming & Algorithms' },
        { name: 'Java', level: 50, years: '1+ years', useCase: 'Enterprise Applications' },
        { name: 'Go', level: 30, years: '<1 years', useCase: 'Microservices & Cloud Native' },
        { name: 'JavaScript', level: 88, years: '3+ years', useCase: 'Full-stack Development' },
      ],
    },
    {
      name: 'ML/AI',
      icon: Cpu,
      color: '#2AC0A6',
      skills: [
        { name: 'PyTorch', level: 92, years: '3+ years', useCase: 'Deep Learning Models' },
        { name: 'TensorFlow', level: 88, years: '3+ years', useCase: 'Production ML Systems' },
        { name: 'Scikit-Learn', level: 90, years: '3+ years', useCase: 'Classical ML & Feature Engineering' },
        
      ],
    },
    {
      name: 'Backend/DevOps',
      icon: Database,
      color: '#2EA3FF',
      skills: [
        { name: 'Docker', level: 70, years: '2+ years', useCase: 'Containerization & Deployment' },
        { name: 'PostgreSQL', level: 85, years: '3+ years', useCase: 'Relational Databases' },
        { name: 'Microservices', level: 88, years: '2+ years', useCase: 'Distributed Systems' },
        { name: 'Spring Boot', level: 40, years: '1+ years', useCase: 'Java Backend Services' },
        { name: 'Flask', level: 90, years: '3+ years', useCase: 'Python Web APIs' },
        { name: 'Django', level: 85, years: '2+ years', useCase: 'Full-featured Web Apps' },
      ],
    },
    {
      name: 'Web/Frontend',
      icon: Layers,
      color: '#2AC0A6',
      skills: [
        { name: 'React', level: 40, years: '1+ years', useCase: 'Modern UI Development' },
        { name: 'Node.js', level: 87, years: '3+ years', useCase: 'Backend JavaScript' },
        { name: 'MongoDB', level: 85, years: '2+ years', useCase: 'NoSQL Databases' },
        { name: 'Express', level: 88, years: '3+ years', useCase: 'REST APIs' },
        { name: 'Streamlit', level: 82, years: '2+ years', useCase: 'ML Dashboards' },
      ],
    },
    {
      name: 'Robotics',
      icon: Terminal,
      color: '#2EA3FF',
      skills: [
        { name: 'ROS', level: 50, years: '1+ years', useCase: 'Robot Operating System' },
        { name: 'Arduino', level: 50, years: '1+ years', useCase: 'Embedded Systems' },
        { name: 'Computer Vision', level: 70, years: '2+ years', useCase: 'Image Processing' },
      ],
    },
    {
      name: 'Cloud/Tools',
      icon: Cloud,
      color: '#2AC0A6',
      skills: [
        { name: 'Git', level: 92, years: '4+ years', useCase: 'Version Control' },
        { name: 'Linux', level: 50, years: '1+ years', useCase: 'System Administration' },
        { name: 'CI/CD', level: 30, years: '<1 years', useCase: 'Automation Pipelines' },
        
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
    <div ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon style={{ color: category.color }} size={28} />
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    className="group relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-[#2EA3FF] font-bold">{skill.level}%</span>
                    </div>

                    <div className="relative h-2 bg-[#0F1115] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${
                            category.color === '#2EA3FF' ? '#2AC0A6' : '#2EA3FF'
                          })`,
                        }}
                      />
                    </div>

                    <div className="absolute left-0 right-0 -bottom-2 opacity-0 group-hover:opacity-100 group-hover:-bottom-20 transition-all duration-300 pointer-events-none z-10">
                      <div className="bg-[#0F1115] border border-[#2EA3FF]/30 rounded-lg p-3 shadow-xl">
                        <p className="text-sm text-[#2EA3FF] font-semibold mb-1">{skill.years}</p>
                        <p className="text-sm text-[#E6EEF3]/70">{skill.useCase}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-[#E6EEF3]/60 text-sm"
        >
          Hover over skills to see experience and use cases
        </motion.div>
      </div>
    </div>
  );
}
