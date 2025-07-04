    document.getElementById("hamburger").addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
    });

    function toggleMenu(id) {
        let submenu = document.getElementById(id);
        let allSubmenus = document.querySelectorAll(".submenu");

        allSubmenus.forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = "none";
            }
        });

        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    }

    let cards = document.querySelectorAll(".form-card");
    let currentIndex = 0;

    function showNextCard() {
        cards[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add("active");
    }

    setInterval(showNextCard, 6000);
let scale = 0;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

function openModal(src) {
  scale = 0;
  posX = posY = 0;
  const img = document.getElementById('img01');
  img.src = src;
  img.style.transform = 'none';
  document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Обработчик колесика мыши
document.getElementById('img01').addEventListener('wheel', function(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  scale = Math.max(0.5, Math.min(5, scale * delta));
  this.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
});

// Обработчики перемещения для мыши
document.getElementById('img01').addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
  this.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  document.getElementById('img01').style.transform = 
    `translate(${posX}px, ${posY}px) scale(${scale})`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.getElementById('img01').style.cursor = 'grab';
});

// Обработчики для сенсорных устройств
let touchStartDistance = 0;

document.getElementById('img01').addEventListener('touchstart', function(e) {
  if (e.touches.length === 1) {
    isDragging = true;
    startX = e.touches[0].clientX - posX;
    startY = e.touches[0].clientY - posY;
  }
  if (e.touches.length === 2) {
    touchStartDistance = getDistance(e.touches);
  }
});

document.getElementById('img01').addEventListener('touchmove', function(e) {
  e.preventDefault();
  if (e.touches.length === 1 && isDragging) {
    posX = e.touches[0].clientX - startX;
    posY = e.touches[0].clientY - startY;
    this.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }
  if (e.touches.length === 2) {
    const newDistance = getDistance(e.touches);
    scale = Math.max(0.5, Math.min(5, scale * (newDistance / touchStartDistance)));
    touchStartDistance = newDistance;
    this.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }
});

document.getElementById('img01').addEventListener('touchend', () => {
  isDragging = false;
});

function getDistance(touches) {
  return Math.hypot(
    touches[0].clientX - touches[1].clientX,
    touches[0].clientY - touches[1].clientY
  );
}