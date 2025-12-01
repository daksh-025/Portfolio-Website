import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'GE Healthcare',
      period: 'August 2025 - Present',
      current: true,
      description: ['Tech stack migration from legacy C++ to java and spring boot'],
      tech: ['Java', 'Spring Boot', 'C++'],
      color: '#2EA3FF',
    },
    {
      title: 'SDE Intern',
      company: 'GE Healthcare',
      period: 'January 2025 - July 2025',
      description: [
        'Developer a unified platform for efficient model tracking and traceability'
      ],
      tech: ['Python', 'MLFlow', 'Linux', 'Docker', 'TensorFlow'],
      color: '#2AC0A6',
    },
    {
      title: 'SDE Summer Intern',
      company: 'GE Healthcare',
      period: 'May 2024 - August 2024',
      description: [
        'Developed a multimodal medical chatbot',
        'Developed a workflow optimzation tool'
      ],
      tech: ['Python','PyTorch', 'TensorFlow','Scikit-Learn', 'Flask', 'OCR','HTML','CSS','JavaScript', 'langchain','Docker', 'Go', 'Microservices'],
      color: '#2EA3FF',
    },
    {
      title: 'Research Intern',
      company: 'Gropare',
      period: 'June 2023 - November 2023',
      description: [
        ' Gropare is a B2B platform leveraging technology to deliver the freshest harvest-to-retail in the industry',
        ' Worked on developing machine learning algorithms for computer vision based applications',
        'Developed object detection algorithms and pipelines to detect objects in low light settings.',

        
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'Computer Vision','OpenCV','YOLOv8'],
      color: '#2AC0A6',
    },
    {
      title: 'AI Intern',
      company: 'Jupiter AI Labs',
      period: 'June 2023 - September 2023',
      description: [
        'Worked on developing custom LLM’s and rasa chatbots, utilizing API’s for law-firm clients.',
        'Worked on developing a multimodal chatbot(STD awarness) for nigerian clients in their local language(haussa,igbo,yoruba).',
        'Developed an application for lawn area estimation from satellite images through semantic segmentation models as a POC.',
        
      ],
      tech: ['Python', 'chatbot development', 'NLP', 'BeautifulSoup', 'API', 'LLM', 'Rasa', 'TensorFlow', 'PyTorch', 'langchain'],
      color: '#2EA3FF',
    },
  ];

  return (
    <div ref={ref} className="py-24 px-6 lg:px-8 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-[#2EA3FF]">Experience</span>
          </h2>
          <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto">
            Building scalable software solutions at leading organizations
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2EA3FF] via-[#2AC0A6] to-[#2EA3FF]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl p-6 lg:p-8 shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="text-[#2EA3FF]" size={24} />
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                        </div>
                        <p className="text-xl text-[#2AC0A6] font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-[#E6EEF3]/70">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-[#2AC0A6]/20 border border-[#2AC0A6] rounded-full text-[#2AC0A6] text-sm font-semibold"
                        >
                          Current
                        </motion.div>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#E6EEF3]/80">
                          <span className="text-[#2EA3FF] mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0F1115] border border-[#2EA3FF]/30 rounded-lg text-sm text-[#E6EEF3]/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-[#0F1115] z-10"
                  style={{ backgroundColor: exp.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </div>
  );
}
