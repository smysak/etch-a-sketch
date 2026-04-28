const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.id = `Box ${i + 1}`;
    gridDiv.className = "gridBox";
    gridDiv.textContent = `Box ${i + 1}`;
    container.appendChild(gridDiv);
}