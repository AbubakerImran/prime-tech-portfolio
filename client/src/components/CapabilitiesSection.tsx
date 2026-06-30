import { motion } from 'framer-motion';
import { Zap, Code, Palette, Rocket, Brain, Gauge } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI Generation',
    description: 'Lightning-fast AI-powered content and code generation that accelerates your development timeline.',
    color: '#00D9FF',
    size: 'col-span-1 row-span-1',
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Bespoke web applications tailored to your unique business needs and technical requirements.',
    color: '#B000FF',
    size: 'col-span-1 row-span-1',
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Stunning, modern interfaces that convert visitors into customers with precision UX/UI.',
    color: '#39FF14',
    size: 'col-span-1 row-span-1',
  },
  {
    icon: Rocket,
    title: 'E-commerce Optimization',
    description: 'High-converting storefronts that maximize revenue and streamline customer experiences.',
    color: '#FF006E',
    size: 'col-span-1 row-span-1',
  },
  {
    icon: Gauge,
    title: 'Performance First',
    description: 'Lightning-fast load times and optimized performance across all devices and networks.',
    color: '#00D9FF',
    size: 'col-span-1 row-span-1',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From concept to production in record time. We move as fast as your ambitions.',
    color: '#39FF14',
    size: 'col-span-1 row-span-1',
  },
];

export default function CapabilitiesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="capabilities" className="relative py-24 bg-background overflow-hidden scroll-mt-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{
        background: 'radial-gradient(circle, #00D9FF 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our AI Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tools and expertise to transform your vision into reality. Fast, smart, and unstoppable.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{
                  boxShadow: `0 0 20px ${capability.color}20`,
                }}
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${capability.color}10 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${capability.color}30 0%, transparent 100%)`,
                    pointerEvents: 'none',
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 inline-block p-3 rounded-lg"
                    style={{
                      background: `${capability.color}15`,
                      color: capability.color,
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="mt-4 h-1 rounded-full"
                    style={{ backgroundColor: capability.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
