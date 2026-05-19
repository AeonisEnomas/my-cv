import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { navItems, cvUrl } from '../data/content';

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
    </>
  );
}
