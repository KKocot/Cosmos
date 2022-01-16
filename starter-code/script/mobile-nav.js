const moblieMenu = document.getElementById("moblie-menu");
nav = document.querySelector("nav");
closeX = document.getElementById("closeX");

moblieMenu.addEventListener("click", () => {
  nav.classList.add("navIn");
});

closeX.addEventListener("click", () => {
  nav.classList.remove("navIn");
});
