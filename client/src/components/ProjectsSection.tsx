import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectsSection Component
 * Displays dummy projects with hover animations and links
 */

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with machine learning predictions and interactive visualizations.',
    image: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
    tags: ['React', 'AI/ML', 'Data Viz'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with AI-powered recommendations and seamless checkout.',
    image: 'linear-gradient(135deg, #B000FF 0%, #39FF14 100%)',
    tags: ['Next.js', 'Stripe', 'AI'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Content Generation Engine',
    description: 'Automated content creation system powered by advanced AI models and natural language processing.',
    image: 'linear-gradient(135deg, #39FF14 0%, #FF006E 100%)',
    tags: ['Python', 'NLP', 'API'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Mobile App - Fitness Tracker',
    description: 'Cross-platform fitness app with AI coaching, real-time tracking, workout planning and social features.',
    image: 'linear-gradient(135deg, #FF006E 0%, #00D9FF 100%)',
    tags: ['React Native', 'AI', 'Cloud'],
    link: '#',
    github: '#',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest work showcasing AI-powered solutions and innovative web experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                {/* Project Image/Gradient */}
                <div
                  className="h-48 sm:h-56 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating icons on hover */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.link}
                      className="p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg transition-all"
                    >
                      <Github className="w-5 h-5 text-purple-400" />
                    </a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover border animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(0, 217, 255, 0.1), transparent)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
