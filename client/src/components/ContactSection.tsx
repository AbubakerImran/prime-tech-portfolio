import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

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
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{
        background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{
        background: 'radial-gradient(circle, #FF006E 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Have a project in mind? We'd love to hear about it. Get in touch with our team and let's discuss how we can accelerate your growth.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(0, 217, 255, 0.1)',
                  color: '#00D9FF',
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@primetech.io</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(176, 0, 255, 0.1)',
                  color: '#B000FF',
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                  background: 'rgba(57, 255, 20, 0.1)',
                  color: '#39FF14',
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="mt-12 flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <motion.button
                  key={social}
                  className="px-4 py-2 rounded-lg border border-border text-sm font-semibold text-white hover:bg-card transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.1)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </motion.div>

              {/* Phone field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
