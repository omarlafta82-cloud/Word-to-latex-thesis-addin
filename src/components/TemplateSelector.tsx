import React, { useState } from 'react';
import '../styles/TemplateSelector.css';

interface TemplateSelectorProps {
  onSelect: (university: string, degreeType: string) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
  const [selectedUniversity, setSelectedUniversity] = useState('utm');
  const [selectedDegree, setSelectedDegree] = useState('');

  const universities = [
    {
      id: 'utm',
      name: 'Universiti Teknologi Malaysia (UTM)',
      icon: '🎓',
      degrees: ['phd', 'masters', 'bachelor']
    }
  ];

  const degreeLabels: { [key: string]: string } = {
    phd: 'Doctor of Philosophy (PhD)',
    masters: "Master's Degree",
    bachelor: "Bachelor's Degree"
  };

  const handleSubmit = () => {
    if (selectedDegree) {
      onSelect(selectedUniversity, selectedDegree);
    }
  };

  return (
    <div className="template-selector">
      <div className="template-card">
        <h2>Select Your University & Degree Type</h2>

        <div className="university-section">
          <label>University:</label>
          <div className="university-options">
            {universities.map(uni => (
              <div
                key={uni.id}
                className={`uni-option ${selectedUniversity === uni.id ? 'selected' : ''}`}
                onClick={() => setSelectedUniversity(uni.id)}
              >
                <span className="icon">{uni.icon}</span>
                <span className="name">{uni.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="degree-section">
          <label>Degree Type:</label>
          <div className="degree-options">
            {universities.find(u => u.id === selectedUniversity)?.degrees.map(degree => (
              <button
                key={degree}
                className={`degree-btn ${selectedDegree === degree ? 'active' : ''}`}
                onClick={() => setSelectedDegree(degree)}
              >
                {degreeLabels[degree]}
              </button>
            ))}
          </div>
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!selectedDegree}
        >
          Continue to Metadata →
        </button>
      </div>
    </div>
  );
};
