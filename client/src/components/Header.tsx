import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg" style={{
            background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
            color: '#0A0E27',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          }}>
            P
          </div>
          <span className="font-bold text-lg text-white hidden sm:inline">
            PRIME TECH
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ color: '#00D9FF' }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.7)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden border-t border-border"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <nav className="container py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 mt-2 inline-flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #B000FF 100%)',
            }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
