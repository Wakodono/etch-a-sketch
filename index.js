const container = document.querySelector('.container');
const buttonContainer = document.querySelector('.button-container')

const newGrid = document.createElement('button')
newGrid.classList.add('new-grid');
newGrid.style.height = '40px'
newGrid.textContent = 'New Grid';

buttonContainer.appendChild(newGrid);

newGrid.addEventListener('click', () => {
    container.innerHTML = '';
    
    let isValidInput = false;
    let userInput;
    while (isValidInput === false) {
        userInput = +prompt("How many squares would you like on the x and y axis of your grid?", "16");

        if (Number.isInteger(userInput) && userInput >= 0 && userInput <= 100) {
            isValidInput = true;
        } else {
            alert('Please make sure your number is an Integer between 0 and 100');
        }
    }
    createGridSquares(userInput);
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