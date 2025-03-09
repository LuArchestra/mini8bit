document.addEventListener("DOMContentLoaded", async () => {
    const headerElement = document.querySelector("header");

    // Vérifie si l'élément header existe
    if (!headerElement) {
        console.error("⚠️ L'élément <header> n'existe pas dans index.html !");
        return;
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

        console.log("✅ Script chargé après ins
