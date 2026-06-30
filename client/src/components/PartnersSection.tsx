import React from 'react';
import { motion } from 'framer-motion';

/**
 * PartnersSection Component
 * Displays partner logos with smooth animations
 */

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: 'TechCorp', logo: '🚀' },
  { id: 2, name: 'CloudBase', logo: '☁️' },
  { id: 3, name: 'DataVault', logo: '🔐' },
  { id: 4, name: 'AILabs', logo: '🧠' },
  { id: 5, name: 'WebFlow', logo: '🌊' },
  { id: 6, name: 'DevHub', logo: '🛠️' },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const PartnersSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400">
            Partnering with the best companies in the world
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="relative h-24 md:h-28 flex items-center justify-center bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                {/* Logo */}
                <motion.div
                  className="text-4xl md:text-5xl relative z-10"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {partner.logo}
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent)',
                  }}
                />
              </div>

              {/* Partner name on hover */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs md:text-sm font-semibold text-cyan-400 whitespace-nowrap">
                  {partner.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20"
        >
          <p className="text-center text-gray-400 mb-6">
            And many more companies trust PRIME TECH
          </p>

          {/* Animated partner logos carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First set */}
              {partners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-3xl md:text-4xl opacity-50 hover:opacity-100 transition-opacity"
                >
                  {partner.logo}
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-3xl md:text-4xl opacity-50 hover:opacity-100 transition-opacity"
                >
                  {partner.logo}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
