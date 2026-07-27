import express from 'express';
import { convertDocToLaTeX } from './converters/docxConverter';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'UTM Thesis Converter Backend' });
});

// Conversion endpoint
app.post('/api/convert', async (req, res) => {
  try {
    const { docContent, metadata, university, degreeType } = req.body;
    const latexOutput = await convertDocToLaTeX(
      docContent,
      metadata,
      university,
      degreeType
    );

    res.json({
      success: true,
      latex: latexOutput,
      message: 'Document converted successfully'
    });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Conversion failed'
    });
  }
});

// List available templates
app.get('/api/templates', (req, res) => {
  const templates = {
    utm: {
      name: 'Universiti Teknologi Malaysia',
      version: '7.0',
      degrees: ['phd', 'masters', 'bachelor']
    }
  };
  res.json(templates);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
