import "./Footer.scss";

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
                <a href="/mentions-legales">
                  Mentions légales
                </a>
              </li>

              <li>
                <a href="/donnees-personnelles">
                  Données personnelles
                </a>
              </li>

              <li>
                <a href="/accessibilite">
                  Accessibilité
                </a>
              </li>

              <li>
                <a href="/cookies">
                  Cookies
                </a>
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
                aria-label="Appeler le 04 26 73 40 00"
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