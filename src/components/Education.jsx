import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function Education() {
  return (
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
          <p>FAST-NUCES Lahore</p>
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
  );
}
