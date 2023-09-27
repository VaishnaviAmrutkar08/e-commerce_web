document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.createElement("i");
    menuIcon.classList.add("menu-icon", "bi", "bi-list");

    // Add menu icon to the header
    document.getElementById("header").appendChild(menuIcon);

    // Toggle the navbar visibility when clicking on the menu icon
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  });

  // cart page


