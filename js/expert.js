// ...existing code...

const expertsContainer = document.querySelector('.experts');
let currentIndex = 0;

function moveExperts() {
    currentIndex++;
    if (currentIndex >= expertsContainer.children.length - 2) {
        currentIndex = 0;
    }
    expertsContainer.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

setInterval(moveExperts, 3000);