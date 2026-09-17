import { useState } from "react";
import "./ArtisanDetail.scss";
import ratingIcon from "../../assets/icons/rating.svg";

function ArtisanDetail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Veuillez renseigner votre nom.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Veuillez renseigner votre adresse email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Veuillez renseigner une adresse email valide.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Veuillez renseigner l'objet du message.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez renseigner votre message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Votre message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="artisan-detail">
      <div className="container">
        <section className="artisan-detail__card">

          <div className="artisan-detail__header">
            <div>
              <h1>Martin Construction</h1>

              <div className="artisan-detail__rating">
                <div
                  className="artisan-detail__stars"
                  role="img"
                  aria-label="Note : 5 sur 5"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={ratingIcon}
                      alt=""
                      className="artisan-detail__star"
                    />
                  ))}
                </div>

                <span>5/5</span>
              </div>

              <p>
                <strong>Spécialité :</strong> Maçonnerie
              </p>

              <p>
                <strong>Localisation :</strong> Lyon
              </p>
            </div>

            <div>
              <img
                src="/images/artisan.jpg"
                alt="Martin Construction"
              />
            </div>
          </div>

          <section className="artisan-detail__about">
            <h2>À propos</h2>

            <p>
              Martin Construction est une entreprise spécialisée
              dans les travaux de maçonnerie et de rénovation.
            </p>
          </section>

          <section className="artisan-detail__contact">
            <h2>Contacter l'artisan</h2>

            {submitted && (
              <p
                className="artisan-detail__success"
                role="status"
              >
                Votre message a bien été pris en compte.
              </p>
            )}

            <form onSubmit={handleSubmit} noValidate>

              <div>
                <label htmlFor="name">
                  Nom
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "name-error" : undefined
                  }
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="artisan-detail__error"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="artisan-detail__error"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject">
                  Objet du message
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />

                {errors.subject && (
                  <p
                    id="subject-error"
                    className="artisan-detail__error"
                    role="alert"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="artisan-detail__error"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit">
                Envoyer
              </button>

            </form>
          </section>

          <section className="artisan-detail__website">
            <h2>Site web</h2>

            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              Visiter le site de l'artisan
            </a>
          </section>

        </section>
      </div>
    </main>
  );
}

export default ArtisanDetail;