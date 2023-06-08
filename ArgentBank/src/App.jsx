import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  Footer,
  LoginPage,
  TopBanner,
  UserPage,
} from "./0_elementsIndex/elementsIndex.jsx";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <nav>
            <TopBanner />
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/user-page" element={<UserPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
