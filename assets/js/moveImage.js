document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll('.moving-image');
    let speed = 2.5;

    images.forEach(img => {
        let directionX = Math.random() < 0.5 ? -1 : 1;
        let directionY = Math.random() < 0.5 ? -1 : 1;

        function moveImage() {
            let maxWidth = window.innerWidth - img.clientWidth;
            let maxHeight = window.innerHeight - img.clientHeight;

            // Calcule la nouvelle position en utilisant offsetLeft et offsetTop
            let newX = img.offsetLeft + directionX * speed;
            let newY = img.offsetTop + directionY * speed;

            // Vérifie et ajuste pour éviter tout dépassement
            if (newX <= 0) {
                newX = 0;
                directionX *= -1;
            } else if (newX >= maxWidth) {
                newX = maxWidth;
                directionX *= -1;
            }

            if (newY <= 0) {
                newY = 0;
                directionY *= -1;
            } else if (newY >= maxHeight) {
                newY = maxHeight;
                directionY *= -1;
            }

            // Applique la nouvelle position
            img.style.left = newX + "px";
            img.style.top = newY + "px";

            requestAnimationFrame(moveImage);
        }

        moveImage(); // Démarre le mouvement pour cette image
    });
});
