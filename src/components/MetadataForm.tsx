import React, { useState } from 'react';
import '../styles/MetadataForm.css';

interface MetadataFormProps {
  university: string;
  degreeType: string;
  onSubmit: (metadata: any) => void;
  isLoading: boolean;
}

export const MetadataForm: React.FC<MetadataFormProps> = ({
  university,
  degreeType,
  onSubmit,
  isLoading
}) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    degree: degreeType,
    faculty: '',
    supervisor: '',
    coSupervisor: '',
    graduationYear: new Date().getFullYear(),
    abstract: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="metadata-form">
      <div className="form-card">
        <h2>Thesis Information</h2>
        <p className="form-subtitle">Fill in your thesis metadata</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Thesis Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your thesis title"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author Name *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="graduationYear">Graduation Year *</label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="supervisor">Supervisor *</label>
              <input
                type="text"
                id="supervisor"
                name="supervisor"
                value={formData.supervisor}
                onChange={handleChange}
                placeholder="Supervisor name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="coSupervisor">Co-Supervisor</label>
              <input
                type="text"
                id="coSupervisor"
                name="coSupervisor"
                value={formData.coSupervisor}
                onChange={handleChange}
                placeholder="Co-supervisor name (optional)"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="faculty">Faculty/Department *</label>
            <input
              type="text"
              id="faculty"
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              placeholder="Your faculty or department"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="abstract">Abstract (Optional)</label>
            <textarea
              id="abstract"
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              placeholder="Enter your thesis abstract (optional)"
              rows={4}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Converting... ⏳' : 'Convert to LaTeX →'}
          </button>
        </form>
      </div>
    </div>
  );
};
