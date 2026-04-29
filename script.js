const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.id = `box ${i + 1}`;
    gridDiv.className = "gridBox";
    gridDiv.style.minWidth = Math.sqrt(16)/16*100 + `%`;
    container.appendChild(gridDiv);
}

const boxes = document.querySelectorAll(".gridBox");

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const color = `#` + Math.trunc(Math.random()*1000000);
        box.style.backgroundColor = color;
    });
});

boxes.forEach(box => {
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'white';
    });
});

const reset = document.getElementById("resetButton");
reset.addEventListener('click', () => {
    let gridWidth = prompt("What size canvas would you like?\nNumeric integers up to 100 are accepted.", "enter pixel width");
    while (gridWidth !== null && gridWidth > 100) {
        gridWidth = prompt("Maximum pixel width is 100.\nPlease enter a numerical value between 1 and 100.", "enter pixel width");
    }
    container.replaceChildren();
    const gridSize = gridWidth * gridWidth;
        for (let i = 0; i < gridSize; i++) {
            const gridDiv = document.createElement('div');
            gridDiv.id = `box ${i + 1}`;
            gridDiv.className = "gridBox";
            gridDiv.style.minWidth = Math.sqrt(gridSize)/gridSize*100 + `%`;
            container.appendChild(gridDiv);
        }
        const boxes = document.querySelectorAll(".gridBox");
        boxes.forEach(box => {
            let lightness = 100;
            box.addEventListener('mouseenter', () => {
                lightness = Math.max(0, lightness -10);
                box.style.backgroundColor = `hsl(210, 0%, ${lightness}%)`;
            });
        });
        reset.textContent="reset";
    });


/* 
//notes to create the "etch a sketch" blacken gradual style...
box.style.backgroundColor = 'color-mix(in hsl, (0 0 100), black 10%)';
*/