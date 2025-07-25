const container = document.querySelector('.container');

container.addEventListener('mousemove', (event) => {
    createDot(event.pageX, event.pageY);
});
function createDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.backgroundColor = getRandomColor();
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    container.appendChild(dot);

    setTimeout(() => {
        dot.style.transform = 'scale(2)';
        dot.style.opacity = '0';
    }, 100);


 setTimeout(() => {
        dot.remove();
    }, 500); 
    

}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
return color;
}