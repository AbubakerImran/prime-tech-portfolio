import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Brain, Smartphone, BarChart3, Shield } from 'lucide-react';

/**
 * ServicesSection Component
 * Displays services with animated cards and icons
 */

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    icon: <Brain className="w-8 h-8" />,
    features: ['Machine Learning', 'NLP', 'Computer Vision'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications',
    icon: <Code className="w-8 h-8" />,
    features: ['React', 'Next.js', 'Full Stack'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: <Smartphone className="w-8 h-8" />,
    features: ['React Native', 'Flutter', 'Native'],
    color: 'from-lime-500 to-green-500',
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['BI Tools', 'Data Visualization', 'Dashboards'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
    icon: <Zap className="w-8 h-8" />,
    features: ['AWS', 'Azure', 'GCP'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Security',
    description: 'Enterprise-grade security and compliance',
    icon: <Shield className="w-8 h-8" />,
    features: ['Encryption', 'Compliance', 'Auditing'],
    color: 'from-red-500 to-pink-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-purple-950/5 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-lime-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.color}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(0, 217, 255, 0.1), transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to get started with your next project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
