import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  // Footer,
  // TopBanner,
  // LoginPage,
  // UserPage,
} from "./0_elementsIndex/elementsIndex.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
