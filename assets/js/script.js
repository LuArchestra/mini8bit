document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "/index.html"; // Redirection après connexion réussie
    } else {
        alert("Identifiants incorrects !");
    }
});
