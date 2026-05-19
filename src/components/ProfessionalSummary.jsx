import React from 'react';
import { motion } from 'framer-motion';
import { highlights } from '../data/content';
import { staggerContainer, fadeInUp, zoomIn } from '../utils/animations';

export default function ProfessionalSummary() {
  return (
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
          A detail-oriented Computer Science undergraduate at FAST-NUCES Lahore, specializing in modern web technologies and full-stack architecture. Experienced in designing scalable, data-driven applications utilizing React, Node.js, and Python frameworks. I have a demonstrated ability to integrate advanced features—such as NLP pipelines and secure execution environments—into functional projects.
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
  );
}
