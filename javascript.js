const sizeSelector = document.getElementById("gridsize");
sizeSelector.addEventListener("click", resizeGrid);

function resizeGrid(size) {
    let size = 16
    
    do {
        size = +prompt("How big do you want your grid to be?", "Enter a number between 8 and 100 here.");
    } while (8 < size > 100)

    createGrid(size);
}

const container = document.getElementById("container");
function createGrid(realSize) {
    size = size * size
    for (let i = 0; i < size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);  
        }    
    };
// createGrid(16);