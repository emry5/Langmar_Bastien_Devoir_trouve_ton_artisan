import { Link } from "react-router-dom";
import "./ArtisanCard.scss";

import ratingIcon from "../../assets/icons/rating.svg";

function ArtisanCard({
  id,
  name,
  rating,
  specialty,
  location
}) {
  const ratingValue = Number.parseInt(rating, 10);

  return (
    <Link
      to={`/artisans/${id}`}
      className="artisan-card"
      aria-label={`Voir la fiche de ${name}`}
    >
      <article className="card">
        <div className="card-body">

          <h3 className="artisan-card__name">
            {name}
          </h3>

          <div
            className="artisan-card__rating"
            aria-label={`Note : ${rating}`}
          >
            <div
              className="artisan-card__stars"
              aria-hidden="true"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={ratingIcon}
                  alt=""
                  className={
                    star <= ratingValue
                      ? "artisan-card__star"
                      : "artisan-card__star artisan-card__star--empty"
                  }
                />
              ))}
            </div>

            <span>{rating}</span>
          </div>

          <p className="artisan-card__info">
            <strong>Spécialité :</strong>
            <br />
            {specialty}
          </p>

          <p className="artisan-card__info">
            <strong>Localisation :</strong>
            <br />
            {location}
          </p>

        </div>
      </article>
    </Link>
  );
}

export default ArtisanCard;