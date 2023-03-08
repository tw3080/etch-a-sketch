const button = document.querySelector('#button');
const gridContainer = document.querySelector('.grid-container');

window.onload = createGrid();

button.addEventListener('click', () => {
    const gridSize = getGridSize();

    gridContainer.replaceChildren(); // remove the existing grid
    createGrid(gridSize);
});

function createGrid(size = 16) {
    for (i = 1; i <= size * size; i++) {
        const gridSquare = document.createElement('div');
        const squareSize = 512 / size + 'px'; // individual square size is (container size / input size)

        gridSquare.classList.add('grid-square');
        gridSquare.style.width = squareSize;
        gridSquare.style.height = squareSize;
        gridContainer.appendChild(gridSquare);
    }

    changeSquareColor();
}

function getGridSize() {
    const gridSize = prompt('Enter a number between 1 and 100', '');

    if ((gridSize < 1) || (gridSize > 100)) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    
    return gridSize;
}

function changeSquareColor() {
    const squares = document.querySelectorAll('.grid-square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('change-color');
        });
    });
}