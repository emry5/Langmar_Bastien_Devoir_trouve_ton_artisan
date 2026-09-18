const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
require("dotenv").config();

const artisansRoutes = require("./routes/artisans");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "10kb" }));

app.use("/api/artisans", artisansRoutes);
app.use("/api/contact", contactRoutes);

require("./models");

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à MySQL réussie !");

    await sequelize.sync();
    console.log("Tables synchronisées !");

    app.get("/", (req, res) => {
      res.json({
        message: "API Trouve Ton Artisan fonctionnelle",
      });
    });

    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Erreur lors du démarrage du serveur :",
      error.message
    );
  }
}
process.on("uncaughtException", (error) => {
  console.error("ERREUR NON GÉRÉE :", error);
});

process.on("unhandledRejection", (error) => {
  console.error("PROMESSE REJETÉE :", error);
});
startServer();