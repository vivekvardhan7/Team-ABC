import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import GlassCard from '../components/GlassCard';

const { FiExternalLink, FiGithub, FiPlay, FiCode, FiZap, FiShoppingCart, FiSettings, FiFilter, FiArrowRight } = FiIcons;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: FiCode },
    { id: 'web', name: 'Web Apps', icon: FiCode },
    { id: 'ai', name: 'AI/ML', icon: FiZap },
    { id: 'ecommerce', name: 'E-commerce', icon: FiShoppingCart },
    { id: 'software', name: 'Software', icon: FiSettings }
  ];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Restaurant Ordering System",
      description: "Smart ordering platform with ML-based food recommendations, real-time order tracking, and integrated payment processing.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "Stripe"],
      features: [
        "Machine Learning Recommendations",
        "Real-time Order Tracking",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "Customer Analytics"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    },
    {
      id: 2,
      title: "Fitness Tracker with AI Coach",
      description: "Comprehensive fitness application with AI-powered workout planning, progress tracking, and personalized nutrition advice.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
      features: [
        "AI Workout Planning",
        "Progress Analytics",
        "Nutrition Recommendations",
        "Social Features",
        "Wearable Integration"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    },
    {
      id: 3,
      title: "Real Estate Platform",
      description: "Modern real estate platform with ML-powered property valuation, virtual tours, and advanced search capabilities.",
      category: "web",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Python", "PostgreSQL", "Redis", "AWS"],
      features: [
        "ML Price Prediction",
        "Virtual Tour Integration",
        "Advanced Search Filters",
        "Agent Dashboard",
        "Property Management"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    },
    {
      id: 4,
      title: "Educational Platform",
      description: "Interactive learning platform with AI tutoring, progress tracking, and adaptive learning paths for students.",
      category: "web",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI"],
      features: [
        "AI Tutor Chatbot",
        "Interactive Learning Modules",
        "Progress Tracking",
        "Video Conferencing",
        "Assignment Management"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    },
    {
      id: 5,
      title: "E-commerce Fashion Store",
      description: "Modern fashion e-commerce platform with AR try-on, inventory management, and advanced analytics.",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "AR Virtual Try-On",
        "Inventory Management",
        "Customer Analytics",
        "Multi-vendor Support",
        "Mobile App"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    },
    {
      id: 6,
      title: "Business Process Automation",
      description: "Custom workflow automation system for enterprises with document processing, approval workflows, and reporting.",
      category: "software",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Workflow Automation",
        "Document Processing",
        "Approval Workflows",
        "Advanced Reporting",
        "Integration APIs"
      ],
      liveDemo: "#",
      github: "#",
      caseStudy: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 pt-20 pb-20 md:pb-0"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of innovative projects that showcase our expertise in creating 
              cutting-edge digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <SafeIcon icon={category.icon} className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveDemo}
                        className="bg-white text-dark-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        title="Live Demo"
                      >
                        <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        className="bg-white text-dark-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
                        title="GitHub"
                      >
                        <SafeIcon icon={FiGithub} className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-xs flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded text-xs border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <a
                        href={project.liveDemo}
                        className="flex-1 bg-gradient-to-r from-primary-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <SafeIcon icon={FiPlay} className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 bg-dark-800 text-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-dark-700 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <SafeIcon icon={FiGithub} className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">Project Impact</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our projects have made a real difference for businesses and users worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "10k+", label: "Users Served" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mb-20 md:mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="bg-gradient-to-r from-primary-500/20 to-purple-600/20 border-primary-500/30">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. We're excited to work on your next big idea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group bg-white text-dark-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="group bg-transparent border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-dark-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Services</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;