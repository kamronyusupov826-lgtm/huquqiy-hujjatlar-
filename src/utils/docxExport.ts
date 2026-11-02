import { Document, Paragraph, TextRun, Packer, AlignmentType } from 'docx';

/**
 * Converts formatted text into a real Microsoft Word .docx document and triggers browser download.
 * Perfectly supports Uzbek characters (o', g', sh, ch, etc.) with standard 12pt Times New Roman.
 */
export async function exportToDocx(title: string, rawText: string): Promise<void> {
  const lines = rawText.split('\n');

  const paragraphs: Paragraph[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      paragraphs.push(
        new Paragraph({
          children: [new TextRun({ text: '', font: 'Times New Roman', size: 24 })],
          spacing: { after: 120 },
        })
      );
      continue;
    }

    // Check header / court recipient alignment
    // Lines that start with recipient or court often belong on the right side or top
    const isHeaderLine = /^(ga$|Toshkent|Ariza beruvchi|Da'vogar|Javobgar|Undiruvchi|Qarzdor|Manzil|Telefon|Pasport)/i.test(trimmed);
    const isDocTitle = /^(ARIZA|DA'VO ARIZASI|ILTIMOSNOMA|SHIKOYAT|SHARTNOMA|ISHONCHNOMA|TALABNOMA)/.test(trimmed);
    const isSectionHeader = /^(SO'RAYMAN|SO'RAYMIZ|Ilovalar|Ilova qilinadigan|TARAFLARNING|1\.|2\.|3\.)/.test(trimmed);

    let alignment: (typeof AlignmentType)[keyof typeof AlignmentType] = AlignmentType.LEFT;
    let bold = false;
    let size = 24; // 12pt

    if (isDocTitle) {
      alignment = AlignmentType.CENTER;
      bold = true;
      size = 28; // 14pt
    } else if (isSectionHeader) {
      bold = true;
    }

    paragraphs.push(
      new Paragraph({
        alignment,
        children: [
          new TextRun({
            text: line,
            font: 'Times New Roman',
            size,
            bold,
          }),
        ],
        spacing: {
          line: 276, // 1.15 line spacing
          after: isDocTitle ? 200 : 100,
        },
      })
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch (2.54cm)
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: paragraphs,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const safeFilename = `${title.replace(/[/\\?%*:|"<>]/g, '_').substring(0, 50)}.docx`;

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = safeFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
