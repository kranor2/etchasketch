const grid = document.querySelector(".grid-container");
const colorSelect = document.getElementById("select-color");
const clearGrid = document.getElementById("clear");
const gridLines = document.getElementById("grid-lines");
const sizer = document.getElementById("grid-size");

let gridSize = 16
let penMode = "custom-color"
let gridLinesOn = true
begin();
let squares = document.querySelectorAll(".square");

function createGrid(size) {
    document.documentElement.style.setProperty("--grid-size", size);

    grid.addEventListener("mousedown", function (e) {
        e.preventDefault()
    });

    for (let i = 0; i = size; i++) {
        size = size * size
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);

        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);

        if (gridLinesOn) {
            square.classList.add("grid-lines")
        };
    };
};

function resizeGrid() {
    for (let square of squares) {
        square.remove();
    };
    gridSize = slider.value
    createGrid(gridSize);
    squares = document.querySelectorAll(".square");
};

function showGridSize() {
    const displayValue = document.querySelector("label[for='grid-size']");
    displayValue.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
};