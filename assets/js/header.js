const basePath = "/mini8bit"; // Adapter à GitHub Pages

document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> est introuvable !");
        return;
    }

    try {
        const response = await fetch(`${basePath}/components/header.html?nocache=${Date.now()}`);
        if (!response.ok) throw new Error("Erreur lors du chargement du header");

        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Vérification que le DOM est bien mis à jour
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
