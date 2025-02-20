document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
  
    // Afficher ou masquer le bouton en fonction du défilement
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) { // Afficher le bouton après 300px de défilement
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    });
  
    // Faire défiler la page vers le haut lorsque le bouton est cliqué
    scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0, // Défile jusqu'au haut de la page
        behavior: 'smooth' // Défilement fluide
      });
    });
  });