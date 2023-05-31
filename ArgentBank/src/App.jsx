import "./App.css";
import {
  Home,
  Footer,
  TopBanner,
  LoginPage,
  UserPage,
} from "./elementsIndex/elementsIndex.jsx";

function App() {
  return (
    <>
      <TopBanner />
      <Home />
      <LoginPage />
      <UserPage />
      <Footer />
    </>
  );
}

export default App;
