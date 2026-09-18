const express = require("express");
const router = express.Router();

const { Artisan, Contact } = require("../models");
const transporter = require("../config/mail");

router.post("/", async (req, res) => {
  try {
    const { artisanId, nom, email, objet, message } = req.body;

    // Vérification de l'identifiant de l'artisan
    if (!Number.isInteger(Number(artisanId)) || Number(artisanId) <= 0) {
      return res.status(400).json({
        message: "Identifiant artisan invalide.",
      });
    }

    // Nettoyage des données reçues
    const nomNettoye = String(nom || "").trim();
    const emailNettoye = String(email || "").trim();
    const objetNettoye = String(objet || "").trim();
    const messageNettoye = String(message || "").trim();

    // Vérification des champs
    if (!nomNettoye || nomNettoye.length > 100) {
      return res.status(400).json({
        message: "Nom invalide.",
      });
    }

    if (
      !emailNettoye ||
      emailNettoye.length > 255 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNettoye)
    ) {
      return res.status(400).json({
        message: "Adresse e-mail invalide.",
      });
    }

    if (!objetNettoye || objetNettoye.length > 150) {
      return res.status(400).json({
        message: "Objet invalide.",
      });
    }

    if (!messageNettoye || messageNettoye.length < 10) {
      return res.status(400).json({
        message: "Le message doit contenir au moins 10 caractères.",
      });
    }

    // Vérification de l'existence de l'artisan
    const artisan = await Artisan.findByPk(artisanId);

    if (!artisan) {
      return res.status(404).json({
        message: "Artisan introuvable.",
      });
    }

    // Enregistrement du contact en base de données
    const contact = await Contact.create({
      artisanId: artisan.id,
      nom: nomNettoye,
      email: emailNettoye,
      objet: objetNettoye,
      message: messageNettoye,
    });

    // Envoi de l'e-mail à l'artisan
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: artisan.email,
      replyTo: emailNettoye,
      subject: objetNettoye,
      text: `Bonjour,

Vous avez reçu un nouveau message depuis Trouve Ton Artisan.

Nom : ${nomNettoye}
E-mail : ${emailNettoye}
Objet : ${objetNettoye}

Message :
${messageNettoye}

Cordialement,
Trouve Ton Artisan`,
    });

    res.status(201).json({
      message: "Votre message a bien été envoyé.",
      contact,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du contact :", error.message);

    res.status(500).json({
      message: "Une erreur est survenue lors de l'envoi du message.",
    });
  }
});

module.exports = router;