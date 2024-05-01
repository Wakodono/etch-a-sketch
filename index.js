const container = document.querySelector('.container')

function createGridSquares(gridSize) {
    const gridSquares = [];

    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        gridSquares.push(square);
    }

    return gridSquares;
}

console.log(createGridSquares(16))