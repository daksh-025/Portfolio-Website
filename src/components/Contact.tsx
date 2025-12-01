import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'daksh202.agiwal@gmail.com',
      href: 'mailto:daksh202.agiwal@gmail.com',
      color: '#2EA3FF',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8792853840',
      href: 'tel:+918792853840',
      color: '#2AC0A6',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'daksh-agiwal',
      href: 'https://www.linkedin.com/in/daksh-agiwal-0758ab249/',
      color: '#2EA3FF',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'daksh-025',
      href: 'https://github.com/daksh-025',
      color: '#2AC0A6',
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
            Get In <span className="text-[#2EA3FF]">Touch</span>
          </h2>
          <p className="text-lg text-[#E6EEF3]/70 max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-[#1C1F24]/50 border border-[#2EA3FF]/20 rounded-xl hover:border-[#2EA3FF]/50 transition-all group"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-[#E6EEF3]/60 mb-1">{info.label}</p>
                      <p className="font-semibold text-[#E6EEF3] group-hover:text-[#2EA3FF] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#2EA3FF]/10 to-[#2AC0A6]/10 border border-[#2EA3FF]/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#2EA3FF]" size={24} />
                <h4 className="text-xl font-bold">Location</h4>
              </div>
              <p className="text-[#E6EEF3]/80 mb-4">India</p>

              <div className="pt-4 border-t border-[#2EA3FF]/20">
                <h4 className="font-semibold mb-2">Availability</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2AC0A6] rounded-full animate-pulse" />
                  <p className="text-[#E6EEF3]/70">Open to collaboration & hiring opportunities</p>
                </div>
                <p className="text-sm text-[#E6EEF3]/60 mt-4">
                  I typically respond within 1-2 business days
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#1C1F24] border border-[#2EA3FF]/20 rounded-lg focus:border-[#2EA3FF] focus:outline-none focus:ring-2 focus:ring-[#2EA3FF]/20 transition-all text-[#E6EEF3]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#1C1F24] border border-[#2EA3FF]/20 rounded-lg focus:border-[#2EA3FF] focus:outline-none focus:ring-2 focus:ring-[#2EA3FF]/20 transition-all text-[#E6EEF3]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1C1F24] border border-[#2EA3FF]/20 rounded-lg focus:border-[#2EA3FF] focus:outline-none focus:ring-2 focus:ring-[#2EA3FF]/20 transition-all text-[#E6EEF3] resize-none"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#2EA3FF] text-white font-medium rounded-lg hover:bg-[#2EA3FF]/90 transition-colors shadow-lg shadow-[#2EA3FF]/25 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[#2AC0A6]"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
