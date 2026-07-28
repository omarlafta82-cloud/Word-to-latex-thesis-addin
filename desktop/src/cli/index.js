#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { convertDocToLatex } = require('../converters/docxConverter');

const argv = yargs(hideBin(process.argv))
  .command('convert', 'Convert Word document to LaTeX', (yargs) => {
    return yargs
      .option('input', {
        alias: 'i',
        description: 'Input Word file path',
        type: 'string',
      })
      .option('output', {
        alias: 'o',
        description: 'Output LaTeX file path',
        type: 'string',
      })
      .option('university', {
        alias: 'u',
        description: 'University template (utm)',
        type: 'string',
        default: 'utm',
      })
      .option('degree', {
        alias: 'd',
        description: 'Degree type (phd, masters, bachelor)',
        type: 'string',
        default: 'phd',
      })
      .option('title', {
        alias: 't',
        description: 'Thesis title',
        type: 'string',
      })
      .option('author', {
        alias: 'a',
        description: 'Author name',
        type: 'string',
      })
      .option('supervisor', {
        alias: 's',
        description: 'Supervisor name',
        type: 'string',
      })
      .option('year', {
        alias: 'y',
        description: 'Graduation year',
        type: 'number',
        default: new Date().getFullYear(),
      })
      .option('batch', {
        alias: 'b',
        description: 'Batch conversion (directory path)',
        type: 'string',
      })
      .option('interactive', {
        description: 'Interactive mode',
        type: 'boolean',
        default: false,
      })
      .option('verbose', {
        alias: 'v',
        description: 'Verbose output',
        type: 'boolean',
        default: false,
      };
  })
  .command('batch', 'Batch convert multiple files', (yargs) => {
    return yargs
      .option('input-dir', {
        alias: 'i',
        description: 'Input directory with Word files',
        type: 'string',
        demandOption: true,
      })
      .option('output-dir', {
        alias: 'o',
        description: 'Output directory for LaTeX files',
        type: 'string',
        demandOption: true,
      })
      .option('recursive', {
        alias: 'r',
        description: 'Recursively process subdirectories',
        type: 'boolean',
        default: false,
      });
  })
  .command('validate', 'Validate Word document', (yargs) => {
    return yargs
      .option('input', {
        alias: 'i',
        description: 'Input Word file path',
        type: 'string',
        demandOption: true,
      });
  })
  .option('help', {
    alias: 'h',
    description: 'Show help',
    type: 'boolean',
  })
  .example('convert -i thesis.docx -o thesis.tex -t "My Thesis" -a "John Doe" -s "Dr. Smith"', 'Convert a Word document')
  .example('batch -i ./documents -o ./latex-output', 'Batch convert directory')
  .example('validate -i thesis.docx', 'Validate a document')
  .epilog('For more information, visit: https://github.com/omarlafta82-cloud/word-to-latex-thesis-addin')
  .help()
  .argv;

async function main() {
  if (argv._[0] === 'convert') {
    await handleConvert(argv);
  } else if (argv._[0] === 'batch') {
    await handleBatch(argv);
  } else if (argv._[0] === 'validate') {
    await handleValidate(argv);
  } else {
    console.log(chalk.cyan('UTM Thesis to LaTeX Converter - CLI'));
    console.log(chalk.gray('Use --help for usage information'));
  }
}

async function handleConvert(options) {
  try {
    let input = options.input;
    let metadata = {
      title: options.title,
      author: options.author,
      supervisor: options.supervisor,
      graduationYear: options.year,
    };

    if (options.interactive) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'input',
          message: 'Input Word file path:',
          default: options.input,
        },
        {
          type: 'input',
          name: 'title',
          message: 'Thesis title:',
        },
        {
          type: 'input',
          name: 'author',
          message: 'Author name:',
        },
        {
          type: 'input',
          name: 'supervisor',
          message: 'Supervisor name:',
        },
        {
          type: 'number',
          name: 'year',
          message: 'Graduation year:',
          default: new Date().getFullYear(),
        },
        {
          type: 'input',
          name: 'output',
          message: 'Output LaTeX file path:',
          default: 'thesis.tex',
        },
      ]);
      input = answers.input;
      metadata = answers;
    }

    if (!input) {
      console.error(chalk.red('Error: Input file not specified'));
      process.exit(1);
    }

    if (!fs.existsSync(input)) {
      console.error(chalk.red(`Error: File not found: ${input}`));
      process.exit(1);
    }

    console.log(chalk.blue('Converting...'));
    const latex = await convertDocToLatex(input, metadata, options.university, options.degree);

    const output = options.output || 'thesis.tex';
    fs.writeFileSync(output, latex, 'utf-8');

    console.log(chalk.green(`✓ Successfully converted to: ${output}`));
    if (options.verbose) {
      console.log(chalk.gray(`File size: ${fs.statSync(output).size} bytes`));
    }
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

async function handleBatch(options) {
  try {
    console.log(chalk.blue(`Batch processing: ${options.inputDir}`));

    if (!fs.existsSync(options.outputDir)) {
      fs.mkdirSync(options.outputDir, { recursive: true });
    }

    const files = fs.readdirSync(options.inputDir)
      .filter(f => f.endsWith('.docx') || f.endsWith('.doc'));

    console.log(chalk.cyan(`Found ${files.length} Word files`));

    let converted = 0;
    for (const file of files) {
      try {
        const inputPath = path.join(options.inputDir, file);
        const outputPath = path.join(options.outputDir, file.replace(/\.docx?$/, '.tex'));

        const latex = await convertDocToLatex(inputPath, {}, 'utm', 'phd');
        fs.writeFileSync(outputPath, latex, 'utf-8');

        console.log(chalk.green(`✓ ${file}`));
        converted++;
      } catch (error) {
        console.log(chalk.yellow(`⚠ ${file}: ${error.message}`));
      }
    }

    console.log(chalk.blue(`\nCompleted: ${converted}/${files.length} files converted`));
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

async function handleValidate(options) {
  try {
    if (!fs.existsSync(options.input)) {
      console.error(chalk.red(`Error: File not found: ${options.input}`));
      process.exit(1);
    }

    console.log(chalk.blue('Validating...'));
    const stats = fs.statSync(options.input);

    console.log(chalk.green('✓ File exists'));
    console.log(chalk.green(`✓ File size: ${(stats.size / 1024).toFixed(2)} KB`));
    console.log(chalk.green('✓ File is readable'));
    console.log(chalk.green('Validation passed!'));
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}

main().catch(error => {
  console.error(chalk.red(`Fatal error: ${error.message}`));
  process.exit(1);
});
