import { Outlet } from "react-router-dom";
import { Footer, TopBanner } from "../0_elementsIndex/elementsIndex.jsx";

const HomePage = () => {
  return (
    <>
      <header>
        <TopBanner />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
