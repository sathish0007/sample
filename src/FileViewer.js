import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import fileData from "./test.pdf";
const PdfViewer = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} accept="application/pdf" />
      {file && (
        <div>
          <Document file={fileData} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={handlePreviousPage} disabled={pageNumber <= 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={pageNumber >= numPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
