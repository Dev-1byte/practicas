const container = document.getElementById('bg-container');
const totalCircles = 20;

for (let i = 0; i < totalCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    const size = Math.random() * 60 + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.left = `${Math.random() * 100}vw`;
    
    circle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(circle);
}
