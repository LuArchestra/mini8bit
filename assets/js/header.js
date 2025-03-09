const waitForElement = async (selector, maxTries = 10) => {
    for (let i = 0; i < maxTries; i++) {
        const element = document.querySelector(selector);
        if (element) return element;
        await new Promise(resolve => setTimeout(resolve, 200)); // Attente de 200ms
    }
    throw new Error(`❌ L'élément ${selector} n'a pas été trouvé après ${maxTries} tentatives`);
};

document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    if (!headerElement) {
        console.error("⚠️ L'élément <header> est introuvable !");
        return;
    }

    try {
        const response = await fetch(`/mini8bit/components/header.html?nocache=${Date.now()}`);
        if (!response.ok) throw new Error("Erreur lors du chargement du header");

        const html = await response.text();
        headerElement.innerHTML = html;

        console.log("✅ Header chargé avec succès !");

        // Attendre que les éléments soient bien intégrés
        const hamburger = await waitForElement("#hamburger");
        const navbar = await waitForElement(".navbar");

        console.log("✅ Scripts activés après insertion du header !");
        
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
