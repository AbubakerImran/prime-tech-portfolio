import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Ideate',
    description: 'We collaborate with you to understand your vision, goals, and unique challenges.',
    icon: '💡',
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our AI-powered design system creates stunning, conversion-focused interfaces.',
    icon: '🎨',
  },
  {
    number: 3,
    title: 'Build',
    description: 'Lightning-fast development using cutting-edge AI tools and best practices.',
    icon: '⚡',
  },
  {
    number: 4,
    title: 'Deploy',
    description: 'Seamless deployment with performance optimization and continuous monitoring.',
    icon: '🚀',
  },
  {
    number: 5,
    title: 'Scale',
    description: 'Your solution grows with your business. Always fast, always reliable.',
    icon: '📈',
  },
];

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full opacity-10" style={{
        background: 'radial-gradient(circle, #B000FF 0%, transparent 70%)',
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
            Our Accelerated Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch in record time. Our proven methodology ensures quality, speed, and results.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline connector */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-6 md:left-8 top-20 w-1 h-24 md:h-32"
                  style={{
                    background: 'linear-gradient(180deg, #00D9FF 0%, #B000FF 100%)',
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Step circle */}
              <motion.div
                className="relative flex-shrink-0 w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>

              {/* Step content */}
              <motion.div
                className="flex-1 pt-2 md:pt-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Step number badge */}
                <motion.div
                  className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(0, 217, 255, 0.1)',
                    color: '#00D9FF',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                  }}
                >
                  Step {step.number} of {steps.length}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-center"
          style={{
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to accelerate your growth?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how PRIME TECH can transform your vision into reality. Fast, smart, and unstoppable.
          </p>
          <motion.button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.7)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
