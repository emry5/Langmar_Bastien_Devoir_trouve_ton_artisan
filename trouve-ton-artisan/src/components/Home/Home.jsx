import "./Home.scss";

import searchIcon from "../../assets/icons/search.svg";
import chooseIcon from "../../assets/icons/choose.svg";
import mailIcon from "../../assets/icons/mail.svg";
import timeIcon from "../../assets/icons/time.svg";
import ArtisanCard from "../ArtisanCard/ArtisanCard";

function Home() {
  return (
    <main className="home">

      {/* Première zone */}
        <section className="home__categories">
            <div className="container">

            <h1 className="home__title">
                Comment trouver mon artisan:
            </h1>

            <div className="row">

                <div className="col-12 col-md-6 col-lg-3">
                <div className="home__category">
                    <img
                    src={searchIcon}
                    alt="Loupe"
                    />

                    <h2>1. Choisir une catégorie</h2>

                    <p>
                    Sélectionnez le domaine qui vous intéresse.
                    </p>
                </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                <div className="home__category">
                    <img
                    src={chooseIcon}
                    alt="Silhouette"
                    />

                    <h2>2. Choisir un artisan</h2>

                    <p>
                    Trouvez des artisans dans votre région.
                    </p>
                </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                <div className="home__category">
                    <img
                    src={mailIcon}
                    alt="Enveloppe"
                    />

                    <h2>3. Le contacter</h2>

                    <p>
                    Envoyez votre demande directement à l’artisan.
                    </p>
                </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                <div className="home__category">
                    <img
                    src={timeIcon}
                    alt="Horloge"
                    />

                    <h2>4. Une réponse sous 48h</h2>

                    <p>
                    Obtenez une réponse sous 48h.
                    </p>
                </div>
                </div>

            </div>
            </div>
        </section>


      {/* Deuxième zone : artisans */}
        <section className="home__artisans">
            <div className="container">

                <h2 className="home__title">
                Les artisans à découvrir
                </h2>

                <div className="row">

                <div className="col-12 col-md-6 col-lg-4">
                    <ArtisanCard
                    id="1"
                    name="Martin Construction"
                    rating="5/5"
                    specialty="Maçonnerie"
                    location="Lyon"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ArtisanCard
                    id="2"
                    name="Dupont Rénovation"
                    rating="4/5"
                    specialty="Plomberie"
                    location="Villeurbanne"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <ArtisanCard
                    id="3"
                    name="Électricité Rhône"
                    rating="5/5"
                    specialty="Électricité"
                    location="Bron"
                    />
                </div>

                </div>

            </div>
        </section>

    </main>
  );
}

export default Home;