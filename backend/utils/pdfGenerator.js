const { PDFDocument } = require('pdf-lib');
async function generatePDFReport(userData) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText(`Performance Report for ${userData.name}`);
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
module.exports = generatePDFReport;