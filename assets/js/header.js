document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector("header");

    // Vérifie si l'élément header existe
    if (!headerElement) {
        console.error("⚠️ L'élément <header> n'existe pas dans index.html !");
        return;
    }

    // Chargement de header.html
    fetch("/components/header.html")
        .then(response => response.text())
        .then(data => {
            console.log("header.html récupéré :", data);
            headerElement.innerHTML = data;

            // Une fois le contenu du header chargé, vous pouvez ajouter les événements
            const hamburger = document.getElementById('hamburger');
            const navbar = document.querySelector('.navbar');

            // Vérifie si les éléments hamburger et navbar existent
            if (!hamburger || !navbar) {
                console.error('Problème avec l\'élément hamburger ou navbar dans le header');
                return;
            }

            console.log("Script chargé après insertion du header !");

            // Lorsque l'on clique sur le hamburger
            hamburger.addEventListener('click', () => {
                // Changement de couleur via les classes CSS
                hamburger.classList.toggle('active');
                hamburger.classList.toggle('inactive');

                // Gestion de la visibilité du menu
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                    navbar.classList.add('active');
                }
            });
        })
        .catch(error => console.error("Erreur lors du chargement du header :", error));

    
});
