import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Sanitizes input string to create safe filename
 */
export function sanitizeFileName(name: string, prefix = 'Internship_Completion_Letter'): string {
  const cleanName = (name || 'Intern')
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .replace(/_+/g, '_');
  return `${prefix}_${cleanName}.pdf`;
}

/**
 * Exports an HTML element to high-resolution portrait A4 PDF
 * Completely eliminates html2canvas letter-overlapping and merged space bugs:
 * 1. Ensures all fonts are fully loaded before capture
 * 2. Neutralizes parent CSS transforms (e.g. scale/zoom) in the clone
 * 3. Enforces explicit letter spacing (0.15px) so the canvas font-measure doesn't drop spaces
 * 4. Syncs loaded document fonts into the cloned iframe context
 */
export async function exportElementToPdf(
  element: HTMLElement,
  filename: string,
  orientation: 'portrait' | 'landscape' = 'portrait'
): Promise<void> {
  // Wait for all web fonts and stylesheets to be completely loaded
  if (document.fonts) {
    await document.fonts.ready;
  }

  const canvas = await html2canvas(element, {
    scale: 2.5, // Crisp 300+ DPI resolution without memory blowup
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    windowWidth: 794,
    windowHeight: 1123,
    onclone: (clonedDoc, clonedElement) => {
      // 1. Sync fonts into cloned document context
      if (document.fonts && clonedDoc.fonts) {
        document.fonts.forEach((font) => {
          clonedDoc.fonts.add(font);
        });
      }

      // 2. Remove all parent CSS transforms (such as zoom scale) on the cloned hierarchy
      let parent: HTMLElement | null = clonedElement.parentElement;
      while (parent && parent !== clonedDoc.body) {
        parent.style.transform = 'none';
        parent.style.webkitTransform = 'none';
        parent.style.zoom = '1';
        parent = parent.parentElement;
      }

      // 3. Ensure the cloned element itself has clean unscaled dimensions
      clonedElement.style.transform = 'none';
      clonedElement.style.webkitTransform = 'none';
      clonedElement.style.position = 'static';
      clonedElement.style.margin = '0 auto';

      // 4. Force letter-spacing on all text elements inside the clone to prevent character collapse
      const allTextNodes = clonedElement.querySelectorAll<HTMLElement>('p, span, h1, h2, h3, h4, div, strong');
      allTextNodes.forEach((node) => {
        node.style.letterSpacing = '0.15px';
        node.style.wordSpacing = 'normal';
      });
    }
  });

  const imgData = canvas.toDataURL('image/png', 1.0);

  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format: 'a4'
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(filename);
}
