export class UTMTemplateGenerator {
  private degreeType: string;

  constructor(degreeType: string) {
    this.degreeType = degreeType;
  }

  generatePreamble(metadata: any): string {
    const preamble = `\\documentclass[${this.getDocumentClass()}]{utmthesis}

% UTM Thesis Template Settings
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{babel}
\\usepackage{graphicx}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage[hidelinks]{hyperref}
\\usepackage{geometry}
\\usepackage{setspace}
\\usepackage{fancyhdr}
\\usepackage{tocloft}
\\usepackage{natbib}
\\usepackage{booktabs}
\\usepackage{array}
\\usepackage{xcolor}

% Metadata
\\title{${metadata.title}}
\\author{${metadata.author}}
\\date{\\today}

% Faculty/Department
%% ${metadata.faculty}

% UTM Specific Settings
\\setstretch{1.5}
\\geometry{margin=2.5cm}
\\pagestyle{fancy}`;

    return preamble;
  }

  private getDocumentClass(): string {
    const classMap: { [key: string]: string } = {
      'phd': 'phd,english',
      'masters': 'master,english',
      'bachelor': 'bachelor,english'
    };
    return classMap[this.degreeType] || 'phd,english';
  }

  generateFrontMatter(metadata: any): string {
    return `
% Front Matter
\\chapter*{\\centering Title Page}
\\vspace*{2cm}

{\\centering
  {\\Large\\bfseries ${metadata.title}}\\par
  \\vspace{2cm}
  ${metadata.author}\\par
  \\vspace{2cm}
  ${metadata.graduationYear}\\par
}

% Supervisor Information
\\chapter*{\\centering Supervisor}
Supervisor: ${metadata.supervisor}
${metadata.coSupervisor ? `\\\nCo-Supervisor: ${metadata.coSupervisor}` : ''}
    `;
  }
}
