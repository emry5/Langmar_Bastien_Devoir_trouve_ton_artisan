import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import ArtisanDetail from "./components/ArtisanDetail/ArtisanDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import LegalPage from "./components/LegalPage/LegalPage";

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
function SEO() {
  const location = useLocation();

  useEffect(() => {
    const seoData = {
      "/": {
        title: "Trouve Ton Artisan | Auvergne-Rhône-Alpes",
        description:
          "Trouvez facilement un artisan en Auvergne-Rhône-Alpes et contactez-le directement.",
      },
      "/recherche": {
        title: "Rechercher un artisan | Trouve Ton Artisan",
        description:
          "Recherchez un artisan par son nom, sa spécialité ou sa localisation.",
      },
      "/mentions-legales": {
        title: "Mentions légales | Trouve Ton Artisan",
        description:
          "Mentions légales du site Trouve Ton Artisan.",
      },
      "/donnees-personnelles": {
        title: "Données personnelles | Trouve Ton Artisan",
        description:
          "Informations relatives à la protection des données personnelles.",
      },
      "/accessibilite": {
        title: "Accessibilité | Trouve Ton Artisan",
        description:
          "Informations concernant l'accessibilité du site Trouve Ton Artisan.",
      },
      "/cookies": {
        title: "Cookies | Trouve Ton Artisan",
        description:
          "Informations concernant l'utilisation des cookies sur Trouve Ton Artisan.",
      },
    };

    const currentSEO = seoData[location.pathname] || {
      title: "Trouve Ton Artisan",
      description:
        "Trouvez facilement un artisan en Auvergne-Rhône-Alpes.",
    };

    document.title = currentSEO.title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      currentSEO.description
    );
  }, [location.pathname]);

  return null;
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <SEO />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Search />} />
        <Route
          path="/artisans/:id"
          element={<ArtisanDetail />}
        />

        <Route
          path="/mentions-legales"
          element={<LegalPage title="Mentions légales" />}
        />

        <Route
          path="/donnees-personnelles"
          element={<LegalPage title="Données personnelles" />}
        />

        <Route
          path="/accessibilite"
          element={<LegalPage title="Accessibilité" />}
        />

        <Route
          path="/cookies"
          element={<LegalPage title="Cookies" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;