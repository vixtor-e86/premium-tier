'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FacultyModal from '@/components/modals/FacultyModal';
import DepartmentModal from '@/components/modals/DepartmentModal';
import CustomModal from '@/components/modals/CustomModal';
import LoadingModal from '@/components/modals/LoadingModal';
import TemplateCard from '@/components/TemplateCard';
import '@/styles/template-selection.css';

export default function TemplateSelection() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Processing...');

  const templates = [
    {
      id: '5-chapter',
      title: '5-Chapter Project',
      description: 'Standard undergraduate project structure',
      icon: '📘',
      color: 'blue',
      action: () => setActiveModal('faculty')
    },
    {
      id: 'thesis',
      title: 'Thesis (6 Chapters)',
      description: 'Postgraduate research thesis',
      icon: '🎓',
      color: 'purple',
      action: () => setActiveModal('department')
    },
    {
      id: 'custom',
      title: 'Custom Template',
      description: 'Build or upload your own structure',
      icon: '⚡',
      color: 'orange',
      action: () => setActiveModal('custom')
    },
  ];

  const handleProceed = (templateType, additionalData = {}) => {
    console.log('Proceeding with:', templateType, additionalData);
    
    // Close any open modal
    setActiveModal(null);
    
    // Set loading text based on template type
    if (templateType === '5-chapter') {
      setLoadingText(`Setting up ${additionalData.faculty?.name} template...`);
    } else if (templateType === 'thesis') {
      setLoadingText(`Configuring ${additionalData.department?.name} thesis...`);
    } else if (templateType === 'custom') {
      setLoadingText('Building your custom template...');
    }
    
    // Show loading modal
    setIsLoading(true);
    
    // Simulate loading for 3 seconds then navigate
    setTimeout(() => {
      setIsLoading(false);
      // TODO: Navigate to project description page
      // router.push('/project-description');
      console.log('Navigate to project description');
    }, 3000);
  };

  return (
    <div className="template-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="content-wrapper"
      >
        <div className="header-section">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="premium-badge"
          >
            PREMIUM
          </motion.div>
          <h1>Choose Your Template</h1>
          <p>Select the structure that matches your academic project</p>
        </div>

        <div className="templates-grid">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <FacultyModal
        isOpen={activeModal === 'faculty'}
        onClose={() => setActiveModal(null)}
        onSelect={(faculty) => {
          handleProceed('5-chapter', { faculty });
        }}
      />

      <DepartmentModal
        isOpen={activeModal === 'department'}
        onClose={() => setActiveModal(null)}
        onSelect={(dept) => {
          handleProceed('thesis', { department: dept });
        }}
      />

      <CustomModal
        isOpen={activeModal === 'custom'}
        onClose={() => setActiveModal(null)}
        onProceed={(data) => {
          handleProceed('custom', data);
        }}
      />

      <LoadingModal isOpen={isLoading} loadingText={loadingText} />
    </div>
  );
}