import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiUser, FiZap, FiBriefcase, FiMail, FiMenu, FiX } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/about', icon: FiUser, label: 'About' },
    { path: '/services', icon: FiZap, label: 'Services' },
    { path: '/portfolio', icon: FiBriefcase, label: 'Portfolio' },
    { path: '/contact', icon: FiMail, label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-900/80 backdrop-blur-lg border-b border-primary-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary-500 to-purple-600 p-2 rounded-lg"
              >
                <SafeIcon icon={FiZap} className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                CodeCraft
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-400 ${
                    location.pathname === item.path ? 'text-primary-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        className={`fixed inset-x-0 top-16 z-40 bg-dark-900/95 backdrop-blur-lg border-b border-primary-500/20 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-gray-300 hover:bg-dark-800'
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-dark-900/90 backdrop-blur-lg border-t border-primary-500/20">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-400'
                    : 'text-gray-400 hover:text-primary-400'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-6 h-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;