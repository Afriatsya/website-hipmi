document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#check");
    const sidebar = document.querySelector(".sidebar");
    const header = document.querySelector("header");
    const content = document.querySelector(".content");
    const searchInput = document.getElementById("searchMenu");
    const menuItems = document.querySelectorAll(".submenu a");

    if (!searchInput) {
        console.error("Elemen input pencarian tidak ditemukan!");
        return;
    }

    // Fungsi Toggle Sidebar
    /* if (menuToggle) {
        menuToggle.addEventListener("change", function() {
            if (menuToggle.checked) {
                sidebar.classList.add("open");
                header.style.marginLeft = "250px";
                content.style.marginLeft = "250px";
            } else {
                sidebar.classList.remove("open");
                header.style.marginLeft = "0";
                content.style.marginLeft = "0";
            }
        });
    } */

    window.toggleSubMenu = function (id) {
        var submenu = document.getElementById(id);
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    };

    const deskripsiLink = document.getElementById("deskripsi-link");
    if (deskripsiLink) {
        deskripsiLink.addEventListener("click", function () {
            window.location.href = "assets/Pages/deskripsi.html";
        });
    }

    
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { 
            let query = searchInput.value.toLowerCase().trim(); 
            let found = false;

            menuItems.forEach((item) => {
                let menuText = item.textContent.toLowerCase(); 

                if (menuText.includes(query)) {
                    window.location.href = item.href; 
                    found = true;
                }
            });

            if (!found) {
                alert("Submenu tidak ditemukan!");
            }
        }
    });
});
