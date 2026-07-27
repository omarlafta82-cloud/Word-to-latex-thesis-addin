export interface WordContent {
  title: string;
  paragraphs: string[];
  images: any[];
  tables: any[];
  metadata: {
    author?: string;
    subject?: string;
    title?: string;
  };
}

export class DocumentExtractor {
  async extractFromWord(): Promise<WordContent> {
    return new Promise((resolve, reject) => {
      Word.onReady(async () => {
        try {
          await Word.run(async context => {
            const body = context.document.body;
            body.load('text');

            const paragraphs = body.paragraphs;
            paragraphs.load('text,style');

            const tables = body.tables;
            tables.load('rowCount,columnCount');

            const images = body.inlinePictures;
            images.load('width,height');

            await context.sync();

            const content: WordContent = {
              title: context.document.properties.title || '',
              paragraphs: paragraphs.items.map(p => p.text),
              images: images.items.map(img => ({ width: img.width, height: img.height })),
              tables: tables.items.map(table => ({
                rows: table.rowCount,
                cols: table.columnCount
              })),
              metadata: {
                author: context.document.properties.author,
                subject: context.document.properties.subject,
                title: context.document.properties.title
              }
            };

            resolve(content);
          });
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}
