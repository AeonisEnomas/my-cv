import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '../data/content';
import { staggerContainer, fadeInUp, zoomIn } from '../utils/animations';

export default function Contact() {
  return (
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
        <motion.a variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href={profile.linkedin} target="_blank" rel="noreferrer" className="glass">
          <Linkedin size={22} />
          <span>LinkedIn Profile</span>
        </motion.a>
        <motion.div variants={zoomIn} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="glass">
          <MapPin size={22} />
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
