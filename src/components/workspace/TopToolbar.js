'use client';

import { motion } from 'framer-motion';

export default function TopToolbar({ 
  onGenerate, 
  onRegenerate, 
  onEdit, 
  onToggleRightSidebar,
  isRightSidebarOpen 
}) {
  return (
    <div className="top-toolbar">
      <div className="toolbar-actions">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerate}
          className="toolbar-btn primary"
        >
          <span className="btn-icon">✨</span>
          Generate
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRegenerate}
          className="toolbar-btn secondary"
        >
          <span className="btn-icon">🔄</span>
          Regenerate
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onEdit}
          className="toolbar-btn secondary"
        >
          <span className="btn-icon">✏️</span>
          Edit
        </motion.button>
      </div>

      <div className="toolbar-right">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleRightSidebar}
          className="toggle-sidebar-btn"
          title={isRightSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
        >
          {isRightSidebarOpen ? '☰' : '☰'}
        </motion.button>
      </div>
    </div>
  );
}