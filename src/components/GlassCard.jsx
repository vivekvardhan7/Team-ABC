import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const hoverProps = hover ? {
    whileHover: { scale: 1.05, y: -5 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      {...hoverProps}
      className={`
        bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6
        shadow-lg hover:shadow-xl transition-shadow duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;