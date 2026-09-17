import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Navigation principale"
      >
        <div className="container-fluid">

          {/* Logo */}
            <Link
                className="navbar-brand header__logo"
                to="/"
                aria-label="Trouve ton artisan - Accueil"
                >
                <img
                    src={logo}
                    alt="Trouve ton artisan"
                />
            </Link>

          {/* Barre de recherche */}
          <form
                className="header__search"
                onSubmit={(event) => {
                    event.preventDefault();

                    const searchValue = event.target.elements.search.value.trim();

                    navigate(
                    searchValue
                        ? `/recherche?search=${encodeURIComponent(searchValue)}`
                        : "/recherche"
                    );
                }}
                role="search"
                >
            <label
              htmlFor="header-search"
              className="visually-hidden"
            >
              Rechercher un artisan
            </label>

            <input
              id="header-search"
              type="search"
              placeholder="Rechercher..."
              name="search"
            />

            <button
              type="submit"
              aria-label="Lancer la recherche"
            >
              🔍
            </button>
          </form>

          {/* Bouton menu mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded={menuOuvert}
            aria-label={
              menuOuvert
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            onClick={() => setMenuOuvert(!menuOuvert)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/recherche#batiment"
                >
                  Bâtiment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/recherche#services"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/recherche#fabrication"
                >
                  Fabrication
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/recherche#alimentation"
                >
                  Alimentation
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;