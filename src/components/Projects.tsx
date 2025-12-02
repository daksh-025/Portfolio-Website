import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'CropWise',
      subtitle: 'MHash - Manipal Hackathon Winner',
      summary: 'End-to-end agricultural app helping farmers improve crop yield',
      description: [
        'Built comprehensive agricultural assistance platform with multiple integrated features',
        'Developed AI-powered chatbot for real-time farming advice and query resolution',
        'Implemented disease detection system using computer vision and deep learning',
        'Created community forum for farmers to share knowledge and experiences',
        'Integrated dynamic web scraping for government schemes and subsidies',
      ],
      problem: 'Farmers lack accessible, integrated tools for crop management, disease detection, and awareness of government support programs.',
      solution: 'CropWise provides a unified platform combining AI chatbot assistance, computer vision-based disease detection, community engagement, and automated government scheme discovery.',
      results: [
        'Winner at MHash Manipal Hackathon',
        '95% accuracy in disease detection',
        'Seamless integration of multiple features',
        'Positive farmer feedback during testing',
      ],
      tech: ['Langchain', 'Streamlit', 'bs4', 'Flask', 'HTML', 'CSS', 'JavaScript', 'TensorFlow', 'Postgres'],
      github: 'https://github.com/daksh-025/MHash-CROPWISE-',
      videoUrl: 'https://www.youtube.com/embed/kH3IC6jLbVo',
      color: '#2AC0A6',
      icon: '🌾',
    },
    {
      title: 'Explainable AI Healthcare',
      subtitle: 'GE Healthcare Precision Challenge 2023',
      summary: 'End-to-end explainable AI healthcare diagnostic application',
      description: [
        'Developed comprehensive healthcare AI system with multiple diagnostic capabilities',
        'Integrated Automatic Speech Recognition for voice-enabled medical documentation',
        'Built Diabetic Retinopathy detection model using EfficientNet architecture',
        'Implemented explainable text generation using Random Forest decision tree traversal',
        'Added Layer-wise Relevance Propagation for model interpretability',
        'Integrated OCR for medical document processing and geolocation APIs',
      ],
      problem: 'Healthcare AI systems often lack transparency, making it difficult for medical professionals to trust and validate AI-driven diagnoses.',
      solution: 'Built an end-to-end explainable AI platform that not only provides accurate diagnoses but also explains the reasoning behind each prediction using LRP and Random Forest traversal techniques.',
      results: [
        'Successfully deployed at GE Healthcare Precision Challenge',
        'High accuracy in Diabetic Retinopathy detection',
        'Clear, interpretable explanations for medical professionals',
        'Multi-modal input support (voice, image, text)',
      ],
      tech: ['Flask', 'HTML', 'CSS', 'JavaScript', 'TensorFlow', 'MySQL', 'PyTorch', 'Pytesseract'],
      github: 'https://github.com/daksh-025/GEHC-PCC2023',
      videoUrl: 'https://www.youtube.com/embed/dL1ioh4PjBw',
      color: '#2EA3FF',
      icon: '🏥',
    },
    {
      title: 'Multimodal Obscenity Detection',
      subtitle: 'Kavach Hackathon - Cybersecurity',
      summary: 'ML model detecting obscene content across multiple modalities',
      description: [
        'Developed comprehensive obscenity detection system for cybersecurity applications',
        'Built separate models for image, video, audio, and text analysis',
        'Integrated multimodal learning for improved detection accuracy',
        'Implemented real-time processing pipeline for content moderation',
        'Optimized model performance for production deployment',
      ],
      problem: 'Online platforms need robust, multimodal content moderation to detect and filter inappropriate content across different media types.',
      solution: 'Created a unified ML system that analyzes images, videos, audio, and text using specialized models for each modality, providing comprehensive content moderation capabilities.',
      results: [
        'High detection accuracy across all modalities',
        'Real-time processing capability',
        'Low false positive rate',
        'Scalable architecture for production use',
      ],
      tech: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'NLP'],
      github: 'https://github.com/daksh-025/KavachHackathon',
      pdfUrl: '/Obscenity Blocker.pdf',
      color: '#2AC0A6',
      icon: '🛡️',
    },
    {
      title: 'Retail Price Optimization',
      subtitle: 'ML-driven Dynamic Pricing System',
      summary: 'ML-driven dynamic pricing system for retail profit maximization',
      description: [
        'Developed intelligent pricing model for retail optimization',
        'Implemented dynamic pricing algorithms based on demand forecasting',
        'Built predictive models for sales volume and revenue optimization',
        'Analyzed competitor pricing and market trends',
        'Created interactive dashboard for price recommendation visualization',
      ],
      problem: 'Retailers struggle to optimize pricing strategies dynamically based on market conditions, demand, and competition.',
      solution: 'Built an ML-powered pricing optimization system that analyzes multiple factors (demand, competition, seasonality) to recommend optimal prices that maximize profitability.',
      results: [
        'Improved profit margins in simulation testing',
        'Accurate demand forecasting',
        'Real-time price recommendations',
        'Comprehensive market analysis integration',
      ],
      tech: ['Python', 'sklearn', 'pandas', 'numpy', 'seaborn', 'matplotlib'],
      github: 'https://github.com/daksh-025/feynnlabsinternship/blob/main/prizeoptimizationipynb.ipynb',
      pdfUrl: '/Retail_Prize_Optimization.pdf',
      color: '#2EA3FF',
      icon: '💰',
    },
  ];

  return (
    <div ref={ref} className="section-padding px-6 lg:px-8 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center section-mb"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-[#2EA3FF]">Projects</span>
          </h2>
          <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto">
            Building innovative solutions from hackathons to production systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2EA3FF]/5 to-[#2AC0A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{project.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm" style={{ color: project.color }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {project.videoUrl && (
                  <div className="mb-4">
                    <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={project.videoUrl}
                        title={`${project.title} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {project.pdfUrl && (
                  <div className="mb-4">
                    <div className="relative w-full rounded-lg overflow-hidden bg-white h-[400px] md:h-[500px] lg:h-[600px]">
                      <iframe
                        src={`${encodeURI(project.pdfUrl)}#toolbar=1&navpanes=0&view=FitH&zoom=125`}
                        className="w-full h-full"
                        title={`${project.title} Presentation`}
                      />
                    </div>
                  </div>
                )}

                <p className="text-[#E6EEF3]/80 mb-4 leading-relaxed">{project.summary}</p>

                <div className="space-y-2 mb-6">
                  {project.description.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#E6EEF3]/70">
                      <ChevronRight size={16} className="text-[#2EA3FF] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#0F1115] border border-[#2EA3FF]/30 rounded-lg text-xs text-[#E6EEF3]/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 bg-[#0F1115] border border-[#2EA3FF]/30 rounded-lg text-xs text-[#E6EEF3]/80">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-[#2EA3FF] text-white font-medium rounded-lg hover:bg-[#2EA3FF]/90 transition-colors"
                  >
                    Read Case Study
                  </motion.button>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#1C1F24] border border-[#2EA3FF]/30 text-[#2EA3FF] rounded-lg hover:bg-[#1C1F24]/80 transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1C1F24] border border-[#2EA3FF]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#1C1F24] border-b border-[#2EA3FF]/20 p-6 flex items-start justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="text-5xl">{projects[selectedProject].icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold">{projects[selectedProject].title}</h3>
                    <p className="text-[#2EA3FF]">{projects[selectedProject].subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-[#0F1115] rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 lg:p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-[#2EA3FF] mb-3">Problem Statement</h4>
                  <p className="text-[#E6EEF3]/80 leading-relaxed">{projects[selectedProject].problem}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2AC0A6] mb-3">Solution</h4>
                  <p className="text-[#E6EEF3]/80 leading-relaxed mb-4">{projects[selectedProject].solution}</p>
                  <ul className="space-y-2">
                    {projects[selectedProject].description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#E6EEF3]/70">
                        <ChevronRight size={18} className="text-[#2EA3FF] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2EA3FF] mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#0F1115] border border-[#2EA3FF]/30 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#2AC0A6] mb-3">Results & Impact</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {projects[selectedProject].results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0F1115] border border-[#2AC0A6]/30 rounded-lg p-4"
                      >
                        <p className="text-[#E6EEF3]/80">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-[#2EA3FF] text-white font-medium rounded-lg hover:bg-[#2EA3FF]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-[#1C1F24] border border-[#2EA3FF]/30 text-[#2EA3FF] font-medium rounded-lg hover:bg-[#1C1F24]/80 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
