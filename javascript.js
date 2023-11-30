const grid = document.querySelector(".grid-container");
const colorSelect = document.getElementById("select-color");
const clearAll = document.getElementById("clear");
const gridLines = document.getElementById("grid-lines");
const sizer = document.getElementById("grid-size");

let gridSize = 16
let penMode = "custom-color"
let gridLinesOn = true
begin();
let squares = document.querySelectorAll(".square");

function begin() {
    createGrid(gridSize);
    displayGridSize();

    const brushes = document.querySelectorAll('.brush');
    for (let brush of brushes) {
        brush.addEventListener("click", function () {
            document.querySelector(".active").classList.remove("active");
            penMode = brush.dataset.name;
            brush.classList.add("active");
        });
    };

    colorSelect.classList.add("active");
    clearAll.addEventListener("click", clearGrid);
    gridLines.addEventListener("change", toggleGridLines);
    sizer.addEventListener("input", showGridSize);
    sizer.addEventListener("change", resizeGrid);
};

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

function toggleGridLines() {
    gridLinesOn = !gridLinesOn
    for (let square of squares) {
        square.classList.toggle("grid-lines");
    }
    grid.classList.toggle("grid-lines");
}

function clearGrid() {
    for (let square of squares) {
        square.style.backgroundColor = "";
    }
}