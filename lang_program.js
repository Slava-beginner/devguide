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

    function showNextCard() {
        cards[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].classList.add("active");
    }

    setInterval(showNextCard, 6000);

function showInfo(language) {
  const infos = document.querySelectorAll('.info');
  infos.forEach(info => info.style.display = 'none'); // Hide all sections
  
  const selectedInfo = document.getElementById(`info-${language}`);
  if (selectedInfo) {
    selectedInfo.style.display = 'block'; // Show selected section
  }
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');



class Gallery {
    constructor(container) {
        this.container = container;
        this.images = container.querySelectorAll('.gallery-image');
        this.titles = container.querySelectorAll('.image-title');
        this.descriptions = container.querySelectorAll('.image-description');
        this.currentIndex = 0;

        this.updateView();
    }

    showImage(index) {
        this.images[this.currentIndex].classList.remove('active');
        this.titles[this.currentIndex].classList.remove('active');
        this.descriptions[this.currentIndex].classList.remove('active');

        this.currentIndex = (index + this.images.length) % this.images.length; // Циклический переход

        this.updateView();
    }

    nextImage() {
        this.showImage(this.currentIndex + 1);
    }

    prevImage() {
        this.showImage(this.currentIndex - 1);
    }

    updateView() {
        this.images[this.currentIndex].classList.add('active');
        this.titles[this.currentIndex].classList.add('active');
        this.descriptions[this.currentIndex].classList.add('active');
    }
}

// Инициализация галерей
const gallery1 = new Gallery(document.querySelectorAll('.gallery-container')[0]);
const gallery2 = new Gallery(document.querySelectorAll('.gallery-container')[1]);
const gallery3 = new Gallery(document.querySelectorAll('.gallery-container')[2]);
const gallery4 = new Gallery(document.querySelectorAll('.gallery-container')[3]);
const gallery5 = new Gallery(document.querySelectorAll('.gallery-container')[4]);
const gallery6 = new Gallery(document.querySelectorAll('.gallery-container')[5]);
const gallery7 = new Gallery(document.querySelectorAll('.gallery-container')[6]);
const gallery8 = new Gallery(document.querySelectorAll('.gallery-container')[7]);
const gallery9 = new Gallery(document.querySelectorAll('.gallery-container')[8]);