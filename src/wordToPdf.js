import React, { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const DocxToPdfConverter = () => {
  const [pdfData, setPdfData] = useState(null);

  const convertDocxToPdf = async (file) => {
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        console.log(reader, "reader");

        const docxBuffer = reader.result;

        // Convert DOCX to PDF
        const pdfDoc = await PDFDocument.create();
        // const embeddedFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const { pages } = await pdfDoc.copyPages(
          await PDFDocument.load(docxBuffer),
          [0]
        );
        pages.forEach((page) => {
          pdfDoc.addPage(page);
        });

        // Set the converted PDF data to state
        const pdfBytes = await pdfDoc.save();
        setPdfData(pdfBytes);
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      convertDocxToPdf(file);
    } else {
      alert("Please select a valid DOCX file.");
    }
  };
  console.log(pdfData, "pdfData");
  return (
    <div>
      <h1>DOCX to PDF Converter</h1>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      {pdfData && (
        <div style={{ marginTop: "20px" }}>
          {/* <Document file={{ data: pdfData }}>
            <Page pageNumber={1} />
          </Document> */}
          {/* {pdfData && (
            <DocViewer
              documents={[
                {
                  uri: URL.createObjectURL(pdfData),
                  // uri: "https://github.com/cyntler/react-doc-viewer/files/9015134/test-doc.docx",
                  fileName: "selectedDocs?.[0]?.name",
                },
              ]}
              pluginRenderers={DocViewerRenderers}
            />
          )} */}
        </div>
      )}
    </div>
  );
};

export default DocxToPdfConverter;
