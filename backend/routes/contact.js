const express = require("express");
const { Contact, Artisan } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { artisanId, nom, email, objet, message } = req.body;

    // Vérification de l'identifiant de l'artisan
    const artisanIdNumber = Number(artisanId);

    if (!Number.isInteger(artisanIdNumber) || artisanIdNumber <= 0) {
      return res.status(400).json({
        message: "L'identifiant de l'artisan est invalide.",
      });
    }

    // Nettoyage des données reçues
    const nomNettoye = typeof nom === "string" ? nom.trim() : "";
    const emailNettoye =
      typeof email === "string" ? email.trim() : "";
    const objetNettoye =
      typeof objet === "string" ? objet.trim() : "";
    const messageNettoye =
      typeof message === "string" ? message.trim() : "";

    // Vérification du nom
    if (!nomNettoye) {
      return res.status(400).json({
        message: "Le nom est obligatoire.",
      });
    }

    if (nomNettoye.length > 100) {
      return res.status(400).json({
        message: "Le nom est trop long.",
      });
    }

    // Vérification de l'email
    if (!emailNettoye) {
      return res.status(400).json({
        message: "L'adresse email est obligatoire.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailNettoye)) {
      return res.status(400).json({
        message: "L'adresse email est invalide.",
      });
    }

    if (emailNettoye.length > 255) {
      return res.status(400).json({
        message: "L'adresse email est trop longue.",
      });
    }

    // Vérification de l'objet
    if (!objetNettoye) {
      return res.status(400).json({
        message: "L'objet est obligatoire.",
      });
    }

    if (objetNettoye.length > 150) {
      return res.status(400).json({
        message: "L'objet est trop long.",
      });
    }

    // Vérification du message
    if (!messageNettoye) {
      return res.status(400).json({
        message: "Le message est obligatoire.",
      });
    }

    if (messageNettoye.length < 10) {
      return res.status(400).json({
        message: "Le message doit contenir au moins 10 caractères.",
      });
    }

    // Vérification de l'existence de l'artisan
    const artisan = await Artisan.findByPk(artisanIdNumber);

    if (!artisan) {
      return res.status(404).json({
        message: "L'artisan demandé n'existe pas.",
      });
    }

    // Enregistrement du message
    const contact = await Contact.create({
      artisanId: artisanIdNumber,
      nom: nomNettoye,
      email: emailNettoye,
      objet: objetNettoye,
      message: messageNettoye,
    });

    res.status(201).json({
      message: "Message enregistré avec succès.",
      contact: {
        id: contact.id,
        artisanId: contact.artisanId,
        nom: contact.nom,
        email: contact.email,
        objet: contact.objet,
        message: contact.message,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error(
      "Erreur lors de l'enregistrement du message :",
      error
    );

    res.status(500).json({
      message: "Erreur lors de l'enregistrement du message.",
    });
  }
});



module.exports = router;