import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

type ContactFormField = 'name' | 'email' | 'phone' | 'message';

type ContactFormData = Record<ContactFormField, string>;

type ContactFormErrors = Partial<Record<ContactFormField, string>>;

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

function validateField(field: ContactFormField, value: string, data: ContactFormData): string {
  const trimmedValue = value.trim();

  switch (field) {
    case 'name':
      if (!trimmedValue) return 'Your name is required.';
      if (trimmedValue.length < 2) return 'Please enter at least 2 characters.';
      return '';
    case 'email':
      if (!trimmedValue) return 'Email is required.';
      if (!emailPattern.test(trimmedValue)) return 'Enter a valid email address.';
      return '';
    case 'phone':
      if (!trimmedValue) return '';
      if (!phonePattern.test(trimmedValue) || trimmedValue.replace(/\D/g, '').length < 7) {
        return 'Enter a valid phone number or leave it blank.';
      }
      return '';
    case 'message':
      if (!trimmedValue) return 'Message is required.';
      if (trimmedValue.length < 20) return 'Please add at least 20 characters.';
      return '';
    default:
      return '';
  }
}

function validateForm(data: ContactFormData): ContactFormErrors {
  return {
    name: validateField('name', data.name, data),
    email: validateField('email', data.email, data),
    phone: validateField('phone', data.phone, data),
    message: validateField('message', data.message, data),
  };
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactFormField, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as ContactFormField;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[fieldName] || submitAttempted) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: validateField(fieldName, value, {
          ...formData,
          [fieldName]: value,
        }),
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as ContactFormField;

    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [fieldName]: validateField(fieldName, value, formData),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) {
      toast.error('Please fix the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent! We\'ll be in touch soon.');
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
      setSubmitAttempted(false);
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
    <section id="contact" className="relative py-24 bg-background overflow-hidden scroll-mt-24">
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
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  animate={errors.name ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={errors.name ? { duration: 0.35 } : { duration: 0.4, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                    onBlur={handleBlur}
                  placeholder="John Doe"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
                  <AnimatePresence initial={false}>
                    {errors.name && (
                      <motion.p
                        id="name-error"
                        key="name-error"
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 text-sm text-destructive overflow-hidden"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  animate={errors.email ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={errors.email ? { duration: 0.35 } : { duration: 0.4, delay: 0.15 }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                    onBlur={handleBlur}
                  placeholder="john@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
                  <AnimatePresence initial={false}>
                    {errors.email && (
                      <motion.p
                        id="email-error"
                        key="email-error"
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 text-sm text-destructive overflow-hidden"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
              </motion.div>

              {/* Phone field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  animate={errors.phone ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={errors.phone ? { duration: 0.35 } : { duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                    onBlur={handleBlur}
                  placeholder="+1 (555) 123-4567"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
                  <AnimatePresence initial={false}>
                    {errors.phone && (
                      <motion.p
                        id="phone-error"
                        key="phone-error"
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 text-sm text-destructive overflow-hidden"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  animate={errors.message ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={errors.message ? { duration: 0.35 } : { duration: 0.4, delay: 0.25 }}
              >
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                    onBlur={handleBlur}
                  placeholder="Tell us about your project..."
                  rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full bg-background border-border text-white placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
                  <AnimatePresence initial={false}>
                    {errors.message && (
                      <motion.p
                        id="message-error"
                        key="message-error"
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 text-sm text-destructive overflow-hidden"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
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
