'use client';

import { motion } from 'framer-motion';

export default function RightSidebar({ onClose }) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: 'spring', damping: 20 }}
      className="right-sidebar"
    >
      <div className="right-sidebar-header">
        <h3>Tools</h3>
        <button onClick={onClose} className="close-sidebar-btn">
          ✕
        </button>
      </div>

      <div className="right-sidebar-content">
        <div className="tool-placeholder">
          <span className="placeholder-icon">🔧</span>
          <p>Additional tools will appear here</p>
        </div>
      </div>
    </motion.div>
  );
}