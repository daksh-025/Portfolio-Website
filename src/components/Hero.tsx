import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { 
  SiPytorch, 
  SiTensorflow, 
  SiPython, 
  SiGo, 
  SiDocker, 
  SiReact, 
  SiPostgresql,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiFlask,
  SiDjango
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

export default function Hero() {
  const techStack = [
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Python', icon: SiPython },
    { name: 'Go', icon: SiGo },
    { name: 'Docker', icon: SiDocker },
    { name: 'React', icon: SiReact },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: DiJava },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Flask', icon: SiFlask },
    { name: 'Django', icon: SiDjango },
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-[#1C1F24] border border-[#2EA3FF]/30 rounded-full">
                <div className="w-2 h-2 bg-[#2AC0A6] rounded-full animate-pulse" />
                <span className="text-sm text-[#2AC0A6]">Available for opportunities</span>
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[#2EA3FF] to-[#2AC0A6] text-transparent bg-clip-text">
                  Daksh Agiwal
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl lg:text-2xl text-[#E6EEF3]/80 font-medium"
              >
                Machine Learning • Full-stack Systems • Research & Production
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-[#E6EEF3]/70 leading-relaxed max-w-xl"
              >
                IT undergrad from MIT Manipal developing end to end scalable software solutions.
          
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#2EA3FF] text-white font-medium rounded-lg hover:bg-[#2EA3FF]/90 transition-colors shadow-lg shadow-[#2EA3FF]/25"
              >
                View Portfolio
              </motion.button>

              <motion.a
                href="/Daksh_210911170_IT.pdf"
                download="Daksh_Agiwal_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1C1F24] border border-[#2EA3FF]/30 text-[#2EA3FF] font-medium rounded-lg hover:bg-[#1C1F24]/80 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 pt-6"
            >
              <a
                href="https://github.com/daksh-025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1C1F24] rounded-lg hover:bg-[#2EA3FF]/20 hover:text-[#2EA3FF] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-agiwal-0758ab249/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1C1F24] rounded-lg hover:bg-[#2EA3FF]/20 hover:text-[#2EA3FF] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={scrollToContact}
                className="p-3 bg-[#1C1F24] rounded-lg hover:bg-[#2EA3FF]/20 hover:text-[#2EA3FF] transition-colors"
              >
                <Mail size={20} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-full border-4 border-dashed border-[#2EA3FF]/30"
                />

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-[#2EA3FF] to-[#2AC0A6] p-2"
                >
                  <div className="w-full h-full rounded-full bg-[#1C1F24] flex items-center justify-center overflow-hidden">
                    <img 
                      src="/profilepic_linked.jpg" 
                      alt="Daksh Agiwal" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -inset-4 opacity-30"
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#2EA3FF] rounded-full -translate-x-1/2" />
                  <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-[#2AC0A6] rounded-full" />
                  <div className="absolute top-1/3 right-0 w-4 h-4 bg-[#2EA3FF] rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[#1C1F24]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-lg p-6">
              <h3 className="text-[#2EA3FF] font-semibold mb-1">Current Role</h3>
              <p className="text-[#E6EEF3]/80">SDE at GE Healthcare</p>
            </div>

            <div className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2AC0A6]/20 rounded-lg p-6">
              <h3 className="text-[#2AC0A6] font-semibold mb-1">Experience</h3>
              <p className="text-[#E6EEF3]/80">5+ internships & research roles</p>
            </div>

            <div className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-lg p-6">
              <h3 className="text-[#2EA3FF] font-semibold mb-1">Education</h3>
              <p className="text-[#E6EEF3]/80">MIT Manipal, Class of 2025</p>
            </div>
          </div>

          <div className="relative overflow-hidden py-6">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-8 items-center"
            >
              {[...techStack, ...techStack, ...techStack].map((tech, idx) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-6 py-3 bg-[#1C1F24] border border-[#2EA3FF]/20 rounded-full whitespace-nowrap"
                  >
                    <IconComponent className="text-2xl" />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-[#2EA3FF]" size={32} />
      </motion.div>
    </div>
  );
}
