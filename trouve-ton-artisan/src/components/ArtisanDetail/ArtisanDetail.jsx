import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArtisanDetail.scss";
import ratingIcon from "../../assets/icons/rating.svg";

function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const response = await fetch(
          `http://laba8455.odns.fr/api/artisans/${id}`
        );

        if (!response.ok) {
          throw new Error("Artisan introuvable.");
        }

        const data = await response.json();

        setArtisan(data);
      } catch (error) {
        console.error(error);
        setError(
          "Impossible de récupérer les informations de l'artisan."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArtisan();
  }, [id]);

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
      newErrors.subject =
        "Veuillez renseigner l'objet du message.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Veuillez renseigner votre message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Votre message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setSending(true);
    setErrors({});
    setSubmitted(false);

    try {
      const response = await fetch(
        "http://laba8455.odns.fr/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            artisanId: artisan.id,
            nom: formData.name.trim(),
            email: formData.email.trim(),
            objet: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Erreur lors de l'envoi du message."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setErrors({
        form:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <main className="artisan-detail">
        <div className="container">
          <p role="status">
            Chargement de la fiche artisan...
          </p>
        </div>
      </main>
    );
  }

  if (error || !artisan) {
    return (
      <main className="artisan-detail">
        <div className="container">
          <p role="alert">
            {error || "Artisan introuvable."}
          </p>
        </div>
      </main>
    );
  }

  const rating = Number(artisan.note);

  return (
    <main className="artisan-detail">
      <div className="container">
        <section className="artisan-detail__card">
          <div className="artisan-detail__header">
            <div>
              <h1>{artisan.nom}</h1>

              <div className="artisan-detail__rating">
                <div
                  className="artisan-detail__stars"
                  role="img"
                  aria-label={`Note : ${rating} sur 5`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={ratingIcon}
                      alt=""
                      className={`artisan-detail__star ${
                        star <= rating
                          ? ""
                          : "artisan-detail__star--empty"
                      }`}
                    />
                  ))}
                </div>

                <span>{rating}/5</span>
              </div>

              <p>
                <strong>Spécialité :</strong>{" "}
                {artisan.specialite}
              </p>

              <p>
                <strong>Localisation :</strong>{" "}
                {artisan.localisation}
              </p>
            </div>

            <div>
              <img
                src="/images/artisan.jpg"
                alt={`Illustration de ${artisan.nom}`}
              />
            </div>
          </div>

          <section className="artisan-detail__about">
            <h2>À propos</h2>

            <p>
              {artisan.description ||
                `${artisan.nom} est spécialisé dans ${artisan.specialite}.`}
            </p>
          </section>

          <section 
            className="artisan-detail__contact"
            aria-labelledby="contact-title">
            <h2 id="contact-title">Contacter l'artisan</h2>

            {submitted && (
              <p
                className="artisan-detail__success"
                role="status"
              >
                Votre message a bien été envoyé.
              </p>
            )}

            {errors.form && (
              <p
                className="artisan-detail__error"
                role="alert"
              >
                {errors.form}
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
                  required
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
                  required
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
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject
                      ? "subject-error"
                      : undefined
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
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
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

              <button type="submit" disabled={sending}>
                {sending ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </section>

          <section className="artisan-detail__website">
            <h2>Site web</h2>

            {artisan.siteWeb ? (
              <a
                href={artisan.siteWeb}
                target="_blank"
                rel="noreferrer"
              >
                Visiter le site de l'artisan
              </a>
            ) : (
              <p>
                Le site web de cet artisan n'est pas renseigné.
              </p>
            )}
          </section>
        </section>
      </div>
    </main>
  );
}

export default ArtisanDetail;