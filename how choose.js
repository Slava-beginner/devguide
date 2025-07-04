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