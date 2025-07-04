document.addEventListener("DOMContentLoaded", function () {
    const techBoxes = document.querySelectorAll(".tech-box");
    const tooltip = document.getElementById("tooltip");

    techBoxes.forEach(box => {
        box.addEventListener("mouseenter", (e) => {
            const infoText = box.getAttribute("data-info");
            tooltip.textContent = infoText;
            tooltip.style.opacity = "1";
            const boxRect = box.getBoundingClientRect();
            tooltip.style.left = `${boxRect.left + window.pageXOffset + boxRect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${boxRect.top + window.pageYOffset - tooltip.offsetHeight - 10}px`;
            box.style.backgroundColor = "#bbb";
            box.style.transform = "scale(1.05)";
        });

        box.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            box.style.backgroundColor = "#ccc";
            box.style.transform = "scale(1)";
        });
    });
});
