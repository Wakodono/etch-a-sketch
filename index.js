const container = document.querySelector('.container');

const newGrid = document.createElement('button')
newGrid.classList.add('new-grid');
newGrid.style.height = '40px'
newGrid.textContent = 'New Grid';

container.appendChild(newGrid);

newGrid.addEventListener('click', () => {
    alert(prompt("How many squares would you like on the x and y axis of your grid?", 0));
})

function createGridSquares(gridSize) {
    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares - 1; i++) {
        const square = document.createElement('div');
        const squareSize = 100 / gridSize;

        square.classList.add('square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'blue';
        })

        container.appendChild(square);
    }
}