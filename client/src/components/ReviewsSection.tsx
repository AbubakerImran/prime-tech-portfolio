import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ReviewsSection Component
 * Displays client testimonials with carousel animation
 */

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVenture Inc',
    content: 'PRIME TECH transformed our business with their AI solutions. The team delivered beyond expectations and helped us scale 3x faster.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content: 'Exceptional service and attention to detail. Their AI-powered platform reduced our operational costs by 40% in just 3 months.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'DataFlow Systems',
    content: 'Working with PRIME TECH was a game-changer. Their expertise in AI and web development is unmatched in the industry.',
    rating: 5,
    avatar: '👩‍🚀',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'CloudNine Tech',
    content: 'The quality of work and professionalism demonstrated by PRIME TECH is outstanding. Highly recommended for any AI project.',
    rating: 5,
    avatar: '👨‍💻',
  },
];

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-purple-950/10 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
              Client Success Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from companies that transformed their business with PRIME TECH
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Review Content */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed italic"
              >
                "{currentReview.content}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="text-4xl">{currentReview.avatar}</div>
                <div>
                  <p className="font-bold text-white text-lg">{currentReview.name}</p>
                  <p className="text-cyan-400 text-sm">
                    {currentReview.role} at {currentReview.company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all border border-cyan-500/30"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </motion.button>

            {/* Indicator dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-cyan-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full transition-all border border-cyan-500/30"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </motion.button>
          </div>

          {/* Review counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-6 text-gray-500 text-sm"
          >
            {currentIndex + 1} / {reviews.length}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 text-center"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Avg Rating' },
            { number: '98%', label: 'Satisfaction' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
