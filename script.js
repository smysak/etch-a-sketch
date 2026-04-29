const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.id = `box ${i + 1}`;
    gridDiv.className = "gridBox";
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

