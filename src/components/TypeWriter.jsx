import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }
    }, index === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [index, text, speed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="text-primary-400"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TypeWriter;