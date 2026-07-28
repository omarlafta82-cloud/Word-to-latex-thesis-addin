/**
 * UTM LaTeX Template Generator
 */

class UTMTemplateGenerator {
  constructor(degreeType) {
    this.degreeType = degreeType;
  }

  generatePreamble(metadata) {
    const documentClass = this.getDocumentClass();

    return `\\documentclass[${documentClass}]{utmthesis}

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

% Metadata
\\title{${metadata.title}}
\\author{${metadata.author}}
\\date{${metadata.graduationYear}}

% University and Department Info
% Faculty: ${metadata.faculty}
% Supervisor: ${metadata.supervisor}
${metadata.coSupervisor ? `% Co-Supervisor: ${metadata.coSupervisor}` : ''}

% UTM Specific Settings
\\setstretch{1.5}
\\geometry{margin=2.5cm}
\\pagestyle{fancy}
`;
  }

  getDocumentClass() {
    const classMap = {
      'phd': 'phd,english',
      'masters': 'master,english',
      'bachelor': 'bachelor,english',
    };
    return classMap[this.degreeType] || 'phd,english';
  }
}

module.exports = UTMTemplateGenerator;
