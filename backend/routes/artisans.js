const express = require("express");
const Artisan = require("../models/Artisan");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.findAll();

    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans :", error);

    res.status(500).json({
      message: "Erreur lors de la récupération des artisans.",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable.",
      });
    }

    res.json(artisan);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'artisan :", error);

    res.status(500).json({
      message: "Erreur lors de la récupération de l'artisan.",
    });
  }
});

module.exports = router;