import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const cvUrl = '/Abdullah-Mushtaq-CV.pdf';

const profile = {
  name: 'Abdullah Mushtaq',
  title: 'Software Developer',
  location: 'Lahore, Pakistan',
  email: 'abdullahmushtaq445@gmail.com',
  phone: '+92 302 1047124',
  github: 'https://github.com/AevitusOmegus',
};

const navItems = [
  ['Profile', 'profile'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const highlights = [
  'Full-stack development with React, Node.js, Express, and SQL-backed APIs.',
  'Strong C++ and OOP foundation through desktop, game, and systems projects.',
  'Comfortable turning academic CS fundamentals into practical software.',
];

const skillGroups = [
  {
    title: 'Application Development',
    icon: Code2,
    items: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'C# WinForms'],
  },
  {
    title: 'Systems & Programming',
    icon: Server,
    items: ['C++', 'OOP', 'Data Structures', 'Algorithms', 'Assembly'],
  },
  {
    title: 'Data & Tooling',
    icon: Database,
    items: ['T-SQL', 'Relational Design', 'REST APIs', 'Git', 'Raylib / SFML'],
  },
];

const projects = [
  {
    name: 'Classroom Management System',
    stack: 'React.js, Express.js, T-SQL',
    summary:
      'Role-based web platform for managing classroom workflows, backed by REST APIs and a relational database design.',
    impact: [
      'Built authentication-aware flows for multiple user roles.',
      'Structured backend APIs for clean communication between React and Node.js.',
      'Designed SQL schema and queries for reliable classroom data retrieval.',
    ],
  },
  {
    name: 'Chippa Motors',
    stack: 'C#, WinForms, 3-Layer Architecture',
    summary:
      'Desktop business application organized around presentation, business logic, and data access layers.',
    impact: [
      'Separated responsibilities to make the application easier to maintain.',
      'Implemented database operations behind a clear business-logic layer.',
      'Designed a practical interface for repeated operational use.',
    ],
  },
  {
    name: '2D Dungeon Crawler - Penance',
    stack: 'C++, Raylib',
    summary:
      'Real-time 2D game project focused on rendering, collision, movement, and scalable game state handling.',
    impact: [
      'Implemented player movement, collision detection, and entity interactions.',
      'Used Raylib to manage rendering and responsive gameplay loops.',
      'Practiced modular C++ architecture for gameplay systems.',
    ],
  },
  {
    name: '1v1 Chess Game',
    stack: 'C++, SFML',
    summary:
      'Interactive chess implementation with object-oriented piece behavior and board-state validation.',
    impact: [
      'Modeled chess pieces with reusable OOP patterns.',
      'Implemented move rules and board interaction logic.',
      'Built a graphical interface using SFML.',
    ],
  },
  {
    name: 'Maze Rush',
    stack: 'Assembly Language',
    summary:
      'Low-level maze navigation game demonstrating direct control over memory, registers, and game flow.',
    impact: [
      'Applied CPU architecture concepts in an interactive project.',
      'Handled constrained, performance-conscious game logic.',
      'Strengthened understanding of low-level program execution.',
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="ambient-orb primary"></div>
      <div className="ambient-orb secondary"></div>
      <header className="site-header glass">
        <a className="brand" href="#top" aria-label="Abdullah Mushtaq home">
          AM
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="download-button" href={cvUrl} download>
            <Download size={18} />
            <span>Download CV</span>
          </motion.a>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-scrim" type="button" aria-label="Close menu" onClick={closeMenu} 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-sheet">
              <div className="mobile-sheet-head">
                <span>Navigation</span>
                <button className="icon-button" type="button" onClick={closeMenu} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu}>
                  {label}
                </a>
              ))}
              <a className="download-button mobile-download" href={cvUrl} download onClick={closeMenu}>
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero section-shell">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-copy">
            <motion.p variants={fadeInUp} className="eyebrow">Computer Science Undergraduate - FAST-NUCES Lahore</motion.p>
            <motion.h1 variants={fadeInUp}>{profile.name}</motion.h1>
            <motion.p variants={fadeInUp} className="hero-lede">
              Software developer focused on building reliable full-stack applications and strengthening the CS fundamentals behind them.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="primary-action" href={cvUrl} download>
                <Download size={18} />
                Download ready CV
              </motion.a>
              <a className="secondary-action" href="#projects">
                View projects
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.aside 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="profile-card glass" aria-label="Profile summary">
            <img src="/Images/Profile.JPG" alt="Abdullah Mushtaq" />
            <div>
              <p className="profile-name">{profile.title}</p>
              <p className="profile-line">Open to internships, junior developer roles, and project collaborations.</p>
            </div>
            <div className="contact-strip">
              <a href={`mailto:${profile.email}`} aria-label="Email Abdullah">
                <Mail size={17} />
              </a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`} aria-label="Call Abdullah">
                <Phone size={17} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={17} />
              </a>
            </div>
          </motion.aside>
        </section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="profile" className="section-shell split-section">
          <div>
            <p className="section-kicker">Profile</p>
            <h2>Professional summary</h2>
          </div>
          <motion.div variants={zoomIn} className="summary-panel glass">
            <p>
              I am a Computer Science undergraduate at FAST-NUCES Lahore with hands-on experience across web, desktop, game, and low-level programming projects. My strongest areas are React, Node.js, C++, SQL-backed applications, and writing software with clear structure.
            </p>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="highlight-grid">
              {highlights.map((item, index) => (
                <motion.div variants={fadeInUp} className="highlight-item glass" key={index}>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="skills" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Capabilities</p>
            <h2>Technical skills</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="skill-layout">
            {skillGroups.map(({ title, icon: Icon, items }, idx) => (
              <motion.article 
                variants={fadeInUp} 
                whileHover={{ y: -8, scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="skill-card glass" key={title}>
                <div className="card-icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <div className="pill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="projects" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>Projects with employer-ready framing</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="project-list">
            {projects.map((project, idx) => (
              <motion.article 
                variants={fadeInUp} 
                whileHover={{ y: -8, scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="project-card glass" key={project.name}>
                <div className="project-card-main">
                  <div>
                    <p className="project-stack">{project.stack}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <p>{project.summary}</p>
                </div>
                <ul>
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="education" className="section-shell split-section">
          <div>
            <p className="section-kicker">Education</p>
            <h2>Academic background</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="timeline">
            <motion.article 
              variants={fadeInUp} 
              whileHover={{ x: 8 }}
              className="glass">
              <span>2023 - 2027</span>
              <h3>Bachelor of Computer Science</h3>
              <p>FAST-NUCES Lahore - Focused on software engineering, data structures, algorithms, databases, and systems fundamentals.</p>
            </motion.article>
            <motion.article 
              variants={fadeInUp} 
              whileHover={{ x: 8 }}
              className="glass">
              <span>2020 - 2022</span>
              <h3>Intermediate Pre-Medical</h3>
              <p>Shalimar College Lahore</p>
            </motion.article>
            <motion.article 
              variants={fadeInUp} 
              whileHover={{ x: 8 }}
              className="glass">
              <span>2018 - 2020</span>
              <h3>Matriculation</h3>
              <p>Govt High School for Boys</p>
            </motion.article>
          </motion.div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="contact" className="section-shell contact-section">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let's talk about the next opportunity.</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="contact-grid">
            <motion.a variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href={`mailto:${profile.email}`} className="glass">
              <Mail size={22} />
              <span>{profile.email}</span>
            </motion.a>
            <motion.a variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href={`tel:${profile.phone.replaceAll(' ', '')}`} className="glass">
              <Phone size={22} />
              <span>{profile.phone}</span>
            </motion.a>
            <motion.a variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href={profile.github} target="_blank" rel="noreferrer" className="glass">
              <Github size={22} />
              <span>github.com/AevitusOmegus</span>
            </motion.a>
            <motion.div variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="glass">
              <MapPin size={22} />
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <span>Abdullah Mushtaq</span>
        <span>Portfolio rebuilt with React, Vite, Framer Motion, and a beautifully generated PDF CV.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
