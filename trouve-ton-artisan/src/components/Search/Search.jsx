import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Search.scss";
import ArtisanCard from "../ArtisanCard/ArtisanCard";

function Search() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await fetch("http://laba8455.odns.fr/api/artisans");

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des artisans."
          );
        }

        const data = await response.json();

        setArtisans(data);
      } catch (error) {
        console.error(error);
        setError("Impossible de récupérer les artisans.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  const categories = [
    {
      id: "batiment",
      name: "Bâtiment",
      value: "Bâtiment",
    },
    {
      id: "services",
      name: "Services",
      value: "Services",
    },
    {
      id: "fabrication",
      name: "Fabrication",
      value: "Fabrication",
    },
    {
      id: "alimentation",
      name: "Alimentation",
      value: "Alimentation",
    },
  ];

  if (loading) {
    return (
      <main className="search">
        <div className="container">
          <p role="status">Chargement des artisans...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="search">
        <div className="container">
          <p role="alert">{error}</p>
        </div>
      </main>
    );
  }

  const search = searchValue.toLowerCase().trim();

  const filteredArtisans = artisans.filter((artisan) => {
    if (!search) {
      return true;
    }

    return (
      artisan.nom.toLowerCase().includes(search) ||
      artisan.specialite.toLowerCase().includes(search) ||
      artisan.localisation.toLowerCase().includes(search)
    );
  });

  return (
    <main className="search">
      <div className="container">
        <h1 className="search__title">
          Les artisans par catégorie
        </h1>

        {searchValue && (
          <p>
            Résultats pour : <strong>{searchValue}</strong>
          </p>
        )}

        {searchValue && filteredArtisans.length === 0 && (
          <p role="status">
            Aucun artisan ne correspond à votre recherche.
          </p>
        )}

        {categories.map((category) => {
          const artisansCategory = filteredArtisans.filter(
            (artisan) => artisan.categorie === category.value
          );

          return (
            <section
              key={category.id}
              id={category.id}
              className={`search__category search__category--${category.id}`}
            >
              <h2>{category.name}</h2>

              <div className="row">
                {artisansCategory.map((artisan) => (
                  <div
                    className="col-12 col-lg-4"
                    key={artisan.id}
                  >
                    <ArtisanCard
                      id={artisan.id}
                      name={artisan.nom}
                      rating={`${Number(artisan.note)}/5`}
                      specialty={artisan.specialite}
                      location={artisan.localisation}
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default Search;