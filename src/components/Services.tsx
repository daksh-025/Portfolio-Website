import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, CheckCircle } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Brain,
      title: 'End to End AI ML Solutions',
      description: 'Comprehensive AI/ML solutions from concept to deployment and beyond',
      deliverables: [
        'AI/ML strategy and feasibility analysis',
        'Custom model development and training',
        'Intelligent chatbot development and integration',
        'Computer vision and NLP solutions',
        'Integration of AI agentic solutions',
        'Model deployment, optimization, and monitoring',
      ],
      tech: ['Python', 'PyTorch', 'TensorFlow', 'LLM', 'Langchain', 'VectorDB', 'NLP', 'YOLO', 'HuggingFace', 'OpenAI', 'FastAPI', 'Docker'],
      color: '#2EA3FF',
    },
    {
      icon: Code,
      title: 'Full-Stack Web & API Development',
      description: 'Modern, scalable web applications and RESTful APIs',
      deliverables: [
        'System architecture and tech stack selection',
        'Frontend development with React/modern frameworks',
        'Backend API development (Flask, Django, Spring Boot)',
        'Database design and optimization',
        'Testing, deployment, and CI/CD setup',
      ],
      tech: ['React', 'Node.js', 'Express.js', 'Flask', 'Django', 'MongoDB', 'PostgreSQL', 'TypeScript', 'RESTful APIs', 'Docker'],
      color: '#2AC0A6',
    },
  ];

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
            Services <span className="text-[#2EA3FF]">Offered</span>
          </h2>
          <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto">
            Comprehensive technical solutions from ideation to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl p-8 group"
            >
              <div className="mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 rounded-2xl mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon size={40} style={{ color: service.color }} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#E6EEF3]/70 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-[#2EA3FF]">Deliverables:</h4>
                <div className="space-y-3">
                  {service.deliverables.map((deliverable, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span className="text-[#E6EEF3]/80">{deliverable}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 text-[#E6EEF3]/60">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#0F1115] border rounded-lg text-sm text-[#E6EEF3]/80 transition-colors"
                      style={{ borderColor: `${service.color}30` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#2EA3FF]/10 to-[#2AC0A6]/10 border border-[#2EA3FF]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="text-[#E6EEF3]/70 mb-6 max-w-2xl">
              Whether you need a production ML system or a full-stack application,
              I bring hands-on experience from industry internships and academic projects.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#2EA3FF] text-white font-medium rounded-lg hover:bg-[#2EA3FF]/90 transition-colors shadow-lg shadow-[#2EA3FF]/25"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
