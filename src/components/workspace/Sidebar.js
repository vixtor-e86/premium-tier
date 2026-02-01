'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Sidebar({ 
  projectData, 
  chapters, 
  images, 
  activeView, 
  onViewChange,
  onAddImage,
  onRemoveImage 
}) {
  const [isChaptersOpen, setIsChaptersOpen] = useState(true);
  const [isImagesOpen, setIsImagesOpen] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onAddImage(file);
    }
  };

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="workspace-title">
          <span className="workspace-icon">📝</span>
          <span>My Workspace</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="project-title-wrapper">
          <h2 className="project-title">{projectData.title}</h2>
          {projectData.isPremium && <span className="premium-badge">Premium</span>}
        </div>
        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-icon">🎓</span>
            <span>{projectData.faculty}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📚</span>
            <span>{projectData.department}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        {/* Template */}
        <button
          className={`nav-item ${activeView === 'template' ? 'active' : ''}`}
          onClick={() => onViewChange('template')}
        >
          <span className="nav-icon">📋</span>
          <span>Template</span>
        </button>

        {/* Chapters Dropdown */}
        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsChaptersOpen(!isChaptersOpen)}
          >
            <span className="nav-icon">📖</span>
            <span>Chapters</span>
            <span className={`dropdown-arrow ${isChaptersOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          {isChaptersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="nav-section-content"
            >
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  className={`nav-subitem ${activeView === `chapter-${chapter.id}` ? 'active' : ''}`}
                  onClick={() => onViewChange(`chapter-${chapter.id}`)}
                >
                  Chapter {chapter.id}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Images Dropdown */}
        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsImagesOpen(!isImagesOpen)}
          >
            <span className="nav-icon">🖼️</span>
            <span>Images</span>
            <span className={`dropdown-arrow ${isImagesOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          {isImagesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="nav-section-content"
            >
              <label htmlFor="image-upload" className="add-image-btn">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                + Add Image
              </label>
              {images.length > 0 ? (
                <div className="images-list">
                  {images.map((image) => (
                    <div key={image.id} className="image-item">
                      <img src={image.url} alt={image.name} className="image-thumb" />
                      <span className="image-name">{image.name}</span>
                      <button
                        onClick={() => onRemoveImage(image.id)}
                        className="remove-image"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">No images added yet</p>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="sidebar-footer">
        <button className="footer-btn">
          <span className="footer-icon">💬</span>
          <span>Feedback</span>
        </button>
        <button className="footer-btn">
          <span className="footer-icon">👥</span>
          <span>Invite People</span>
        </button>
        <div className="user-profile">
          <div className="user-avatar">
            <span>JD</span>
          </div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-email">john@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}