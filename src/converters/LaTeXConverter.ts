import { WordContent } from './DocumentExtractor';
import { StyleMapper } from './StyleMapper';
import { UTMTemplateGenerator } from '../templates/UTMTemplateGenerator';

export class LaTeXConverter {
  private university: string;
  private degreeType: string;
  private metadata: any;
  private styleMapper: StyleMapper;
  private templateGenerator: UTMTemplateGenerator;

  constructor(university: string, degreeType: string, metadata: any) {
    this.university = university;
    this.degreeType = degreeType;
    this.metadata = metadata;
    this.styleMapper = new StyleMapper();
    this.templateGenerator = new UTMTemplateGenerator(degreeType);
  }

  async convert(content: WordContent): Promise<string> {
    // Generate preamble with UTM template settings
    const preamble = this.templateGenerator.generatePreamble(this.metadata);

    // Convert document body
    const body = this.convertBody(content);

    // Combine into complete LaTeX document
    const latex = `${preamble}\n\n\\begin{document}\n\n${body}\n\n\\end{document}`;

    return latex;
  }

  private convertBody(content: WordContent): string {
    let body = '';

    // Add front matter
    body += this.generateFrontMatter();

    // Convert paragraphs
    content.paragraphs.forEach((paragraph, index) => {
      if (paragraph.trim()) {
        const converted = this.convertParagraph(paragraph);
        body += converted + '\n';
      }
    });

    // Add references
    body += '\n\\bibliography{reference}\n';
    body += '\\bibliographystyle{utmthesis-numbering}\n';

    return body;
  }

  private convertParagraph(text: string): string {
    // Map Word styles to LaTeX commands
    text = this.styleMapper.mapStyles(text);

    // Handle special characters
    text = this.escapeLatexSpecialChars(text);

    // Convert formatting
    text = text.replace(/\*\*(.+?)\*\*/g, '\\textbf{$1}'); // Bold
    text = text.replace(/\*(.+?)\*/g, '\\textit{$1}'); // Italic
    text = text.replace(/__(.+?)__/g, '\\underline{$1}'); // Underline

    return text;
  }

  private generateFrontMatter(): string {
    let frontMatter = '';

    // Add title page
    frontMatter += `\\title{${this.metadata.title}}\n`;
    frontMatter += `\\author{${this.metadata.author}}\n`;
    frontMatter += `\\date{${this.metadata.graduationYear}}\n\n`;

    // Add supervisor info
    frontMatter += `%% Supervisor\n`;
    frontMatter += `% ${this.metadata.supervisor}\n`;

    if (this.metadata.coSupervisor) {
      frontMatter += `%% Co-Supervisor\n`;
      frontMatter += `% ${this.metadata.coSupervisor}\n`;
    }

    frontMatter += `\n\\maketitle\n\n`;

    // Add table of contents
    frontMatter += `\\tableofcontents\n\n`;
    frontMatter += `\\listoffigures\n\n`;
    frontMatter += `\\listoftables\n\n`;

    return frontMatter;
  }

  private escapeLatexSpecialChars(text: string): string {
    const chars: { [key: string]: string } = {
      '&': '\\&',
      '%': '\\%',
      '$': '\\$',
      '#': '\\#',
      '_': '\\_',
      '{': '\\{',
      '}': '\\}',
      '~': '\\textasciitilde{}',
      '^': '\\textasciicircum{}',
      '\\': '\\textbackslash{}'
    };

    let result = text;
    for (const [char, escaped] of Object.entries(chars)) {
      result = result.replace(new RegExp(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), escaped);
    }
    return result;
  }
}
