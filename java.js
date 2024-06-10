const container = document.querySelector('.container');
const rowsColsButton = document.querySelector(".rowsColsButton");
const blackButton = document.querySelector(".black");
const randomColor = document.querySelector(".random");
const erase = document.querySelector(".erase");

let hoverColorFunction;

for(let i = 0; i < 256; i++) {
    createSquare(56.25);
}

rowsColsButton.addEventListener('click', createGrid);

blackButton.addEventListener("click", () => {
    hoverColorFunction = () => 'black';
    updateHoverEffect();
});

erase.addEventListener("click", () => {
    hoverColorFunction = () => "white";
    updateHoverEffect();
});

randomColor.addEventListener("click", () => {
    hoverColorFunction = () => getRandomColor();
    updateHoverEffect();
});

function createGrid() {

    container.innerHTML = '';

    let squaresPerSide = parseInt(prompt('Enter the number of squares per side, from 1 to 100:'), 10);

    if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert('Please enter a valid positive number.');
        return;
    }

    const squareSize = 1000 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        createSquare(squareSize);
    }

    updateHoverEffect();
}

function createSquare(size) {
    const square = document.createElement('div');
    square.classList.add('gridItem');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    container.appendChild(square);
}

function updateHoverEffect() {
    const squares = document.querySelectorAll('.gridItem');
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = hoverColorFunction();
        });
    });
}

function getRandomColor() { 
    function r() { 
        return Math.floor(Math.random() * 256); 
    } 
    return `rgb(${r()}, ${r()}, ${r()})`;
}