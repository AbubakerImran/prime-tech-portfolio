import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ThreeDrain from './ThreeDrain';
import { Button } from './ui/button';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate headline with GSAP
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    }

    // Animate CTA buttons
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden bg-background">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/manus-storage/prime-tech-gradient-mesh_8dec6c53.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'drift 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(176, 0, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          className="flex flex-col space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
          <div>
            <h1
              ref={headlineRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 50%, #39FF14 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Innovate • Build • Grow
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Your ideas, supercharged by AI. Your timeline, accelerated by us. We don't just build
            websites—we build competitive advantages.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                }}
              >
                Launch Your Future
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Explore Our Work
              </Button>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>AI-Powered Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D element */}
        <motion.div
          className="relative h-96 lg:h-full min-h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <ThreeDrain />
          </div>

          {/* Glow effect around 3D element */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, 20px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(-20px, -20px); }
        }
      `}</style>
    </section>
  );
}
