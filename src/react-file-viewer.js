// MyApp.js
import React, { Component, useState } from "react";
import FileViewer from "react-file-viewer";

const file =
  "https://github.com/cyntler/react-doc-viewer/files/9015134/test-doc.docx";
const type = "pdf";

const MyComponent = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      {selectedDocs?.[0] && (
        <FileViewer
          fileType={"docx"}
          filePath={URL.createObjectURL(selectedDocs[0])}
          onError={(e) => {
            console.error("Error occurred:", e);
          }}
        />
      )}
    </div>
  );
};

export default MyComponent;

// import React from "react";
// import ReactDOM from "react-dom";
// import FileViewer from "react-file-viewer";

// import "./styles.css";

// const file = "./AgileDefinitions.docx";
// const file = "http://localhost:3000/sample.docx";
// const type = "docx";

// const onError = (e) => {
//   console.log(e, "error in file-viewer");
// };

// const props = {
//   allowFullScreen: true,
//   src: "https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/resumes/files/1623291640620_resume4.pdf",
// };

// export default function FileViewerComp() {
//   return (
//     <div className="App">
//       <h1>React File Viewer Demo</h1>
//       <h2>Displaying file with extension {type}</h2>
//       <FileViewer
//         className="file-viewer-style"
//         fileType={type}
//         filePath={file}
//         onError={onError}
//       />
//     </div>
//   );
// }
