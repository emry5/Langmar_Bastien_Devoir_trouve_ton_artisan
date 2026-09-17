const sequelize = require("./config/database");
const Artisan = require("./models/Artisan");

const artisans = [
  {
    id: 1,
    nom: "Martin Construction",
    specialite: "Maçonnerie",
    categorie: "Bâtiment",
    localisation: "Lyon",
    note: 5.0,
  },
  {
    id: 2,
    nom: "Dupont Rénovation",
    specialite: "Plomberie",
    categorie: "Bâtiment",
    localisation: "Villeurbanne",
    note: 4.0,
  },
  {
    id: 3,
    nom: "Électricité Rhône",
    specialite: "Électricité",
    categorie: "Bâtiment",
    localisation: "Bron",
    note: 5.0,
  },
  {
    id: 4,
    nom: "Martin Coiffure",
    specialite: "Coiffure",
    categorie: "Services",
    localisation: "Lyon",
    note: 5.0,
  },
  {
    id: 5,
    nom: "Nettoyage Pro",
    specialite: "Nettoyage",
    categorie: "Services",
    localisation: "Caluire-et-Cuire",
    note: 4.0,
  },
  {
    id: 6,
    nom: "Services Express",
    specialite: "Réparation",
    categorie: "Services",
    localisation: "Oullins",
    note: 5.0,
  },
  {
    id: 7,
    nom: "Atelier du Bois",
    specialite: "Menuiserie",
    categorie: "Fabrication",
    localisation: "Lyon",
    note: 5.0,
  },
  {
    id: 8,
    nom: "Créations Métal",
    specialite: "Métallerie",
    categorie: "Fabrication",
    localisation: "Vénissieux",
    note: 4.0,
  },
  {
    id: 9,
    nom: "Atelier Créatif",
    specialite: "Création artisanale",
    categorie: "Fabrication",
    localisation: "Tassin-la-Demi-Lune",
    note: 5.0,
  },
  {
    id: 10,
    nom: "Boulangerie du Centre",
    specialite: "Boulangerie",
    categorie: "Alimentation",
    localisation: "Lyon",
    note: 5.0,
  },
  {
    id: 11,
    nom: "La Ferme du Rhône",
    specialite: "Produits fermiers",
    categorie: "Alimentation",
    localisation: "Brignais",
    note: 4.0,
  },
  {
    id: 12,
    nom: "Le Gourmet Lyonnais",
    specialite: "Traiteur",
    categorie: "Alimentation",
    localisation: "Lyon",
    note: 5.0,
  },
];

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à MySQL réussie !");

    await sequelize.sync();

    await Artisan.bulkCreate(artisans, {
      updateOnDuplicate: [
        "nom",
        "specialite",
        "categorie",
        "localisation",
        "note",
      ],
    });

    console.log("Les 12 artisans ont été ajoutés !");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();