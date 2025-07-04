document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            tooltip.textContent = e.target.getAttribute('data-info');
            tooltip.style.display = 'block';
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.pageXOffset + 10}px`;
            tooltip.style.top = `${rect.top + window.pageYOffset - tooltip.offsetHeight - 10}px`;
        });

        card.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});
