const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));
app.use(express.json()); // Permet d’analyser les données JSON envoyées par le frontend

// Configurer le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get("/test-email", async (req, res) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Test Nodemailer",
      text: "Ceci est un test d'envoi d'email avec Nodemailer.",
    };

    await transporter.sendMail(mailOptions);
    res.send("Email de test envoyé avec succès !");
  } catch (error) {
    console.error("Erreur d'envoi :", error);
    res.status(500).send("Erreur lors de l'envoi du test.");
  }
});


// Route pour envoyer un email
app.post('/api/send-email', async (req, res) => {
  try {
    const { prenom, nom, email, objet, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Nouveau message de ${prenom} ${nom} - ${objet}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’email:', error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message." });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
