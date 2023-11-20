const container = document.getElementById("container");
function createGrid(size) {
    size = size * size
    for (let i = 0; i < size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);  
        }
    //container.appendChild(gridSquare);    
    };
console.log(container.childNodes);
createGrid(16);