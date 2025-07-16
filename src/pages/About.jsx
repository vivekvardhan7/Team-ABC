import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import GlassCard from '../components/GlassCard';

const { FiMapPin, FiGraduationCap, FiCode, FiUsers, FiAward, FiHeart, FiTarget, FiTrendingUp } = FiIcons;

const About = () => {
  const teamMembers = [
    {
      name: "Sai Vivek",
      role: "Lead Developer & Project Manager",
      university: "NIT Mizoram",
      avatar: "SV",
      skills: ["React", "Node.js", "Python", "AI/ML", "Project Management"],
      specializations: ["Full Stack Development", "AI/ML Integration", "System Architecture"],
      achievements: ["Led 20+ successful projects", "AI/ML certification", "Open source contributor"],
      gradient: "from-primary-500 to-purple-600"
    },
    {
      name: "Anand Sai",
      role: "Backend, Database, and AI/ML Developer",
      university: "Gitam University",
      avatar: "AS",
      skills: ["Python", "Node.js", "SQL", "MongoDB", "FastAPI", "TensorFlow"],
      specializations: ["Backend Development", "Database Management", "API Development", "Machine Learning", "Data Engineering", "System Integration"],
      achievements: ["Designed 30+ backend systems", "Database optimization expert", "AI/ML project contributor"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const values = [
    {
      icon: FiTarget,
      title: "Mission-Driven",
      description: "We're committed to transforming businesses through innovative technology solutions that drive real results."
    },
    {
      icon: FiHeart,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships by delivering exceptional value and support."
    },
    {
      icon: FiTrendingUp,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge."
    },
    {
      icon: FiUsers,
      title: "Collaborative",
      description: "We work closely with our clients as partners, ensuring every project reflects your vision and goals."
    }
  ];

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
              Meet CodeCraft Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Two passionate developers from premier institutions, united by a shared vision to transform 
              businesses through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">Our Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Combining expertise from top engineering institutions with real-world experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GlassCard className="h-full">
                  <div className="text-center mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-2xl">{member.avatar}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-primary-400 font-medium mb-2">{member.role}</p>
                    <div className="flex items-center justify-center space-x-2 text-gray-400">
                      <SafeIcon icon={FiGraduationCap} className="w-4 h-4" />
                      <span className="text-sm">{member.university}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <SafeIcon icon={FiCode} className="w-5 h-5 mr-2 text-primary-400" />
                        Technical Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <SafeIcon icon={FiTarget} className="w-5 h-5 mr-2 text-primary-400" />
                        Specializations
                      </h4>
                      <ul className="space-y-2">
                        {member.specializations.map((spec, specIndex) => (
                          <li key={specIndex} className="text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <SafeIcon icon={FiAward} className="w-5 h-5 mr-2 text-primary-400" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="bg-gradient-to-r from-primary-500/10 to-purple-600/10 border-primary-500/20">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  CodeCraft Solutions was born from a shared vision between two passionate developers 
                  who met during their journey through India's premier engineering institutions. 
                  Sai Vivek from NIT Mizoram and Anand Sai from Gitam University discovered their 
                  complementary skills and shared passion for creating innovative digital solutions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  What started as collaborative projects during our studies evolved into a 
                  professional partnership focused on helping businesses transform their digital presence. 
                  We believe that great software isn't just about clean code—it's about understanding 
                  business needs and creating solutions that drive real results.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we combine our technical expertise with our understanding of business 
                  challenges to deliver solutions that not only meet requirements but exceed expectations. 
                  Every project we take on is an opportunity to showcase our commitment to quality, 
                  innovation, and client success.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">What Drives Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <SafeIcon icon={value.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 px-4 mb-20 md:mb-0">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-white">Our Development Philosophy</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiCode} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Code Quality</h3>
                  <p className="text-gray-300 text-sm">Clean, maintainable, and scalable code that stands the test of time</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiUsers} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">User-Centric</h3>
                  <p className="text-gray-300 text-sm">Every feature designed with the end-user experience in mind</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Future-Ready</h3>
                  <p className="text-gray-300 text-sm">Solutions built to adapt and grow with your business needs</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;