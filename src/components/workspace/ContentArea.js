'use client';

import { motion } from 'framer-motion';

export default function ContentArea({ activeView, projectData, chapters, onUpdateChapter }) {
  const renderTemplateView = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="template-view"
      >
        <div className="content-header">
          <h1>Project Template</h1>
          <p>Review and edit your project structure</p>
        </div>

        <div className="template-structure">
          {projectData.template.structure.map((item, index) => (
            <div key={index} className="template-chapter">
              <div className="template-chapter-header">
                <span className="chapter-number">Chapter {item.chapter}</span>
                <h3>{item.title}</h3>
              </div>
              <div className="template-sections">
                {item.sections.map((section, secIndex) => (
                  <div key={secIndex} className="template-section">
                    <span className="section-bullet">•</span>
                    <span>{section}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="template-actions">
          <button className="btn-edit-template">
            Edit Template Structure
          </button>
        </div>
      </motion.div>
    );
  };

  const renderChapterView = () => {
    const chapterId = parseInt(activeView.split('-')[1]);
    const chapter = chapters.find(ch => ch.id === chapterId);

    if (!chapter) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="chapter-view"
      >
        <div className="content-header">
          <h1>Chapter {chapter.id}</h1>
          <p>Write and edit your chapter content</p>
        </div>

        <div className="editor-container">
          <textarea
            className="chapter-editor"
            placeholder={`Start writing Chapter ${chapter.id}...`}
            value={chapter.content}
            onChange={(e) => onUpdateChapter(chapter.id, e.target.value)}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="content-area">
      {activeView === 'template' ? renderTemplateView() : renderChapterView()}
    </div>
  );
}