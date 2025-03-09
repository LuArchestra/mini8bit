const basePath = "/mini8bit"; // Mettre le chemin du projet sur GitHub Pages

document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> est introuvable dans index.html !");
        return;
    }

    try {
        const response = await fetch(`${basePath}/components/header.html`);
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du header");
        }
        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Sélection des éléments après le chargement
        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        if (!hamburger || !navbar) {
            console.error("⚠️ Problème avec l'élément hamburger ou navbar dans le header");
            return;
        }

        console.log("✅ Scripts actifs après insertion du header !");

        // Gestion du menu hamburger
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            hamburger.classList.toggle("inactive");

            navbar.classList.toggle("active");
            navbar.classList.toggle("hidden");
        });

    } catch (error) {
        console.error("❌ Erreur lors du chargement du header :", error);
    }
});
