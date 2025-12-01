import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award, Music, Trophy } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-[#2EA3FF]">Me</span>
            </h2>
            <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto">
              Passionate about building intelligent systems that make a real-world impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2EA3FF]/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2EA3FF]">My Story</h3>
                <div className="space-y-4 text-[#E6EEF3]/80 leading-relaxed">
                  <p>
                    I'm an IT undergrad from MIT Manipal, passionate about machine learning
                    and data science with hands-on experience in building production-ready systems.
                    My journey in tech spans from robotics with Arduino and ROS to full-stack web development as well.
                  </p>
                  <p>
                    Throughout my academic career, I've had the privilege of interning at leading organizations
                    including GE Healthcare, where I currently work as an SDE, as well as Jupiter AI Labs,
                    Feynn Labs, and Gropare. These experiences have equipped me with valuable skillsets and insights in both research and industry settings.
                  </p>
                  <p>
                    In college I had been actively involved in student projects like MANAS and RoboManipal,
                    which have strengthened my technical foundation and collaborative skills. Outside of work I am a sports(Table Tennis and Badminton, in particular) enthusiast and have represented my school at a local and national level. Have also completed grade 5 in Piano from Trinity College Of London .
                  </p>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-[#2EA3FF]/10 to-[#2AC0A6]/10 border border-[#2EA3FF]/30 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-[#2EA3FF]" size={24} />
                  <h3 className="text-xl font-bold">Quick Facts</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-[#2AC0A6] mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Availability</p>
                      <p className="text-[#E6EEF3]/70">Open to collaboration &  freelance hiring opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#2AC0A6] mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-[#E6EEF3]/70">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="text-[#2AC0A6] mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Achievements</p>
                      <ul className="text-[#E6EEF3]/70 space-y-1 list-disc list-inside">
                        <li>Toyota Smart Roads Hackathon finalist</li>
                        <li>Finalist at GE Healthcare precision challenge</li>
                        <li>Winner of Manipal Hackathon 2023</li>
                        <li>Third place in Electropattern Arduino coding contest</li>
                        <li>Completed Grade 5 in Piano from Trinity College of London</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-[#1C1F24]/50 backdrop-blur-sm border border-[#2AC0A6]/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-[#2AC0A6]" size={28} />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0F1115]/50 rounded-xl p-6 border border-[#2EA3FF]/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-[#2EA3FF]">MIT Manipal</h4>
                        <p className="text-[#E6EEF3]/70">Bachelor of Technology in IT</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#2AC0A6] font-bold">8.31</p>
                        <p className="text-sm text-[#E6EEF3]/70">CGPA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#E6EEF3]/70">
                      <Calendar size={16} />
                      <span>Class of 2025</span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0F1115]/50 rounded-xl p-6 border border-[#2EA3FF]/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-[#2EA3FF]">DPS Bangalore East</h4>
                        <p className="text-[#E6EEF3]/70">Class 12, CBSE</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#2AC0A6] font-bold">95.6%</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0F1115]/50 rounded-xl p-6 border border-[#2EA3FF]/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-[#2EA3FF]">DPS Bangalore East</h4>
                        <p className="text-[#E6EEF3]/70">Class 10, CBSE</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#2AC0A6] font-bold">93.2%</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2AC0A6]/10 to-[#2EA3FF]/10 border border-[#2AC0A6]/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-[#2AC0A6]" size={28} />
                  <h3 className="text-2xl font-bold">Beyond Tech</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Trophy className="text-[#2EA3FF] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Sports Achievements</h4>
                      <ul className="text-[#E6EEF3]/70 space-y-1 list-disc list-inside">
                        <li>National-level representation in table tennis</li>
                        <li>Local and state-level badminton competitions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Music className="text-[#2EA3FF] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Musical Pursuits</h4>
                      <ul className="text-[#E6EEF3]/70 space-y-1 list-disc list-inside">
                        <li>Grade 5 Piano from Trinity College London</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
