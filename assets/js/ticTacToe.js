const gridItems = document.querySelectorAll('.grid-item');
let currentPlayer = '';
let gameActive = true;

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!gameActive) return; // Si le jeu est terminé, on ne fait rien

        if (!item.classList.contains('x') && !item.classList.contains('o')) {
            item.classList.add(currentPlayer);
            if (checkWinner(currentPlayer)) {
                alert(`${currentPlayer.toUpperCase()} a gagné !`);
                gameActive = false; // Fin de la partie
            } else {
                currentPlayer = currentPlayer === 'x' ? 'o' : 'x'; // Alterne entre "x" et "o"
            }
        }
    });
});

function checkWinner(player) {
    const winPatterns = [
        [0, 1, 2], // Ligne 1
        [3, 4, 5], // Ligne 2
        [6, 7, 8], // Ligne 3
        [0, 3, 6], // Colonne 1
        [1, 4, 7], // Colonne 2
        [2, 5, 8], // Colonne 3
        [0, 4, 8], // Diagonale 1
        [2, 4, 6], // Diagonale 2
    ];

    // Vérifie chaque combinaison de lignes, colonnes et diagonales
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return gridItems[index].classList.contains(player);
        });
    });
}