const grid = document.getElementById("grid-container");
const colorSelect = document.getElementById("select-color");
const clearAll = document.getElementById("clear");
const gridLines = document.getElementById("grid-lines");
const sizer = document.getElementById("grid-size");

let size = 16
sizer.value = 16
let penMode = "custom-color"
let gridLinesOn = true
begin();
let squares = document.querySelectorAll(".square");

function createGrid(size) {
    document.documentElement.style.setProperty("--grid-size", size);

    grid.addEventListener("mousedown", function (e) {
        e.preventDefault()
    });

    size = size * size
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", paint);
        square.addEventListener("mousedown", paint);
        grid.appendChild(square);

        if (gridLinesOn) {
            square.classList.add("grid-lines")
        };
    };
};

function begin() {
    createGrid(size);
    showGridSize();

    const brushes = document.querySelectorAll(".brush");
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

function resizeGrid() {
    for (let square of squares) {
        square.remove();
    };
    size = sizer.value
    createGrid(size);
    squares = document.querySelectorAll(".square");
};

function showGridSize() {
    const displayValue = document.querySelector("label[for='grid-size']");
    displayValue.textContent = `Grid Size: ${sizer.value} x ${sizer.value}`;
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

function paint(event) {
    if (event.buttons === 1) {
        if (penMode === "random-color") {
            this.style.backgroundColor = getRandomColor();
        }
        else if (penMode === "eraser") {
            this.style.backgroundColor = "";
        }
        else if (penMode === "grid-bkgd-color") {
            newBackground();
        }
        else {
            this.style.backgroundColor = colorSelect.value;
        };
    };
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

function newBackground() {
    const selectBkgdColor = document.getElementById("grid-bkgd-color");
    for (let square of squares) {
        if (!square.style.backgroundColor) {
            square.style.backgroundColor = selectBkgdColor.value;
        };
    };
};