window.onload = async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> n'existe pas dans index.html !");
        return;
    }

    try {
        const response = await fetch("./components/header.html");
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du header");
        }
        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");
        
        // Charger theme.js après le header
        const themeScript = document.createElement('script');
        themeScript.src = './assets/js/theme.js';
        themeScript.defer = true;
        document.body.appendChild(themeScript);

        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        if (!hamburger || !navbar) {
            console.error("⚠️ Problème avec l'élément hamburger ou navbar dans le header");
            return;
        }

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            hamburger.classList.toggle("inactive");

            navbar.classList.toggle("active");
            navbar.classList.toggle("hidden");
        });

    } catch (error) {
        console.error("❌ Erreur lors du chargement du header :", error);
    }
};
