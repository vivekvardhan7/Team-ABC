import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Code, Brain, Smartphone, Globe, Database } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems that learn, adapt, and deliver results',
      features: [
        'Custom AI Chatbots',
        'Recommendation Systems',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'ML Model Deployment'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
      gradient: 'from-cyan-400 to-blue-500',
      pricing: '₹50,000 - ₹2,00,000'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web applications with modern architecture',
      features: [
        'React/Next.js Frontend',
        'Node.js/Python Backend',
        'Database Design',
        'API Development',
        'Cloud Deployment',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      gradient: 'from-purple-500 to-pink-500',
      pricing: '₹30,000 - ₹1,50,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps with native performance',
      features: [
        'React Native Development',
        'iOS & Android Apps',
        'Real-time Features',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
      gradient: 'from-green-400 to-emerald-500',
      pricing: '₹40,000 - ₹1,80,000'
    },
    {
      icon: Globe,
      title: 'Interactive Portfolios',
      description: 'Stunning portfolios that showcase your brand perfectly',
      features: [
        '3D Animations',
        'Interactive Elements',
        'SEO Optimization',
        'Content Management',
        'Analytics Integration',
        'Mobile Responsive'
      ],
      technologies: ['Three.js', 'GSAP', 'React', 'Tailwind CSS'],
      gradient: 'from-orange-400 to-red-500',
      pricing: '₹15,000 - ₹75,000'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your requirements and goals',
      icon: '🔍'
    },
    {
      step: '02', 
      title: 'Design',
      description: 'Creating wireframes and interactive prototypes',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Building with cutting-edge technologies',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'Launch and ongoing support & maintenance',
      icon: '🚀'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20 px-4 relative"
    >
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-white">Our</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to stunning web experiences, we craft digital products that drive results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="cyber-card rounded-xl p-8 group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 text-sm">Starting from</span>
                    <div className="text-xl font-bold text-white">{service.pricing}</div>
                  </div>
                  <Link
                    to="/contact"
                    className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project's success from concept to launch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="cyber-card rounded-xl p-6 h-full hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-3xl font-orbitron font-bold text-cyan-400 mb-3">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees. No surprises. Just honest pricing for exceptional work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹25,000',
                description: 'Perfect for small projects and MVPs',
                features: [
                  'Basic Web Application',
                  'Responsive Design',
                  'Database Integration',
                  '1 Month Support',
                  'Source Code Included'
                ],
                gradient: 'from-blue-500 to-cyan-500',
                popular: false
              },
              {
                name: 'Professional',
                price: '₹75,000',
                description: 'Ideal for businesses and startups',
                features: [
                  'Advanced Web Application',
                  'Custom Features',
                  'API Integration',
                  'Performance Optimization',
                  '3 Months Support',
                  'Analytics & SEO'
                ],
                gradient: 'from-purple-500 to-pink-500',
                popular: true
              },
              {
                name: 'Enterprise',
                price: '₹1,50,000',
                description: 'For complex applications and AI integration',
                features: [
                  'Full-Stack Application',
                  'AI/ML Integration',
                  'Custom Integrations',
                  'Advanced Security',
                  '6 Months Support',
                  'Dedicated Support'
                ],
                gradient: 'from-orange-500 to-red-500',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`cyber-card rounded-xl p-8 relative ${plan.popular ? 'border-2 border-purple-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 bg-gradient-to-r ${plan.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card rounded-2xl p-12 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Ready to Start{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. Free consultation included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services