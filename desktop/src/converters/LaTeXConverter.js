/**
 * LaTeX Converter
 * Converts text content to LaTeX format
 */

class LaTeXConverter {
  convertContent(text) {
    let latex = '';

    // Split by paragraphs
    const paragraphs = text.split('\n\n');

    for (const paragraph of paragraphs) {
      if (paragraph.trim()) {
        latex += this.convertParagraph(paragraph) + '\n\n';
      }
    }

    return latex;
  }

  convertParagraph(text) {
    let result = text;

    // Escape special LaTeX characters
    result = this.escapeLatex(result);

    // Convert formatting
    result = result.replace(/\*\*(.+?)\*\*/g, '\\textbf{$1}'); // Bold
    result = result.replace(/\*(.+?)\*/g, '\\textit{$1}'); // Italic
    result = result.replace(/__(.+?)__/g, '\\underline{$1}'); // Underline

    return result;
  }

  escapeLatex(text) {
    const chars = {
      '&': '\\&',
      '%': '\\%',
      '$': '\\$',
      '#': '\\#',
      '_': '\\_',
      '{': '\\{',
      '}': '\\}',
      '~': '\\textasciitilde{}',
      '^': '\\textasciicircum{}',
      '\\': '\\textbackslash{}',
    };

    let result = text;
    for (const [char, escaped] of Object.entries(chars)) {
      const regex = new RegExp(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      result = result.replace(regex, escaped);
    }

    return result;
  }
}

module.exports = LaTeXConverter;
