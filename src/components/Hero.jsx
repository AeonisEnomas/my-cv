import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { profile, cvUrl } from '../data/content';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section className="hero section-shell">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="hero-copy">
        <motion.p variants={fadeInUp} className="eyebrow">Computer Science Undergraduate - FAST-NUCES Lahore</motion.p>
        <motion.h1 variants={fadeInUp}>{profile.name}</motion.h1>
        <motion.p variants={fadeInUp} className="hero-lede">
          Computer Science undergraduate specializing in full-stack architecture, modern web technologies, and bridging intelligent systems with scalable backends.
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
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={17} />
          </a>
        </div>
      </motion.aside>
    </section>
  );
}
