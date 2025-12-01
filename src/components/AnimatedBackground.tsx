import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1115] via-[#1C1F24] to-[#0F1115]" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2EA3FF] rounded-full opacity-10 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2AC0A6] rounded-full opacity-10 blur-3xl"
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2EA3FF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#2EA3FF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
