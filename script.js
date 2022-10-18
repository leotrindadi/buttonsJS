const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', colorize);
}

const h2 = document.querySelectorAll('h2');

for(let h2s of h2){
    h2s.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}