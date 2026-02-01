'use client';

// Simple SVG Icons
const Icons = {
  Edit3: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>,
  Image: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
  Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  PieChart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>,
  Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Send: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
  Paperclip: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>,
  Mic: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
};

export default function ContentArea({ 
  activeView, 
  projectData, 
  chapters, 
  onUpdateChapter 
}) {
  // Determine if we are viewing a specific chapter
  const activeChapter = activeView.startsWith('chapter-') 
    ? chapters.find(ch => `chapter-${ch.id}` === activeView)
    : null;

  if (activeChapter) {
    return (
      <div className="content-area">
        <div className="content-header">
          <h1>{activeChapter.title}</h1>
          <p>Drafting content for {projectData.title}</p>
        </div>
        <div className="editor-container">
          <textarea
            className="chapter-editor"
            value={activeChapter.content}
            onChange={(e) => onUpdateChapter(activeChapter.id, e.target.value)}
            placeholder={`Start writing ${activeChapter.title}...`}
          />
        </div>
      </div>
    );
  }

  // Edit Template View
  if (activeView === 'edit-template') {
    return (
      <div className="content-area">
        <div className="content-header">
          <h1>Template Editor</h1>
          <p>Modify the structure of your current project.</p>
        </div>
        <div className="template-editor-container" style={{ maxWidth: '800px', width: '100%' }}>
          {projectData.template.structure.map((chapter) => (
            <div key={chapter.chapter} className="template-chapter-edit" style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '12px', 
              marginBottom: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Chapter {chapter.chapter}: {chapter.title}</h3>
                <button style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {chapter.sections.map((section, idx) => (
                  <div key={idx} style={{ 
                    padding: '8px 12px', 
                    background: '#f9fafb', 
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#4b5563'
                  }}>
                    {section}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="btn-save" style={{
            background: '#111827',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 500,
            cursor: 'pointer',
            marginTop: '16px'
          }}>Save Changes</button>
        </div>
      </div>
    );
  }

  // Dashboard View (Default)
  return (
    <div className="content-area" style={{ overflowY: 'auto' }}>
      <div className="welcome-container">
        <img 
          src="/favicon.ico" 
          alt="W3 Writelab Logo" 
          className="welcome-logo" 
          style={{ width: 80, height: 80, marginBottom: 24, display: 'block', margin: '0 auto 24px' }} 
        />
        <h1 className="welcome-title">Welcome to W3 Writelab</h1>
        <p className="welcome-subtitle">Your AI-Powered Academic Writing Assistant</p>
        
        <div className="quick-actions-grid">
          <ActionCard 
            icon={<Icons.Search />} 
            title="Citation & References" 
            desc="Find relevant papers via Semantic Scholar." 
          />
          <ActionCard 
            icon={<Icons.Edit3 />} 
            title="Grammar Check" 
            desc="Advanced proofreading with LanguageTool." 
          />
          <ActionCard 
            icon={<Icons.FileText />} 
            title="Format Document" 
            desc="Convert to PDF/LaTeX using Pandoc." 
          />
          <ActionCard 
            icon={<Icons.PieChart />} 
            title="Data Analysis" 
            desc="Compute insights with Wolfram Alpha." 
          />
          <ActionCard 
            icon={<Icons.Shield />} 
            title="Plagiarism Check" 
            desc="Verify originality with Copyscape." 
          />
          <ActionCard 
            icon={<Icons.Code />} 
            title="Translate" 
            desc="Multi-language support via DeepL." 
          />
        </div>

        <div className="how-it-works-section" style={{ marginTop: '48px', textAlign: 'left', maxWidth: '100%' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>How W3 Writelab Empowers Your Research</h2>
          
          <div className="feature-explanation" style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📚 Smart Citation Management
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
              Never worry about formatting citations again. Our integration with <strong>Semantic Scholar</strong> allows you to search for academic papers directly within the workspace. We automatically generate citations in APA, MLA, Chicago, and IEEE formats, ensuring your bibliography is always perfect.
            </p>
          </div>

          <div className="feature-explanation" style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✍️ Intelligent Writing Assistant
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
              Beyond basic spell-check, <strong>LanguageTool</strong> analyzes your writing style, tone, and clarity. It provides real-time suggestions to improve sentence structure and academic vocabulary, making your arguments more persuasive and professional.
            </p>
          </div>

          <div className="feature-explanation" style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📊 Data-Driven Insights
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
              Need to perform complex calculations or find statistical data? <strong>Wolfram Alpha</strong> is built right in. Generate charts, solve equations, and access curated knowledge without leaving your document.
            </p>
          </div>

          <div className="feature-explanation" style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔄 Seamless Formatting & Export
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
              With <strong>Pandoc</strong>, you can export your project to any format required by your institution. Whether you need a standard Word document, a clean PDF, or LaTeX for scientific publication, W3 Writelab handles the conversion flawlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, desc }) {
  return (
    <div className="action-card">
      <div className="action-icon-wrapper">
        {icon}
      </div>
      <span className="action-title">{title}</span>
      <span className="action-desc">{desc}</span>
    </div>
  );
}