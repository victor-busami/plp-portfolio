// Get the menu toggle checkbox and hamburger label elements
const menuToggle = document.getElementById("menu-toggle");
const hamburger = document.querySelector(".hamburger");

// Add an event listener to the menu toggle
menuToggle.addEventListener("change", () => {
  // If the checkbox is checked (menu is open), add the 'open' class to the hamburger
  if (menuToggle.checked) {
    hamburger.classList.add("open");
  } else {
    hamburger.classList.remove("open");
  }
});
