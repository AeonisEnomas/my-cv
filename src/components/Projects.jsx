import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function Projects() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      id="projects" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Projects</h2>
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
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {project.name}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', display: 'inline-flex' }}>
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </h3>
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
  );
}
