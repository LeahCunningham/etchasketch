// Function that creates the grid

let size = 16;
const container = document.querySelector("#container");

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const newCol = document.createElement("div");
        newCol.className = "col";

        container.appendChild(newCol);

        for (let i = 0; i < size; i++) {

            const newCell = document.createElement("div");
            newCell.className = "cell";
            newCol.appendChild(newCell);
        }
    }
};

generateGrid(size);

// Function for event listeners for tracking the mouse movements
let rdmColor = "black"

function randomColorGenerator() {
  const maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.floor(Math.random() * maxVal);
  let hexColor = randomNumber.toString(16);
  // Pad with leading zeros if necessary
  hexColor = hexColor.padStart(6, '0'); 
  rdmColor = `#${hexColor.toUpperCase()}`;
}

function fillCells() {

    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (mouseenter) => { 
            mouseenter.target.style.backgroundColor = rdmColor;
        randomColorGenerator()}
        )
    }
    );
}


fillCells();

// Function to allow the user to change the grid size

const sizeBtn = document.querySelector("button");

sizeBtn.addEventListener("click", () => {

    let userInput = prompt("How many rows and columns do you want?", "Enter a number up to 100");
    let number = parseInt(userInput);

    if (isNaN(number) || number > 100) {
        alert("Invalid input: Only accepts numbers up to 100.")
    }

    else {
        container.replaceChildren();
        size = number;
        generateGrid(size);
        fillCells();
    }
}
)





