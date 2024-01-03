import logo from "./logo.svg";
import "./App.css";
import MyDocument from "./FileViewer";
import DocViewerWithInputApp from "./react-doc-viewer";
import MyComponent from "./react-file-viewer";
import DocxToPdfConverter from "./wordToPdf";

function App() {
  return (
    <div className="App">
      <DocViewerWithInputApp />
      {/* <MyComponent /> */}
      {/* <DocxToPdfConverter /> */}
    </div>
  );
}

export default App;
