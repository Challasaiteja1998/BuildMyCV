import React from 'react';
import { Button, Box } from '@mui/material';
import html2pdf from 'html2pdf.js';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

const ExportResume = ({ resumeRef }) => {
  const downloadPDF = () => {
    const element = resumeRef.current;

    // Clone element to manipulate print-specific styles if needed
    const clone = element.cloneNode(true);

    // Ensure clean styling for PDF export
    clone.style.fontSize = '12px';
    clone.style.lineHeight = '1.5';
    clone.style.padding = '20px';

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Challa_Saiteja_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollY: 0,
      },
      jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'portrait',
      },
    };

    html2pdf().set(opt).from(clone).save();
  };

  const downloadDOCX = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.5; }
            h1, h2, h3 { margin: 0; padding: 0; }
            table { width: 100%; border-collapse: collapse; }
            td, th { padding: 4px; }
          </style>
        </head>
        <body>
          ${resumeRef.current.innerHTML}
        </body>
      </html>
    `;
    const blob = htmlDocx.asBlob(htmlContent);
    saveAs(blob, 'Challa_Saiteja_Resume.docx');
  };

  return (
    <Box display="flex" justifyContent="center" gap={2} my={4}>
      <Button variant="contained" color="primary" onClick={downloadPDF}>
        Download as PDF
      </Button>
      <Button variant="outlined" color="secondary" onClick={downloadDOCX}>
        Download as DOCX
      </Button>
    </Box>
  );
};

export default ExportResume;
