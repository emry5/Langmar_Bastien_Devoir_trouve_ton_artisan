import "./Search.scss";
import ArtisanCard from "../ArtisanCard/ArtisanCard";

function Search() {
  return (
    <main className="search">

      <div className="container">

        <h1 className="search__title">
          Les artisans par catégorie
        </h1>

        {/* Bâtiment */}
        <section
            id="batiment"
            className="search__category search__category--batiment"
        >
          <h2>Bâtiment</h2>

          <div className="row">

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="1"
                name="Martin Construction"
                rating="5/5"
                specialty="Maçonnerie"
                location="Lyon"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="2"
                name="Dupont Rénovation"
                rating="4/5"
                specialty="Plomberie"
                location="Villeurbanne"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="3"
                name="Électricité Rhône"
                rating="5/5"
                specialty="Électricité"
                location="Bron"
              />
            </div>

          </div>
        </section>

        {/* Services */}
        <section
            id="services"
            className="search__category search__category--services"
        >
          <h2>Services</h2>

          <div className="row">

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="4"
                name="Martin Coiffure"
                rating="5/5"
                specialty="Coiffure"
                location="Lyon"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="5"
                name="Nettoyage Pro"
                rating="4/5"
                specialty="Nettoyage"
                location="Caluire-et-Cuire"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="6"
                name="Services Express"
                rating="5/5"
                specialty="Réparation"
                location="Oullins"
              />
            </div>

          </div>
        </section>

        {/* Fabrication */}
        <section
            id="fabrication"
            className="search__category search__category--fabrication"
        >
          <h2>Fabrication</h2>

          <div className="row">

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="7"
                name="Atelier du Bois"
                rating="5/5"
                specialty="Menuiserie"
                location="Lyon"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="8"
                name="Créations Métal"
                rating="4/5"
                specialty="Métallerie"
                location="Vénissieux"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="9"
                name="Atelier Créatif"
                rating="5/5"
                specialty="Création artisanale"
                location="Tassin-la-Demi-Lune"
              />
            </div>

          </div>
        </section>

        {/* Alimentation */}
        <section
            id="alimentation"
            className="search__category search__category--alimentation"
        >
          <h2>Alimentation</h2>

          <div className="row">

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="10"
                name="Boulangerie du Centre"
                rating="5/5"
                specialty="Boulangerie"
                location="Lyon"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="11"
                name="La Ferme du Rhône"
                rating="4/5"
                specialty="Produits fermiers"
                location="Brignais"
              />
            </div>

            <div className="col-12 col-lg-4">
              <ArtisanCard
                id="12"
                name="Le Gourmet Lyonnais"
                rating="5/5"
                specialty="Traiteur"
                location="Lyon"
              />
            </div>

          </div>
        </section>

      </div>

    </main>
  );
}

export default Search;