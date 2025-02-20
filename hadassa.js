
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

// Auto scroll every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);
const express = require('express');
const app = express();
const port = 3000;

// Middleware pour gérer les données du footer
app.use(express.json());

// Exemple de données pour le footer
const footerData = {
  about: [
    { text: "Notre équipe", link: "#" },
    { text: "Nos services", link: "#" },
    { text: "Contact", link: "#" }
  ],
  services: [
    { text: "Consultation juridique", link: "#" },
    { text: "Rédaction de contrats", link: "#" },
    { text: "Litiges", link: "#" }
  ],
  socialMedia: [
    { platform: "Facebook", link: "#", icon: "facebook-icon.png" },
    { platform: "Twitter", link: "#", icon: "twitter-icon.png" },
    { platform: "LinkedIn", link: "#", icon: "linkedin-icon.png" }
  ]
};

// Route pour obtenir les données du footer
app.get('/api/footer', (req, res) => {
  res.json(footerData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});