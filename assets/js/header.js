document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) return console.error("⚠️ L'élément <header> est introuvable dans index.html !");

    try {
        const response = await fetch(`${basePath}/components/header.html`);
        if (!response.ok) throw new Error("Erreur lors du chargement du header");

        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Attendre un peu avant d'attacher les événements
        setTimeout(() => {
            const hamburger = document.getElementById("hamburger");
            const navbar = document.querySelector(".navbar");

            if (!hamburger || !navbar) return console.error("⚠️ Élément manquant après chargement du header");

            console.log("✅ Scripts actifs après insertion du header !");
            
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                hamburger.classList.toggle("inactive");
                navbar.classList.toggle("active");
                navbar.classList.toggle("hidden");
            });

        }, 500); // Attendre 500ms pour que le DOM soit bien mis à jour

    } catch (error) {
        console.error("❌ Erreur lors du chargement du header :", error);
    }
});
