import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import ArtisanDetail from "./components/ArtisanDetail/ArtisanDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.substring(1)
      );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/artisans/:id" element={<ArtisanDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;