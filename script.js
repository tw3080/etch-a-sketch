const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (i = 1; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        console.log(i);
    }
}

createGrid();