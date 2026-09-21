import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Palette, 
  Layout, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  Send,
  Plus,
  Trash2,
  Settings,
  Lock,
  Upload,
  Image as ImageIcon,
  Facebook,
  Phone,
  Twitter
} from 'lucide-react';
import { Project } from './types';

// --- Default Initial Seed Projects ---
const INITIAL_PROJECTS: Project[] = [
  { id: '1', title: 'Modern E-commerce', category: 'Web Development', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80', projectLink: 'https://ecommerce.example.com' },
  { id: '2', title: 'Brand Identity System', category: 'Graphic Design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80', projectLink: 'https://behance.net' },
  { id: '3', title: 'Fitness App UI', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80', projectLink: 'https://dribbble.com' },
  { id: '4', title: 'Corporate Website', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', projectLink: 'https://corporate.example.com' },
  { id: '5', title: 'Minimalist Logo Pack', category: 'Graphic Design', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80', projectLink: 'https://branding.example.com' },
  { id: '6', title: 'SaaS Dashboard', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', projectLink: 'https://dashboard.example.com' },
];

const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M22 10.5h-5.5v1.5H22v-1.5zm-5.5 4.13c0 .88.66 1.37 1.52 1.37.7 0 1.3-.3 1.54-.78h1.4c-.31 1.25-1.46 2.28-2.94 2.28-1.92 0-3.02-1.37-3.02-3.32a3.09 3.09 0 013.06-3.26c1.86 0 2.87 1.32 2.87 3.08v.63H16.5zm3.03-1.07c-.03-.78-.49-1.34-1.44-1.34-.84 0-1.45.56-1.57 1.34h3.01zM9.54 11.53c0 .64-.32 1-.95 1.15.77.21 1.15.65 1.15 1.47 0 1.7-1.11 2.35-3 2.35H2V6.5h4.48c1.86 0 2.76.7 2.76 2.06 0 .75-.38 1.44-.95 1.69.83.2 1.25.61 1.25 1.28zm-4.32-3h-1.5v2.24h1.49c.89 0 1.27-.41 1.27-1.12s-.38-1.12-1.26-1.12zm1.65 6.06c0-.75-.41-1.18-1.37-1.18h-1.78v2.33h1.74a1.23 1.23 0 001.41-1.15z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-white flex items-center gap-1"
        >
          <span>KH</span><span className="text-brand-primary">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label="Toggle navigation menu"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4">
            Welcome to my world
          </h2>
          <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
            I'm <span className="text-gradient">Kamal Hossain</span>
            <br />
            Crafting Digital Experiences.
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            A passionate Graphic Designer and Web Developer focused on building beautiful, functional, and user-centric digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 group"
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
              alt="Kamal Hossain Studio Workspace" 
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
              <Palette size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Design</p>
              <p className="text-sm font-bold">Expert</p>
            </div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary">
              <Code size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Development</p>
              <p className="text-sm font-bold">Fullstack</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '120+' },
    { label: 'Happy Clients', value: '80+' },
  ];

  return (
    <section id="about" className="py-24 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a creative professional based in Bangladesh, bridging the gap between visual aesthetics and technical implementation. With a background in both graphic design and web development, I provide a comprehensive approach to digital branding.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether it's designing a compelling brand identity or building a high-performance web application, I strive for excellence in every pixel and line of code.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl">
                <Layout className="text-brand-primary mb-4" />
                <h3 className="text-xl mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-500">Creating intuitive interfaces that users love.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Globe className="text-brand-secondary mb-4" />
                <h3 className="text-xl mb-2">Web Apps</h3>
                <p className="text-sm text-gray-500">Building scalable and responsive web solutions.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="glass p-6 rounded-2xl">
                <Palette className="text-purple-500 mb-4" />
                <h3 className="text-xl mb-2">Branding</h3>
                <p className="text-sm text-gray-500">Defining unique visual identities for businesses.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <Code className="text-orange-500 mb-4" />
                <h3 className="text-xl mb-2">Clean Code</h3>
                <p className="text-sm text-gray-500">Writing maintainable and efficient codebases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PortfolioProps {
  projects: Project[];
  onDeleteProject?: (id: string) => void;
  isAdmin: boolean;
}

const Portfolio = ({ projects, onDeleteProject, isAdmin }: PortfolioProps) => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl mb-4">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects across various disciplines of design and development.
          </p>
          {isAdmin && (
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary text-xs px-3 py-1.5 rounded-full font-mono font-medium">
              <span className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-ping" />
              Admin Mode Active: Delete/Edit Controls visible
            </div>
          )}
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-gray-400 text-lg mb-4">No projects found. Use Admin panel below to add some!</p>
            <a href="#admin" className="px-6 py-3 bg-brand-primary text-white rounded-xl inline-block hover:bg-blue-600 transition-all font-semibold">
              Add Your First Project
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-bg-card border border-white/10"
                >
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  
                  {/* Hover info layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-brand-primary text-sm font-mono mb-1">{project.category}</p>
                    <h3 className="text-2xl text-white mb-4 font-bold">{project.title}</h3>
                    
                    <div className="flex gap-4 items-center">
                      {project.projectLink && (
                        <a 
                          href={project.projectLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-white text-sm font-semibold hover:text-brand-primary transition-colors cursor-pointer"
                        >
                          View Project <ExternalLink size={16} />
                        </a>
                      )}
                      
                      {isAdmin && onDeleteProject && (
                        <button
                          onClick={() => onDeleteProject(project.id)}
                          className="ml-auto bg-red-600/90 text-white p-2.5 rounded-xl hover:bg-red-700 transition"
                          title="Delete Project"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Non-hover indicator for admin deletion accessibility to ensure touch friendly UI */}
                  {isAdmin && onDeleteProject && (
                    <div className="absolute top-3 right-3 z-20 group-hover:hidden">
                      <button
                        onClick={() => onDeleteProject(project.id)}
                        className="bg-red-600/90 hover:bg-red-700 text-white p-2 rounded-xl transition shadow-lg"
                        title="Delete Project"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites built with React, Next.js, PHP, Laravel and Tailwind CSS. Fast, responsive, and SEO-friendly.',
      color: 'text-blue-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Logo design, brand guidelines, and marketing materials that make your business stand out.',
      color: 'text-emerald-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design process to create intuitive and engaging digital experiences.',
      color: 'text-purple-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Improving your online visibility and search engine rankings to drive more traffic.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a wide range of services to help you build and grow your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl transition-all"
            >
              <div className={`${service.color} mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setErrorMessage('');

    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Fallback simulation if no key is defined yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          from_name: 'Kamal Hossain Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setErrorMessage(data.message || 'ইমেল পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে অ্যাক্সেস কি যাচাই করুন।');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('একটি নেটওয়ার্ক ত্রুটি ঘটেছে। পুনরায় চেষ্টা করুন।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-12">
              Have a project in mind? Or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <a href="mailto:kamalhossainm5443@gmail.com" className="text-lg font-medium hover:text-brand-primary transition-colors">kamalhossainm5443@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+8801575573228" className="text-lg font-medium hover:text-brand-primary transition-colors">+880 1575573228</a>
                    <a href="tel:+8801645515443" className="text-lg font-medium hover:text-brand-primary transition-colors">+880 1645515443</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12 flex-wrap">
              {[
                { icon: <Github size={20} />, url: 'https://github.com/Kamal-Hossain52625', label: 'GitHub' },
                { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/kamal-hossain-4087a7297', label: 'LinkedIn' },
                { icon: <Facebook size={20} />, url: 'https://www.facebook.com/profile.php?id=100005506395614', label: 'Facebook' },
                { icon: <Twitter size={20} />, url: 'https://x.com/kamal_hoss5792', label: 'X (Twitter)' },
                { icon: <BehanceIcon size={20} />, url: 'https://www.behance.net/kamalhossain66', label: 'Behance' },
                { icon: <Mail size={20} />, url: 'https://www.kamalhossainm5443@gmail.com', label: 'Email' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={social.label}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Kamal Hossain"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="kamal@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-primary text-white rounded-xl font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 bg-brand-secondary/20 border border-brand-secondary/30 rounded-xl text-brand-secondary text-sm font-semibold text-center mt-4"
                >
                  ✓ আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!
                </motion.div>
              )}

              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 bg-red-600/20 border border-red-600/30 rounded-xl text-red-400 text-sm font-semibold text-center mt-4"
                >
                  ✗ {errorMessage}
                </motion.div>
              )}

              {!(import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY && (
                <p className="text-[11px] text-gray-500 mt-4 text-center leading-relaxed">
                  💡 আপনার আসল জিমেইলে মেসেজ পাওয়ার জন্য <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Web3Forms</a> থেকে ফ্রী Access Key নিয়ে সেটিংস এ <code className="text-brand-primary bg-white/5 px-1 py-0.5 rounded font-mono">VITE_WEB3FORMS_ACCESS_KEY</code> সেট করুন।
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Beautiful Admin Area component ---
interface AdminAreaProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (p: Omit<Project, 'id'>) => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const AdminArea = ({ isOpen, onClose, onAddProject, isAdmin, setIsAdmin }: AdminAreaProps) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [addSuccess, setAddSuccess] = useState(false);

  // File upload state and helpers
  const [imageSource, setImageSource] = useState<'upload' | 'url'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  
  // Quick image suggestions
  const imagePresets = [
    { name: 'Abstract Art', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
    { name: 'Developer Desk', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
    { name: 'Minimal Workspace', url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80' },
    { name: 'Branding Project', url: 'https://images.unsplash.com/photo-1541462608141-2f682d8c3bc5?auto=format&fit=crop&w=600&q=80' },
  ];

  // Process and downscale standard images to fit localStorage perfectly
  const processAndSetImage = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('অনুগ্রহ করে শুধুমাত্র ইমেজ সিলেক্ট করুন।');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        const maxDim = 800;
        let width = img.width;
        let height = img.height;
        
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.82);
          setImage(compressedBase64);
        } else {
          setImage(imgUrl);
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processAndSetImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processAndSetImage(file);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '52625') { // Support both updated and seed PIN
      setIsAdmin(true);
      setError('');
    } else {
      setError('Incorrect Pin. Try to Correct Pin.');
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    // Fallback to random image if empty
    const finalImage = image.trim() || `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 900000)}?auto=format&fit=crop&w=600&q=80`;

    onAddProject({
      title,
      category,
      image: finalImage,
      projectLink: url.trim() || undefined
    });

    // Reset fields
    setTitle('');
    setImage('');
    setUrl('');
    setAddSuccess(true);
    setTimeout(() => {
      setAddSuccess(false);
    }, 4000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-hidden"
    >
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />
      
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative bg-[#0c0c0e]/95 border border-white/10 w-full max-w-5xl rounded-3xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto z-10 space-y-6"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition cursor-pointer"
          title="বন্ধ করুন"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6 pt-2">
          <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-3 border border-brand-primary/20">
            <Lock size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Portfolio Admin Area</h2>
          <p className="text-gray-400 text-sm">
            {isAdmin 
              ? 'ম্যানেজার প্যানেল: আপনার প্রজেক্টগুলো অ্যাড বা রিমুভ করুন।' 
              : 'প্রজেক্ট যোগ ও ডিলিট করার জন্য লগইন করুন'}
          </p>
        </div>

        {!isAdmin ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass max-w-md mx-auto p-8 rounded-3xl"
          >
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Admin PIN</label>
                <input 
                  type="password" 
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter PIN"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary text-center font-mono text-lg tracking-widest transition-colors mb-2"
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center font-medium pb-2">{error}</p>}
              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary text-white rounded-xl font-semibold hover:bg-blue-600 transition cursor-pointer"
              >
                Access Admin Controls
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Form Column */}
            <div className="md:col-span-2 glass p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <Plus size={20} className="text-brand-primary" /> নতুন প্রজেক্ট যুক্ত করুন
              </h3>
              
              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Project Title (শিরোনাম)</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="যেমন: E-commerce Website, Logo Design"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary text-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Category (ক্যাটাগরি)</label>
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary text-white transition-colors"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Live/Demo Link (অপショナル)</label>
                    <input 
                      type="url" 
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Project Image (প্রজেক্টের কভার ফটো)</label>
                  
                  {/* Select Upload vs URL tabs */}
                  <div className="flex border-b border-white/10 mb-4 bg-white/5 rounded-t-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setImageSource('upload')}
                      className={`flex-1 py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 ${imageSource === 'upload' ? 'bg-brand-primary text-white font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                      <Upload size={14} /> Computer Upload
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageSource('url')}
                      className={`flex-1 py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2 ${imageSource === 'url' ? 'bg-brand-primary text-white font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                    >
                      <ImageIcon size={14} /> Image URL
                    </button>
                  </div>

                  {/* Upload Tab Content */}
                  {imageSource === 'upload' ? (
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${isDragging ? 'border-brand-primary bg-brand-primary/5' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
                    >
                      {image ? (
                        <div className="space-y-3">
                          <div className="relative inline-block max-w-full h-32 rounded-lg overflow-hidden border border-white/15 bg-black/20">
                            <img src={image} alt="Upload preview" className="h-full object-contain mx-auto" />
                            <button
                              type="button"
                              onClick={() => setImage('')}
                              className="absolute top-2 right-2 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition shadow-md cursor-pointer"
                              title="বাদ দিন"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-400">ছবিটি সফলভাবে রেডি করা হয়েছে!</p>
                        </div>
                      ) : (
                        <label className="cursor-pointer space-y-2 block py-3">
                          <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageFileChange}
                            className="hidden" 
                          />
                          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mx-auto text-gray-400">
                            <Upload size={20} />
                          </div>
                          <div className="text-xs text-gray-300 leading-relaxed">
                            <span className="text-brand-primary font-semibold">ক্লিক করে ছবি সিলেক্ট করুন</span> <br/> অথবা এখানে ড্র্যাগ এবং ড্রপ করুন
                          </div>
                          <p className="text-[10px] text-gray-500 font-mono">PNG, JPG, WEBP (Auto-optimized)</p>
                        </label>
                      )}
                    </div>
                  ) : (
                    /* URL Tab Content */
                    <div className="space-y-4">
                      <input 
                        type="url" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="https://images.unsplash.com/... (বা ফাঁকা রাখুন)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary text-white transition-colors font-mono text-sm"
                      />
                      {image && (
                        <div className="relative inline-block max-w-full h-24 rounded-lg overflow-hidden border border-white/15 bg-black/20">
                          <img src={image} alt="Preview link" className="h-full object-contain mx-auto" referrerPolicy="no-referrer" />
                          <button
                            type="button"
                            onClick={() => setImage('')}
                            className="absolute top-1.5 right-1.5 p-1 bg-red-600 hover:bg-red-700 text-white rounded-full transition shadow-md cursor-pointer"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                >
                  <Plus size={18} /> Add Project
                </button>

                {addSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="p-4 bg-brand-secondary/20 border border-brand-secondary/30 rounded-xl text-brand-secondary text-sm font-semibold text-center mt-4"
                  >
                    ✓ নতুন প্রজেক্ট সফলভাবে যুক্ত করা হয়েছে! নিচে পোর্টফোলিও গ্রিডে দেখুন।
                  </motion.div>
                )}
              </form>
            </div>

            {/* Quick Actions / Preset Images */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-3xl space-y-4">
                <h4 className="font-semibold text-white">Preset High-Quality Images</h4>
                <p className="text-xs text-gray-400">এটির মাধ্যমে চমৎকার কভার ছবি সিলেক্ট করে নিতে পারেন:</p>
                <div className="grid grid-cols-2 gap-2">
                  {imagePresets.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => { setImage(p.url); setImageSource('url'); }}
                      className={`relative aspect-video rounded-xl overflow-hidden border transition ${image === p.url ? 'border-brand-primary scale-95' : 'border-white/10 hover:border-white/30'}`}
                      title={p.name}
                    >
                      <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-bold text-white uppercase">{p.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-3xl space-y-4">
                <h4 className="font-semibold text-white">Admin Controls</h4>
                <p className="text-xs text-gray-400">ম্যানেজ শেষ হলে এডমিন মুড থেকে বের হয়ে ডেমো দেখতে পারেন।</p>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition text-sm flex items-center justify-center gap-2"
                >
                  <Lock size={14} /> Lock Admin Panel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-display font-bold text-white">
          KH<span className="text-brand-primary">.</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Kamal Hossain. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('kamal_portfolio_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse portfolio projects', e);
      }
    }
    return INITIAL_PROJECTS;
  });

  const checkIsAdminRoute = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');
    const search = window.location.search.toLowerCase();
    return (
      path === '/admin' || 
      hash === '#admin' || 
      hash === '#/admin' || 
      search.includes('admin=true') || 
      search.includes('admin')
    );
  };

  const [isAdmin, setIsAdmin] = useState(false);
  const [projectToDeleteId, setProjectToDeleteId] = useState<string | null>(null);
  const [showAdminModal, setShowAdminModal] = useState(() => checkIsAdminRoute());

  // Listen for URL changes (e.g. user navigating or typing /admin or #admin)
  useEffect(() => {
    const handleUrlChange = () => {
      if (checkIsAdminRoute()) {
        setShowAdminModal(true);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleCloseAdminModal = () => {
    setShowAdminModal(false);
    if (checkIsAdminRoute()) {
      const cleanPath = window.location.pathname === '/admin' ? '/' : window.location.pathname;
      window.history.pushState(null, '', cleanPath);
    }
  };

  // Save to localStorage whenever projects state changes
  useEffect(() => {
    localStorage.setItem('kamal_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (newProjectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...newProjectData,
      id: Date.now().toString()
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const handleDeleteRequest = (id: string) => {
    setProjectToDeleteId(id);
  };

  const confirmDeleteProject = () => {
    if (projectToDeleteId) {
      setProjects(prev => prev.filter(p => p.id !== projectToDeleteId));
      setProjectToDeleteId(null);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio 
          projects={projects} 
          onDeleteProject={handleDeleteRequest}
          isAdmin={isAdmin}
        />
        <Services />
        <Contact />
      </main>
      <Footer />

      {/* Admin Panel Modal Overlay */}
      <AnimatePresence>
        {showAdminModal && (
          <AdminArea 
            isOpen={showAdminModal}
            onClose={handleCloseAdminModal}
            onAddProject={handleAddProject}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
          />
        )}
      </AnimatePresence>

      {/* Beautiful Custom Deletion Modal Area */}
      <AnimatePresence>
        {projectToDeleteId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-[#121214] border border-white/10 p-6 rounded-3xl max-w-sm w-full space-y-6 shadow-2xl text-center relative"
            >
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
                <Trash2 size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">ডিলিট করতে চান?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  নিশ্চিত তো? ডিলিট করলে এই প্রজেক্টটি পোর্টফোলিও থেকে চিরতরে মুছে যাবে।
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setProjectToDeleteId(null)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition text-sm cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="button"
                  onClick={confirmDeleteProject}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition text-sm cursor-pointer shadow-lg shadow-red-600/20"
                >
                  ডিলিট করুন
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
