/* Nav Bar Toggle  */
/* This code is responsible for creating a toggle functionality for a navigation bar. */
const ham = document.getElementById("ham");
const menu = document.getElementById("menu");
const lists = document.querySelectorAll(".lists");

ham.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

/* Dark Mode Setting */

/**
 * This JavaScript code toggles between light and dark mode on a webpage and stores the user's
 * preference in local storage.
 */
const html = document.querySelector("html");
const themeToggle = document.querySelector("#light-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
}

themeToggle.addEventListener("click", () => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
