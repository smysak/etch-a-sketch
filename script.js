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
        box.style.backgroundColor = 'yellow';
    });
});

boxes.forEach(box => {
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'white';
    });
});


const reset = document.getElementById("resetButton");
reset.addEventListener('click', () => {
    const gridWidth = prompt("What size canvas would you like?", "enter pixel width");
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
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = 'yellow';
            });
        });
        boxes.forEach(box => {
            box.addEventListener('mouseleave', () => {
                box.style.backgroundColor = 'white';
            });
        });
    });


/* 
//notes to create the "etch a sketch" blacken gradual style...
box.style.backgroundColor = 'color-mix(in hsl, (0 0 100), black 10%)';
*/