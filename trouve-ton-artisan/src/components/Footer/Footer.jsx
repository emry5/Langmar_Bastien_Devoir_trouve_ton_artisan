import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* Informations légales */}
          <div className="col-md-6 footer__column">
            <h2>Informations légales</h2>

            <ul>
              <li>
                <Link to="/mentions-legales">
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link to="/donnees-personnelles">
                  Données personnelles
                </Link>
              </li>

              <li>
                <Link to="/accessibilite">
                  Accessibilité
                </Link>
              </li>

              <li>
                <Link to="/cookies">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Nous contacter */}
          <div className="col-md-6 footer__column">
            <h2>Nous contacter</h2>

            <address>
              101 cours Charlemagne
              <br />
              CS 20033
              <br />
              69269 LYON CEDEX 02
              <br />
              France
              <br />
              <a
                href="tel:+33426734000"
              >
                +33 (0)4 26 73 40 00
              </a>
            </address>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;