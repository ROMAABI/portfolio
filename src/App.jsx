import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const RevealCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderBottom: '1px solid rgba(241, 245, 249, 1)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 800,
    letterSpacing: '-0.025em',
    color: '#003ec7',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  navLinkActive: {
    color: '#003ec7',
    fontWeight: 600,
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #003ec7 0%, #0052ff 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.875rem',
    padding: '10px 24px',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(0, 62, 199, 0.2)',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.2s',
  },
  section: {
    padding: '100px 0',
    minHeight: '100vh',
  },
  sectionAlt: {
    background: '#f2f4f6',
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#495f84',
    marginBottom: '24px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#003ec7',
    animation: 'pulse 2s infinite',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 800,
    color: '#003ec7',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
    marginBottom: '24px',
  },
  titleWhite: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.1,
    marginBottom: '24px',
  },
  description: {
    fontSize: '1.125rem',
    color: '#434656',
    lineHeight: 1.7,
    marginBottom: '32px',
    maxWidth: '560px',
  },
  descriptionLight: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.7,
    marginBottom: '32px',
    maxWidth: '560px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 16px rgba(25, 28, 30, 0.04)',
  },
  cardAlt: {
    background: 'linear-gradient(135deg, #003ec7 0%, #0052ff 100%)',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 10px 40px rgba(0, 62, 199, 0.2)',
    color: '#ffffff',
  },
  cardBorder: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 16px rgba(25, 28, 30, 0.04)',
    border: '1px solid rgba(195, 197, 217, 0.1)',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#003ec7',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#191c1e',
    marginBottom: '12px',
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#434656',
    lineHeight: 1.7,
    marginBottom: '16px',
  },
  tag: {
    display: 'inline-block',
    background: '#f2f4f6',
    color: '#495f84',
    padding: '6px 16px',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  inputField: {
    background: '#e6e8ea',
    border: '1px solid transparent',
    borderRadius: '8px',
    padding: '14px 16px',
    fontSize: '1rem',
    color: '#191c1e',
    width: '100%',
    outline: 'none',
  },
  footer: {
    background: '#f8fafc',
    padding: '48px 0',
    borderTop: '1px solid #e2e8f0',
  },
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const competencies = [
  {
    title: 'Cross-Platform Excellence',
    description: 'Native-grade performance using Flutter and React Native. I build unified codebases that scale across iOS, Android, and Web without compromising on UX details.',
    tags: ['Flutter', 'React Native', 'Dart'],
    icon: '📱',
    wide: true,
  },
  {
    title: 'On-Device Intelligence',
    description: 'Integrating CoreML, TensorFlow Lite, and LLMs directly into mobile workflows for privacy-first AI experiences.',
    tags: ['AI/ML', 'TensorFlow', 'CoreML'],
    icon: '🧠',
    featured: true,
  },
  {
    title: 'Cloud Architect',
    description: 'Robust backend integration using Node.js and Firebase, optimized for real-time data sync and global scalability.',
    tags: ['Node.js', 'Firebase', 'Cloud'],
    icon: '☁️',
  },
  {
    title: 'UI/UX Driven Development',
    description: 'Every project follows a design-first methodology focusing on the Precision Architect philosophy.',
    tags: ['Figma', 'Design', 'UI/UX'],
    icon: '🎨',
    wide: true,
  },
];

const timeline = [
  {
    period: '2026 - Present',
    title: 'Senior Mobile Systems Architect',
    description: 'Leading the development of AI-driven healthcare applications, focusing on real-time biometric analysis and private LLM deployments on mobile hardware.',
  },
  {
    period: '2022 - 2026',
    title: 'Full-Stack Developer (FinTech)',
    description: 'Engineered secure, high-transaction mobile wallets using React Native and encrypted GraphQL endpoints.',
  },
];

const projects = [
  {
    title: 'NeuralCapture AI',
    description: 'Real-time object recognition using TFLite.',
    tags: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    title: 'EtherFlow Wallet',
    description: 'Multi-chain crypto management in React Native.',
    tags: ['React Native', 'Blockchain', 'FinTech'],
  },
];

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={{ ...styles.container, ...styles.navContent }}>
          <a href="#home" style={styles.logo}>Abimanyu A.</a>
          <ul style={styles.navLinks}>
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href} style={styles.navLink}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="relative group inline-block">
            <a href="/resume-1.png" target="_blank" rel="noopener noreferrer" style={styles.btnPrimary}>Resume ▾</a>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <a href="/resume-1.png" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg">Page 1</a>
              <a href="/resume-2.png" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-b-lg">Page 2</a>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <RevealText delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[0.75rem] font-bold uppercase tracking-widest text-secondary">Available for Projects</span>
              </div>
            </RevealText>
            <RevealText delay={0.2} direction="up">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-8">
                Architecting the Future<br/>of Mobile & AI.
              </h1>
            </RevealText>
            <RevealText delay={0.3} direction="up">
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                Hi, I'm Abimanyu A. Specialized in building high-performance, cross-platform applications with Flutter, React Native, and integrated Generative AI.
              </p>
            </RevealText>
            <RevealText delay={0.4} direction="up">
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-95 transition-transform"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Projects
                </button>
                <a 
                  href="/resume-1.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-colors"
                >
                  Resume
                </a>
                <a 
                  href="/resume-2.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm underline hover:text-primary/70"
                >
                  Page 2
                </a>
              </div>
            </RevealText>
          </div>
          <RevealText delay={0.5} direction="left">
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 bg-surface-container-lowest rounded-[2rem] p-4 shadow-2xl shadow-primary/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img alt="Mobile App Interface" className="rounded-[1.5rem] w-full aspect-[4/5] object-cover" src="/abimanyu.png" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-fixed p-3 rounded-xl">
                      <span className="material-symbols-outlined text-primary">terminal</span>
                    </div>
                    <div>
                      <div className="text-xs text-secondary font-bold uppercase tracking-tighter">Current Stack</div>
                      <div className="text-on-surface font-bold">Flutter + Gemini</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealText>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
        <header className="mb-20">
          <RevealText delay={0.1}>
            <div className="inline-block px-4 py-1.5 mb-6 bg-secondary-container/30 text-secondary text-sm font-semibold tracking-wider rounded-full uppercase">
              Expertise
            </div>
          </RevealText>
          <RevealText delay={0.2}>
            <h1 className="text-6xl md:text-7xl font-bold text-primary tracking-tighter leading-none mb-6">
              Technical <br/><span className="text-on-surface">Arsenal</span>
            </h1>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
              A curated selection of technologies and frameworks I use to architect high-performance digital solutions, moving from fluid mobile experiences to robust AI integrations.
            </p>
          </RevealText>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Mobile Architecture - Card Style */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group min-h-[400px]">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">smartphone</span>
                <h2 className="text-2xl font-bold tracking-tight">Mobile Architecture</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-primary text-lg mb-2">Flutter</h3>
                  <span className="text-xs text-secondary font-semibold">Expert</span>
                  <p className="text-xs text-on-surface-variant mt-2">Dart, iOS, Android</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-primary text-lg mb-2">GetX</h3>
                  <p className="text-xs text-on-surface-variant mt-3">State Management</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-primary text-lg mb-2">React Native</h3>
                  <p className="text-xs text-on-surface-variant mt-3">JavaScript, React</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-primary text-lg mb-2">Redux</h3>
                  <p className="text-xs text-on-surface-variant mt-3">State Container</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </div>

          {/* AI & Machine Learning - Card Style */}
          <div className="lg:col-span-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 min-h-[400px]">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              <h2 className="text-2xl font-bold tracking-tight">AI &amp; Machine Learning</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-primary mb-1">Google Gemini API</h3>
                <p className="text-xs text-on-surface-variant">Integrating LLMs for advanced natural language processing</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-primary mb-1">TensorFlow Lite</h3>
                <p className="text-xs text-on-surface-variant">On-device ML for mobile inference</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-primary mb-1">Computer Vision</h3>
                <p className="text-xs text-on-surface-variant">Real-time object detection</p>
              </div>
            </div>
            <div className="mt-8 h-32 w-full rounded-xl overflow-hidden shadow-inner grayscale contrast-125 opacity-40 mix-blend-multiply">
              <img alt="Neural network visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5iLltuxJ_Hhwo7PswJjFjMmBuRW4OxsxNjTgh8HoV3YtdGpJaAmz98omGiBu2dNMHf3f6gBgLQss6MRZc1Cn50A5p8ukiQN0uApsA_7uN5rdLmk7HN-we3r0oVDAtGvk65UaEgw0SrhCDxkCzbw2V9HWbHRU3fkRsNvlzvPM10l36mNoP0DwkHoTKYd8snCg4yMF0gVWiJScIFEZ0OF2wu7ArSv3K7Msg_6nFjaAGGQAQ7pFHKcNJViuAwC5wCo-nsmAd43bXg" />
            </div>
          </div>

          {/* Backend & Data - Card Style */}
          <div className="lg:col-span-7 bg-surface-container-high p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">database</span>
                <h2 className="text-2xl font-bold tracking-tight">Backend &amp; Data</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Firestore</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">NoSQL</span>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Firebase Auth</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Security</span>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">Cloud Funcs</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Serverless</span>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-lg text-center">
                  <span className="block font-bold text-primary text-lg">SQL</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Relational</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant max-w-md italic">"Building scalable infrastructures for seamless data synchronization across multiple platforms."</p>
              <span className="material-symbols-outlined text-outline-variant text-4xl">schema</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary p-8 rounded-xl text-on-primary flex flex-col justify-center overflow-hidden relative min-h-[300px]">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">The Stack Philosophy</h2>
              <p className="text-primary-fixed font-medium leading-relaxed mb-6">
                I specialize in bridging the gap between high-level AI capabilities and efficient mobile interfaces, ensuring that complex logic remains invisible to the end user.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/20">Scalability</div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/20">Performance</div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold border border-white/20">Precision</div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rotate-12 blur-2xl"></div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase mb-4">Case Studies</span>
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-6">Strategic Projects</h1>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  A curated selection of technical solutions architected for high performance, utilizing modern frameworks and advanced algorithms to solve complex digital challenges.
                </p>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-primary-fixed pl-6 py-2">
                <div className="text-right">
                  <p className="text-sm text-secondary font-medium">Core Expertise</p>
                  <p className="text-on-surface font-bold">Full-Stack Architect</p>
                </div>
              </div>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative bg-surface-container-lowest rounded-xl p-8 transition-all duration-500 border border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-surface-container-high rounded-xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                  </div>
                  <span className="text-xs font-bold font-label tracking-widest text-secondary uppercase">Artificial Intelligence</span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-4">Spidy (AI Assistant)</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  An intelligent conversational agent built on top of the Gemini Pro API, featuring context-aware memory via Firestore integration for seamless persistent user sessions.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Gemini Pro API</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Firestore</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">TypeScript</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                <span className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  View Technical Docs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
                <span className="text-xs text-secondary font-label">v2.4.0 Stable</span>
              </div>
            </div>
            
            <div className="group relative bg-surface-container-lowest rounded-xl p-8 transition-all duration-500 border border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-surface-container-high rounded-xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">directions_run</span>
                  </div>
                  <span className="text-xs font-bold font-label tracking-widest text-secondary uppercase">Computer Vision</span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-4">AI Fitness Tracker</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  High-performance movement analysis engine utilizing TensorFlow Lite and MoveNet. Achieves sub-15ms inference latency for real-time form correction at 60 FPS.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">TF Lite</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">MoveNet</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">60 FPS</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                <span className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  Explore Live Demo <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
                <span className="text-xs text-secondary font-label">Real-time Analysis</span>
              </div>
            </div>
            
            <div className="group relative bg-surface-container-lowest rounded-xl p-8 transition-all duration-500 border border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-surface-container-high rounded-xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                  </div>
                  <span className="text-xs font-bold font-label tracking-widest text-secondary uppercase">FinTech</span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-4">Expense Engine</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  A sophisticated financial management core implementing Graph Theory algorithms for automated transaction categorization and complex debt settlement simplification.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Graph Theory</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Node.js</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">PostgreSQL</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                <span className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  View Architecture <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
                <span className="text-xs text-secondary font-label">Algorithmic Core</span>
              </div>
            </div>
            
            <div className="group relative bg-surface-container-lowest rounded-xl p-8 transition-all duration-500 border border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-surface-container-high rounded-xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">cloud_sync</span>
                  </div>
                  <span className="text-xs font-bold font-label tracking-widest text-secondary uppercase">Infrastructure</span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-4">Offline-First Suite</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Resilient data architecture using SQLite local caching and Firebase real-time sync. Engineered for zero-data-loss synchronization in low-connectivity environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">SQLite</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Firebase</span>
                  <span className="px-3 py-1 bg-surface-container rounded-lg text-xs font-medium text-on-surface-variant">Sync Logic</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                <span className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  Performance Metrics <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
                <span className="text-xs text-secondary font-label">Resilient Architecture</span>
              </div>
            </div>
          </div>
          
          <section className="mt-32 p-12 bg-surface-container-low rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl font-extrabold text-on-surface tracking-tighter mb-4">Building something complex?</h2>
              <p className="text-on-surface-variant mb-8">I specialize in turning high-level technical requirements into elegant, high-performance digital architectures.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-xl shadow-primary/25 hover:scale-105 transition-all">Start a Conversation</button>
                <button className="px-8 py-4 border-2 border-outline-variant/30 text-primary rounded-xl font-bold hover:bg-white transition-all">Download Portfolio.pdf</button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        <section className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-7xl font-bold text-primary tracking-tighter leading-tight mb-8">
              Crafting Logic. <br/>Architecting <span className="text-on-surface-variant font-light italic">Precision.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              I am a Computer Science engineer dedicated to the intersection of scalable software and intelligent systems. My approach blends technical rigor with an architect's eye for clean, sustainable code.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative">
              <img alt="Professional headshot of a developer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/abimanyu.png" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl shadow-on-surface/5 max-w-[200px]">
              <span className="text-xs font-bold tracking-widest text-secondary block mb-2">LOCATION</span>
              <p className="text-sm font-medium text-on-surface">Chennai, India</p>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-2 block">Foundation</span>
              <h2 className="text-4xl font-bold text-on-background tracking-tight">Academic Journey</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group hover:bg-white transition-colors duration-500">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl">school</span>
                  <span className="text-sm font-medium px-4 py-1 bg-surface-container rounded-full text-secondary">2020 — 2024</span>
                </div>
                <h3 className="text-3xl font-bold text-on-surface mb-4">B.E. in Computer Science</h3>
                <p className="text-lg text-on-surface-variant max-w-lg mb-6">P.T. Lee Chengalvaraya Naicker College of Engineering and Technology</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-outline-variant/20"></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-secondary font-medium">CGPA</span>
                  <span className="text-4xl font-bold text-primary">7.6</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-4 block">verified</span>
                <h4 className="text-xl font-bold text-on-surface mb-2">NPTEL Elite Status</h4>
                <p className="text-sm text-on-surface-variant mb-6">Recognized for excellence in Java Programming. Demonstrating mastery of core object-oriented principles.</p>
                <div className="flex items-center text-primary font-bold text-sm">
                  <span>VIEW CREDENTIAL</span>
                  <span className="material-symbols-outlined text-xs ml-1">arrow_outward</span>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 scale-150 group-hover:scale-125 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]">workspace_premium</span>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl mb-4">auto_awesome</span>
                <h4 className="text-xl font-bold mb-2">Generative AI</h4>
                <p className="text-sm opacity-80 leading-relaxed">Certified in Google Cloud Generative AI. Mastering the next frontier of intelligent automation and LLM architectures.</p>
              </div>
              <div className="pt-8 flex items-center gap-2">
                <img alt="Google Cloud Brand" className="w-10 h-10 rounded-full border-2 border-on-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6MJMpsQFLwWJOF2n81T71kPGDjUA1dxvfFWE72DGMNGbk2Fn5LZP473Li6XtnKn7qAdZk_1iUZeMq9YpP0S9McRc_YwaVicJG62DJcNk4HGFnThWDUTGaNHWUZ8t1FF-EDr1zV3aQRtNFarNUcX8YQA2_nbLSiOy8bJGVCdcrrCqcFiH8yZ2buFrjNR6hdxXrlRQHrnj5c5ewg1i7BRSBPHliD1qtBvvceqmU4siOcrRM-o9MtVhH02DayokiHb1rfQDSQV_EsQ" />
                <span className="text-xs font-bold tracking-widest uppercase">Google Cloud certified</span>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl">
              <h4 className="text-sm font-bold tracking-widest text-secondary uppercase mb-8">Technical Expertise</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary-fixed"></div>
                    <div className="w-0.5 h-16 bg-primary-fixed"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface">Systems Architecting</h5>
                    <p className="text-sm text-on-surface-variant">Designing distributed infrastructures with a focus on performance and reliability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary-fixed-dim"></div>
                    <div className="w-0.5 h-16 bg-surface-container-high"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface">Modern Java Development</h5>
                    <p className="text-sm text-on-surface-variant">Building robust enterprise applications using clean code patterns and Elite-tier standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-surface-container-high"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface">Cloud Native AI</h5>
                    <p className="text-sm text-on-surface-variant">Integrating generative models into production environments via GCP stacks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low rounded-[2rem] px-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-6xl font-serif text-primary opacity-20 absolute -top-4 -left-2">"</span>
            <h2 className="text-3xl md:text-4xl font-bold text-on-background leading-tight mb-8">
              Engineering is not just about solving problems; it's about creating systems that empower human potential through <span className="text-primary italic underline decoration-2 underline-offset-8">absolute clarity.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-sm font-bold tracking-widest text-secondary uppercase">My Core Philosophy</span>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3">
            <img alt="Minimalist office space" className="w-full h-full object-cover mix-blend-overlay opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_GkR4TZ5v78Y_Hpau6UHO-jUuLFnltq39z4MHFroDYawdQ-ohiHe9oky_a503XkBfmo9G1dZrETdBwwhcqawk8KPZYO9vJyE65DOKlhmHDPWufl7ZDgAK8b81gkV9t0lE6V4HcELfok5aJlvuMMMVNIxPVnctbHT4Jc17qJqVfNs0hOBSgxN-gqPhLs28YRP5jp8X-Qo2NzL0-VLOYjcIU50F2SkdW4xozBajCZ0XpuOtbhPcRwKaYT25KiMLCNrXlRqlPRSCYg" />
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold text-primary tracking-tighter mb-4">Let's build<br/>something great.</h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">Currently based in Cuddalore, Tamil Nadu. I'm open to remote opportunities and technical collaborations globally.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-0 group hover:bg-surface-container-low transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary-fixed rounded-full text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">Location</span>
                  <h3 className="text-2xl font-bold text-on-surface mb-2">Cuddalore, Tamil Nadu</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Available for regional meetups and worldwide remote engagement.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-0 flex flex-col justify-between aspect-square group hover:bg-primary transition-all duration-300" href="mailto:abimanyuannadhurai18@gmail.com">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-4xl">mail</span>
                <div>
                  <span className="text-xs font-bold text-secondary group-hover:text-primary-fixed transition-colors block mb-1">Email</span>
                  <p className="text-on-surface font-bold break-words group-hover:text-white transition-colors">abimanyuannadhurai18@gmail.com</p>
                </div>
              </a>
              <a className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-0 flex flex-col justify-between aspect-square group hover:bg-on-background transition-all duration-300" href="https://github.com/ROMAABI" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-primary group-hover:text-surface-variant transition-colors text-4xl">code</span>
                <div>
                  <span className="text-xs font-bold text-secondary group-hover:text-outline-variant transition-colors block mb-1">GitHub</span>
                  <p className="text-on-surface font-bold group-hover:text-white transition-colors">ROMAABI</p>
                </div>
              </a>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-sm bg-surface-container-high">
              <img alt="Location Map" className="w-full h-full object-cover grayscale opacity-50 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByhNFz0MnekijUuRt3FV-n7T-DAYaoRM37M7Ee8Ft6IHOQK6PmTKGgikeAVeEZT1EeQK65bx9A_siv7OXFarJKx5j23k7yfeAaCEryUxxTj_pof-yUp-tAp4VNk6AEuwF25XsKJ1l5k8oVTn2XyB44uMvK0n41LR6tjy4VcMHUb-8fwn2BsJBF7ruqhKBJnrXdLKq53UJv8LKNqB4zDU0fpZxc91wFri3fEiV1kuFsl_Lf93A-3LW9ibmHE-dFC1F0hqi2E1kTQQ" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary rounded-full animate-pulse border-4 border-white"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary tracking-tight mb-2">Send a Message</h2>
              <p className="text-on-surface-variant">I typically respond within 24 hours.</p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest px-1">Full Name</label>
                  <input className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary uppercase tracking-widest px-1">Work Email</label>
                  <input className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline" placeholder="john@company.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest px-1">Subject</label>
                <select className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/50 text-on-surface appearance-none">
                  <option>Technical Inquiry</option>
                  <option>Project Collaboration</option>
                  <option>Job Opportunity</option>
                  <option>General Coffee Chat</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-widest px-1">Message</label>
                <textarea className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline resize-none" placeholder="How can I help you today?" rows="5"></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-xl shadow-primary/20 hover:scale-[0.98] transition-transform flex items-center justify-center gap-3" type="submit">
                  Initiate Transmission
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-slate-200/20 pt-12">
          <div className="mb-8 md:mb-0">
            <span className="font-bold text-slate-900 text-lg">Abimanyu A.</span>
            <p className="text-sm font-inter text-slate-500 mt-1">© 2026 Abimanyu A. Built with Precision.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity" href="https://linkedin.com/in/abimanyu-a-5a448b256" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity" href="https://github.com/ROMAABI" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-opacity" href="mailto:abimanyuannadhurai18@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
