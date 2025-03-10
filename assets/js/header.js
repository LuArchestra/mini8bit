document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");
    const loadingIndicator = document.getElementById("loading-indicator");

    // Vérifie si l'élément header existe
    if (!headerElement) {
        console.error("⚠️ L'élément <header> n'existe pas dans index.html !");
        return;
    }

    // Affiche l'indicateur de chargement
    if (loadingIndicator) {
        loadingIndicator.style.display = "block"; // Afficher le message de chargement
    }

    try {
        // Chargement du header avec await
        const response = await fetch("./components/header.html");
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du header");
        }
        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Sélection des éléments une fois le header inséré
        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        if (!hamburger || !navbar) {
            console.error("⚠️ Problème avec l'élément hamburger ou navbar dans le header");
            return;
        }

        console.log("✅ Script chargé après insertion du header !");

        // Événement de clic pour le menu hamburger
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            hamburger.classList.toggle("inactive");

            navbar.classList.toggle("active");
            navbar.classList.toggle("hidden");
        });

    } catch (error) {
        console.error("❌ Erreur lors du chargement du header :", error);
    } finally {
        // Cache l'indicateur de chargement une fois le header chargé
        if (loadingIndicator) {
            loadingIndicator.style.display = "none"; // Masquer le message de chargement
        }
    }
});
