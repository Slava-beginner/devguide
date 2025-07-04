const track = document.querySelector('.scroll-track');

track.addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running';
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdownLink = document.querySelector('.dropdown-link');
    const leftSliders = document.querySelector('.left-sliders');
    const tooltip = document.getElementById('tooltip');
    const sliderItems = document.querySelectorAll('.slider-item');

    // Show the left sliders on hover
    dropdownLink.addEventListener('mouseenter', () => {
        leftSliders.style.display = 'block'; // Show the left sliders
        leftSliders.style.opacity = '1'; // Fade in
        leftSliders.style.visibility = 'visible'; // Make it visible
        leftSliders.style.transform = 'translateY(0)'; // Move down into view
    });

    // Keep the dropdown visible when hovering over it
    leftSliders.addEventListener('mouseenter', () => {
        leftSliders.style.opacity = '1'; // Keep visible
        leftSliders.style.visibility = 'visible'; // Keep it visible
        leftSliders.style.transform = 'translateY(0)'; // Keep it in view
    });

    // Hide the dropdown when leaving
    dropdownLink.addEventListener('mouseleave', () => {
        leftSliders.style.opacity = '0'; // Fade out
        leftSliders.style.transform = 'translateY(-10px)'; // Move up
        leftSliders.style.visibility = 'hidden'; // Hide it after fade out
    });

    leftSliders.addEventListener('mouseleave', () => {
        leftSliders.style.opacity = '0'; // Fade out
        leftSliders.style.transform = 'translateY(-10px)'; // Move up
        leftSliders.style.visibility = 'hidden'; // Hide it after fade out
    });

    // Tooltip functionality
    sliderItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const target = this.dataset.target;
            const content = document.getElementById(target).querySelector('p').textContent;

            tooltip.textContent = content;
            tooltip.style.display = 'block';
            tooltip.style.left = `${this.getBoundingClientRect().right + window.scrollX + 10}px`; // Position tooltip to the right of the item
            tooltip.style.top = `${this.getBoundingClientRect().top + window.scrollY}px`; // Align vertically with item
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none'; // Hide tooltip when mouse leaves
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".form-card");
    let activeIndex = 0;

    // Function to switch to the next card
    function showNextCard() {
        // Remove active class from the current card
        cards[activeIndex].classList.remove("active");
        cards[activeIndex].classList.add("exit");

        // Calculate the next card index
        activeIndex = (activeIndex + 1) % cards.length;

        // Add active class to the next card
        cards[activeIndex].classList.remove("exit");
        cards[activeIndex].classList.add("active");
    }

    // Initially display the first card
    cards[activeIndex].classList.add("active");

    // Set interval to switch cards every 3 seconds
    setInterval(showNextCard, 3000);
});
