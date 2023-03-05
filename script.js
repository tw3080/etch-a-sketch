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

const squares = document.querySelectorAll('.grid-square');

function changeSquareColor(square) {
    square.classList.add('change-color');
}

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        console.log(square);
        changeSquareColor(square);
    });
});