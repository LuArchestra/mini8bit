document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> est introuvable !");
        return;
    }

    try {
        console.log("📡 Chargement du header...");
        const response = await fetch("./components/header.html?nocache=" + Date.now());

        if (!response.ok) throw new Error(`Erreur de chargement : ${response.statusText}`);

        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Attendre que le DOM soit bien mis à jour avant d'ajouter les événements
        requestAnimationFrame(() => {
            const hamburger = document.getElementById("hamburger");
            const navbar = document.querySelector(".navbar");

            if (!hamburger || !navbar) {
                console.error("⚠️ Problème : éléments non trouvés après chargement !");
                return;
            }

            console.log("✅ Scripts activés après insertion du header !");
            
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                hamburger.classList.toggle("inactive");
                navbar.classList.toggle("active");
                navbar.classList.toggle("hidden");
            });
        });

    } catch (error) {
        console.error("❌ Erreur lors du chargement du header :", error);
    }
});
