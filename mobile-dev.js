// mobile-dev.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const tooltip = document.getElementById('tooltip');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function(event) {
            const info = event.target.getAttribute('data-info');
            tooltip.innerText = info;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        card.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });

    document.addEventListener('mousemove', function(event) {
        if (tooltip.style.display === 'block') {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        }
    });
});
