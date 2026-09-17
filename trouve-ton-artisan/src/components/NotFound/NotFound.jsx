import { Link } from "react-router-dom";
import "./NotFound.scss";


function NotFound() {
  return (
    <main className="not-found">

      <div className="container">

        <div className="not-found__content">

          <img
            src="../404"
            alt="Page non trouvée"
          />

          <h1>Page non trouvée</h1>

          <p>
            La page que vous avez demandée n'existe pas.
          </p>

          <Link
            to="/"
            aria-label="Retourner à la page d'accueil"
          >
            Retour à l'accueil
          </Link>

        </div>

      </div>

    </main>
  );
}

export default NotFound;