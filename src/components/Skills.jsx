import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/content';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function Skills() {
  return (
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
  );
}
