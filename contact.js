document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Validation simple
    if (!name || !email || !phone || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis :', { name, email, phone, message });
    alert('Votre message a été envoyé avec succès !');
  
    // Réinitialiser le formulaire
    document.getElementById('contact-form').reset();
  });