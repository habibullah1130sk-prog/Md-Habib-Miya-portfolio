/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from "react";
import { 
  Plane, 
  Code, 
  PenTool, 
  Search, 
  Smartphone, 
  Ticket, 
  MapPin, 
  Globe, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook,
  ChevronUp,
  Menu,
  X,
  MessageCircle,
  Send,
  Moon,
  Sun
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string, key?: any }) => (
  <div className="text-center mb-12 md:mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy dark:text-white mb-4 tracking-tight px-4 break-words"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-[10px] md:text-sm font-medium uppercase tracking-[0.2em] px-6"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string, key?: any }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="theme-card p-6 md:p-8 flex flex-col group transition-all duration-500"
  >
    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white" />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-3 text-navy dark:text-white tracking-tight">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const SkillBadge = ({ name }: { name: string, key?: any }) => (
  <motion.span 
    whileHover={{ scale: 1.1, y: -2 }}
    className="px-4 py-2 bg-blue-50 dark:bg-white/5 text-primary font-bold rounded-xl text-[11px] uppercase tracking-wider border border-transparent hover:border-primary/30 transition-all"
  >
    {name}
  </motion.span>
);

const PortfolioCard = ({ title, category, image, overlayColor = "bg-primary/90" }: { title: string, category: string, image: string, key?: any, overlayColor?: string }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="rounded-2xl overflow-hidden group relative aspect-[4/3] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
  >
    <img 
      src={image} 
      alt={`${title} - ${category} Project by Md Habib Miya`} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      referrerPolicy="no-referrer"
      loading="lazy"
    />
    <div className={`absolute inset-0 ${overlayColor} p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
      <span className="text-[10px] font-bold uppercase opacity-80 mb-1 tracking-widest">{category}</span>
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
    </div>
  </motion.div>
);

const BlogCard = ({ title, description, image, date, category }: { title: string, description: string, image: string, date: string, category: string, key?: any }) => (
  <motion.article 
    whileHover={{ y: -8 }}
    className="theme-card flex flex-col h-full"
  >
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{category}</span>
        <span className="text-[10px] text-gray-400 font-bold">{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-navy dark:text-white leading-tight">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow line-clamp-3">{description}</p>
      <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
        Read More <Search size={14} />
      </button>
    </div>
  </motion.article>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const blogPosts = [
    {
      title: "How to Build a High-Performance Android App",
      description: "Discover the best practices for Android development using Kotlin and Jetpack Compose. Focus on efficiency, UI/UX, and scalability.",
      image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&q=80&w=800",
      date: "Oct 12, 2025",
      category: "Development"
    },
    {
       title: "Navigating Visa Requirements for Bangladeshis",
       description: "A comprehensive guide on processing visas for European and Asian countries. Tips on documentation and interview preparation.",
       image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
       date: "Sep 28, 2025",
       category: "Travel"
    },
    {
       title: "SEO Strategies for Bangladeshi Freelancers",
       description: "Learn how to rank your digital portfolio and attract local and international clients with advanced on-page SEO techniques.",
       image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800",
       date: "Sep 15, 2025",
       category: "Blogging"
    }
  ];

  const services = [
    { 
      icon: Plane, 
      title: "Visa Processing", 
      description: "Expert guidance for hassle-free visa applications to any destination globally." 
    },
    { 
      icon: Ticket, 
      title: "Air Ticket Booking", 
      description: "Find the best deals on domestic and international flights at competitive prices." 
    },
    { 
      icon: MapPin, 
      title: "Travel Consultation", 
      description: "Customized travel itineraries and professional advice for your dream vacation." 
    },
    { 
      icon: GraduationCap, 
      title: "Online Tutoring", 
      description: "Dedicated teaching sessions for students specializing in travel and tech subjects." 
    },
  ];

  const skills = [
    "Blogging", "SEO", "Travel Management", "Digital Marketing", 
    "Android App Development", "Java", "Kotlin", "React Native",
    "WordPress", "Content Writing", "Market Research"
  ];

  const portfolio = [
    { title: "Global Wings Travel Portal", category: "Travel Projects", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
    { title: "FitTrax - Fitness App", category: "Android Apps", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { title: "Dhaka Tourism Guide", category: "Travel Projects", image: "https://images.unsplash.com/photo-1590635293676-96b65377f0fc?auto=format&fit=crop&q=80&w=800" },
    { title: "TaskMaster - Productivity", category: "Android Apps", image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800" },
    { title: "Luxury Resorts Booking", category: "Travel Projects", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800" },
    { title: "WeatherNow", category: "Android Apps", image: "https://images.unsplash.com/photo-1530569673472-307dc017a8c0?auto=format&fit=crop&q=80&w=800" },
  ];

  const filteredPortfolio = activeFilter === "All" 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <div className={`${theme} transition-colors duration-500 overflow-x-clip`}>
      <div className="relative font-sans antialiased text-navy dark:text-white bg-white dark:bg-[#030303] min-h-screen selection:bg-primary/30 overflow-x-clip touch-pan-y">
        
        {/* Navigation */}
        <header>
          <nav className={`glass-nav ${
            isScrolled ? "py-2 md:py-3 shadow-sm" : "py-4 md:py-5 border-transparent"
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-navy dark:text-white">
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 shrink-0 text-xs sm:text-base">MH</div>
              <a href="#home" className="text-[11px] xs:text-sm sm:text-xl font-extrabold tracking-tighter uppercase whitespace-nowrap">MD <span className="text-primary text-glow">HABIB</span><span className="hidden xs:inline"> MIYA</span></a>
            </div>
            
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-10 text-[xs] font-bold uppercase tracking-[0.2em] items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="transition-colors hover:text-primary text-gray-500 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pl-4 border-l border-gray-200 dark:border-white/10">
                <button 
                  onClick={toggleTheme}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </li>
            </ul>

            <div className="hidden md:flex gap-4 items-center">
              <a href="#contact" className="theme-btn-primary !py-2.5 !px-6 text-xs uppercase tracking-widest">
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button 
                className="text-gray-900 dark:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0c] md:hidden flex flex-col p-8 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">MH</div>
                    <span className="text-xl font-extrabold tracking-tighter uppercase dark:text-white">MD <span className="text-primary text-glow">HABIB</span></span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-2xl text-navy dark:text-white">
                    <X size={24} />
                  </button>
                </div>
                
                <ul className="flex flex-col gap-6 mb-12">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-4xl xs:text-5xl font-black text-navy dark:text-white hover:text-primary transition-colors tracking-tight"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-auto space-y-8">
                  <div className="flex gap-4">
                    <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/md-habib-miya-118404253/" />
                    <SocialLink icon={Facebook} href="https://www.facebook.com/habib.hosen.5836711" />
                    <SocialLink icon={Github} href="#" />
                  </div>
                  <a href="#contact" className="theme-btn-primary w-full text-center !py-5 text-sm" onClick={() => setIsMenuOpen(false)}>
                    Start a Conversation
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        </header>

        <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 sm:pt-40 pb-20 md:pb-32 overflow-hidden bg-mesh min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full md:w-[60%] lg:w-[55%] text-center md:text-left"
              >
                <motion.span 
                  className="inline-block px-3 py-1.5 bg-primary/10 text-primary font-extrabold text-[9px] md:text-[10px] tracking-[0.25em] uppercase rounded-lg mb-6 border border-primary/20"
                >
                  Innovator & Digital Architect
                </motion.span>
              <h1 className="text-3xl xs:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-navy dark:text-white italic break-words">
                I'm <span className="text-primary not-italic text-glow block xs:inline">Habibullah</span><br className="hidden sm:block"/>
                <span className="text-xl xs:text-4xl md:text-5xl lg:text-6xl not-italic opacity-80 block lg:inline-block mt-2">Md Habib Miya.</span>
              </h1>
                <p className="text-[13px] sm:text-base md:text-xl text-gray-500 dark:text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium font-sans">
                  Empowering businesses through scalable <span className="text-navy dark:text-white font-bold underline decoration-primary/30">Android Solutions</span> and seamless <span className="text-navy dark:text-white font-bold underline decoration-primary/30">Travel Logistics</span> from Bangladesh.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                  <a href="#contact" className="theme-btn-primary px-8 py-3.5 sm:px-10 sm:py-5 text-xs sm:text-sm font-black whitespace-nowrap">
                    Start a Project
                  </a>
                  <a href="#portfolio" className="px-8 py-3.5 sm:px-10 sm:py-5 border border-gray-200 dark:border-white/10 text-navy dark:text-white font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-xs sm:text-sm whitespace-nowrap">
                    View Work
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full xs:w-[80%] md:w-[40%] lg:w-[45%] flex justify-center md:justify-end"
              >
                <div className="w-full aspect-[4/5] max-w-[280px] sm:max-w-sm relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 blur-2xl" />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                    alt="Md Habib Miya (Habibullah)" 
                    className="w-full h-full object-cover rounded-[2.5rem] border-2 border-white dark:border-white/10 shadow-2xl relative z-10 hover:grayscale transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* About Me */}
      <section id="about" className="py-16 md:py-32 bg-gray-50/50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch">
            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 flex flex-col"
            >
              <div className="theme-card flex flex-col items-center text-center h-full w-full max-w-full overflow-hidden mx-auto shadow-xl border border-gray-100 dark:border-white/10 !p-5 sm:!p-10">
                <div className="w-24 h-24 xs:w-36 xs:h-36 sm:w-44 sm:h-44 rounded-2xl border-2 sm:border-4 border-primary/20 dark:border-white/10 p-1 mb-6 flex-shrink-0 overflow-hidden bg-white/50 dark:bg-black/20">
                  <img 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600" 
                    alt="Md Habib Miya Profile" 
                    className="w-full h-full object-cover rounded-xl shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl xs:text-2xl font-black mb-1 text-navy dark:text-white tracking-tight break-words w-full px-2">Md Habib Miya</h3>
                <p className="text-primary font-black text-[8px] sm:text-[9px] mb-6 uppercase tracking-[0.2em] bg-primary/5 px-2 py-0.5 rounded-full">Habibullah</p>
                <p className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 italic leading-relaxed mb-8 font-medium break-words px-4">
                  "Engineering the digital future while simplifying global mobility for the people of Bangladesh."
                </p>
                <div className="w-full pt-6 border-t border-gray-100 dark:border-white/5 mt-auto">
                   <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-4 font-black">Strategic Pillars</p>
                   <div className="flex flex-wrap justify-center gap-1.5 max-w-full px-2">
                     {["SEO", "Android", "Travel", "Tutor"].map(tag => (
                       <span key={tag} className="px-2 py-1 bg-gray-100/5 dark:bg-white/5 text-navy dark:text-gray-300 text-[8px] sm:text-[9px] font-bold rounded-lg uppercase border border-gray-200/50 dark:border-white/5">{tag}</span>
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3 flex flex-col"
            >
              <div className="theme-card h-full relative overflow-hidden w-full max-w-full mx-auto shadow-xl border border-gray-100 dark:border-white/10 !p-5 sm:!p-10">
                <h2 className="text-xl xs:text-3xl sm:text-5xl font-black text-navy dark:text-white mb-6 sm:mb-8 tracking-tighter leading-tight break-words">The <span className="text-primary italic">Visionary</span> Architect.</h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-[13px] sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-semibold break-words">
                    As a versatile professional based in Bangladesh, I bridge the gap between physical travel and digital innovation. With years of experience in <span className="text-primary">travel management</span> and <span className="text-primary">app development</span>, I provide holistic solutions to my clients.
                  </p>
                  <p className="text-[11px] sm:text-lg text-gray-400 dark:text-gray-500 leading-relaxed break-words opacity-80 italic">
                    Precision is my language. Dedication is my style. Every ticket I book and every line of code I write is aimed at one goal: <span className="italic text-navy dark:text-white font-bold hover:text-primary transition-colors">Client Success.</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mt-10 w-full overflow-hidden">
                  <div className="p-4 sm:p-6 bg-gray-50/80 dark:bg-white/5 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 text-center sm:text-left shadow-sm">
                    <h4 className="text-2xl xs:text-3xl font-black text-navy dark:text-white mb-1">500+</h4>
                    <p className="text-[9px] sm:text-[10px] text-primary font-black uppercase tracking-[0.2em] whitespace-nowrap">Travel Successes</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-gray-50/80 dark:bg-white/5 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/5 text-center sm:text-left shadow-sm">
                    <h4 className="text-2xl xs:text-3xl font-black text-navy dark:text-white mb-1">50+</h4>
                    <p className="text-[9px] sm:text-[10px] text-primary font-black uppercase tracking-[0.2em] whitespace-nowrap">Android Assets</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Portfolio sections with better mobile spacing */}
      <section id="services" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading subtitle="Expert solutions for modern needs">Premium Services</SectionHeading>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The tools and expertise I use to deliver exceptional results.">My Expertise</SectionHeading>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} />
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-4">Travel Domain</h4>
              <SkillProgress name="Travel Management" progress={95} />
              <SkillProgress name="Visa Processing" progress={90} />
              <SkillProgress name="Ticketing Systems" progress={85} />
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold mb-4">Technology Domain</h4>
              <SkillProgress name="Android Development" progress={88} />
              <SkillProgress name="SEO & Content" progress={82} />
              <SkillProgress name="Digital Marketing" progress={75} />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 border-y border-gray-100 dark:border-white/5 bg-white dark:bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Featured work showcase">Selected Portfolio</SectionHeading>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16 px-4">
            {["All", "Travel", "Android"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter === "Travel" ? "Travel Projects" : filter === "Android" ? "Android Apps" : "All")}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-[9px] sm:text-xs font-bold uppercase tracking-widest transition-all ${
                  (activeFilter === "All" && filter === "All") || 
                  (activeFilter === "Travel Projects" && filter === "Travel") ||
                  (activeFilter === "Android Apps" && filter === "Android")
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-gray-100/50 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-100 dark:border-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((project, idx) => (
                <PortfolioCard 
                  key={project.title} 
                  title={project.title} 
                  category={project.category} 
                  image={project.image} 
                  overlayColor={idx % 2 === 0 ? "bg-primary/95" : "bg-navy/95"}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Insights & Stories">The Knowledge Hub</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-gray-50/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          <div className="lg:col-span-4 h-full">
            <div className="theme-card p-6 xs:p-8 sm:p-12 h-full flex flex-col relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-navy dark:text-white mb-2">The Contact.</h3>
                <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Available for projects</p>
              </div>
              <div className="space-y-6 sm:space-y-10 flex-grow flex flex-col justify-center">
                <ContactInfoItem 
                  icon={Mail} 
                  title="Direct Mail" 
                  detail="habibullah1130.sk@gmail.com" 
                />
                <ContactInfoItem 
                  icon={MessageCircle} 
                  title="WhatsApp" 
                  detail="+880 1747-774791" 
                />
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Presence" 
                  detail="Dhaka, Bangladesh" 
                />
              </div>
              <div className="pt-8 sm:pt-10 border-t border-gray-100 dark:border-white/5 mt-8">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-black mb-6">Social Ecosystem</p>
                <div className="flex flex-wrap gap-4">
                  <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/md-habib-miya-118404253/" />
                  <SocialLink icon={Facebook} href="https://www.facebook.com/habib.hosen.5836711" />
                  <SocialLink icon={Github} href="#" />
                </div>
              </div>
            </div>
          </div>

            <div className="lg:col-span-8">
              <div className="theme-card p-8 md:p-12 h-full">
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-10 md:mb-12 border-b border-gray-100 dark:border-white/5 pb-6 text-navy dark:text-white">Request Consultation</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Identity</label>
                    <input type="text" placeholder="Your Name" className="theme-input text-xs md:text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                    <input type="email" placeholder="email@example.com" className="theme-input text-xs md:text-sm" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Dialogue</label>
                    <textarea placeholder="How can we innovate together?" rows={5} className="theme-input resize-none text-xs md:text-sm"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="theme-btn-primary w-full !py-4 md:!py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black shadow-2xl hover:scale-[1.01]">
                      Secure Engagement
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 py-12 text-gray-400 font-medium overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] sm:text-[11px] uppercase tracking-widest text-center md:text-left">
          <p className="max-w-[280px] sm:max-w-none">© {new Date().getFullYear()} Md Habib Miya (Habibullah). All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex gap-4 sm:gap-6">
              <a href="https://www.linkedin.com/in/md-habib-miya-118404253/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold">LinkedIn</a>
              <a href="https://www.facebook.com/habib.hosen.5836711" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold">Facebook</a>
              <span className="hover:text-primary cursor-pointer transition-colors font-bold">Github</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-primary/30 rounded-full" />
            <p className="font-bold text-navy dark:text-gray-300">Dhaka, Bangladesh</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  </div>
  );
}

// --- Helper UI Components ---

const SkillProgress = ({ name, progress }: { name: string, progress: number }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="font-bold text-navy dark:text-gray-200 text-xs md:text-sm tracking-tight">{name}</span>
      <span className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest">{progress}%</span>
    </div>
    <div className="h-1.5 md:h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-primary rounded-full relative"
      >
        <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-30 shadow-[0_0_10px_white]" />
      </motion.div>
    </div>
  </div>
);

const ContactInfoItem = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
  <div className="flex gap-4 md:gap-6 items-start group">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-transparent group-hover:border-primary/30 transition-all duration-500">
      <Icon className="text-primary w-6 h-6 md:w-7 md:h-7" />
    </div>
    <div>
      <h4 className="text-[9px] md:text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.25em] mb-1 md:mb-2">{title}</h4>
      <p className="text-base md:text-xl font-bold text-navy dark:text-white tracking-tight break-all">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href }: { icon: any, href: string, key?: any }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-navy dark:text-white hover:bg-primary hover:text-white hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-90"
  >
    <Icon size={20} className="md:w-[22px] md:h-[22px]" />
  </a>
);
