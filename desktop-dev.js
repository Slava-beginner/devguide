const tooltip = document.getElementById('tooltip');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        tooltip.innerText = card.getAttribute('data-info');
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    card.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    card.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });
});
