import "./ArtisanCard.scss";

function ArtisanCard({
  id,
  name,
  rating,
  specialty,
  location
}) {
  return (
    <a
      href={`/artisans/${id}`}
      className="artisan-card"
    >
      <div className="card">
        <div className="card-body">

          <h3 className="artisan-card__name">
            {name}
          </h3>

          <p className="artisan-card__rating">
            ⭐⭐⭐⭐⭐ {rating}
          </p>

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
      </div>
    </a>
  );
}

export default ArtisanCard;