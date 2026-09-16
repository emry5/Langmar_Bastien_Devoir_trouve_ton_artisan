import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

            {/* Logo */}
            <a className="navbar-brand header__logo" href="/">
                Trouve ton artisan
            </a>

            {/* Barre de recherche */}
            <form
                className="header__search"
                onSubmit={(event) => {
                    event.preventDefault();
                    navigate("/recherche");
                }}
                >
                <input
                    type="search"
                    placeholder="Rechercher..."
                    aria-label="Rechercher"
                />

                <button type="submit" aria-label="Rechercher">
                    🔍
                </button>
                </form>

            {/* Bouton burger */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Ouvrir le menu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu déroulant */}
            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/batiment">
                    Bâtiment
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/services">
                    Services
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/fabrication">
                    Fabrication
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/alimentation">
                    Alimentation
                    </a>
                </li>
                </ul>
            </div>

            </div>
        </nav>
        </header>
    );
}

export default Header;