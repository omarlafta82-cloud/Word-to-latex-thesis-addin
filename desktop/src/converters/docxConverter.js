/**
 * DOCX to LaTeX Converter Library
 * Reusable for both GUI and CLI
 */

const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const UTMTemplateGenerator = require('../templates/UTMTemplateGenerator');
const LaTeXConverter = require('./LaTeXConverter');

async function convertDocToLatex(filePath, metadata, university = 'utm', degreeType = 'phd') {
  try {
    // Read DOCX file
    const buffer = fs.readFileSync(filePath);

    // Extract text using mammoth
    const result = await mammoth.extractRawText({ arrayBuffer: buffer });
    const docContent = result.value;

    // Create metadata object
    const fullMetadata = {
      title: metadata.title || 'Untitled Thesis',
      author: metadata.author || 'Anonymous',
      supervisor: metadata.supervisor || 'Prof. Unknown',
      coSupervisor: metadata.coSupervisor || '',
      faculty: metadata.faculty || 'Faculty',
      graduationYear: metadata.graduationYear || new Date().getFullYear(),
      abstract: metadata.abstract || '',
    };

    // Generate LaTeX
    const templateGenerator = new UTMTemplateGenerator(degreeType);
    const preamble = templateGenerator.generatePreamble(fullMetadata);

    // Convert document body
    const converter = new LaTeXConverter();
    const body = converter.convertContent(docContent);

    // Combine preamble and body
    const latex = `${preamble}

\\begin{document}

${body}

\\end{document}`;

    return latex;
  } catch (error) {
    throw new Error(`Conversion failed: ${error.message}`);
  }
}

module.exports = {
  convertDocToLatex,
};
