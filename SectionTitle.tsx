import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'} max-w-3xl ${centered ? 'mx-auto' : ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-1 w-24 bg-emerald-500 mt-4 ${centered ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 80 : 96 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default SectionTitle;