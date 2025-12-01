import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/daksh-025', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daksh-agiwal-0758ab249/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:daksh202.agiwal@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F1115] border-t border-[#1C1F24] py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-[#2EA3FF]">Daksh</span> Agiwal
              </h3>
              <p className="text-[#E6EEF3]/70">
                Machine Learning Engineer & Full-Stack Developer
              </p>
            </motion.div>

            <p className="text-[#E6EEF3]/60 text-sm leading-relaxed">
              Building intelligent systems and production-ready applications.
              MIT Manipal, Class of 2025.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5, color: '#2EA3FF' }}
                  className="text-[#E6EEF3]/70 hover:text-[#2EA3FF] transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-[#1C1F24] rounded-lg hover:bg-[#2EA3FF]/20 hover:text-[#2EA3FF] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-[#E6EEF3]/60 text-sm mb-2">Email Preferred</p>
              <a
                href="mailto:daksh202.agiwal@gmail.com"
                className="text-[#2EA3FF] text-sm hover:underline"
              >
                daksh202.agiwal@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1C1F24]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#E6EEF3]/60 text-sm">
              {currentYear} Daksh Agiwal. All rights reserved.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-[#E6EEF3]/60"
            >
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-[#2EA3FF] fill-[#2EA3FF]" />
              </motion.div>
              <span>using React & Framer Motion</span>
            </motion.div>

            <div className="flex items-center gap-2 text-xs text-[#E6EEF3]/50">
              <div className="w-2 h-2 bg-[#2AC0A6] rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
