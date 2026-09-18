import { Link } from "react-router-dom";
import "./LegalPage.scss";

function LegalPage({ title }) {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>{title}</h1>
        <p>Page en construction</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </main>
  );
}

export default LegalPage;