import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useState } from "react";

const DocViewerWithInputApp = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);

  console.log(selectedDocs, "selectedDocs");
  return (
    <>
      <input
        type="file"
        accept="*"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      {/* {selectedDocs?.[0] && (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=http://localhost:3000/sample.docx`}
          width="640px"
          height="300px"
          frameborder="0"
        >
          This is an embedded{" "}
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>{" "}
          document, powered by{" "}
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>
      )} */}

      {selectedDocs?.[0] && (
        <DocViewer
          documents={[
            // {
            //   // fileData: selectedDocs[0],
            //   uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
            //   // uri: "https://github.com/cyntler/react-doc-viewer/files/9015134/test-doc.docx",
            //   fileName: "test.docx",
            //   fileType: "docx",
            // },
            {
              uri: "https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls",
              fileName: "test.xlxs",
              fileType: "xls",
            },
            // {
            //   fileData: btoa(selectedDocs[0]),
            //   fileType: "xls",
            // },
          ]}
          pluginRenderers={DocViewerRenderers}
        />
      )}
    </>
  );
};
export default DocViewerWithInputApp;
