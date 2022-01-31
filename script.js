var toggleNavOpen = document.querySelector("#toggle-open");
var toggleNavClose = document.querySelector("#toggle-close");
var navTogglable = document.querySelector("#nav-togglable");

toggleNavOpen.addEventListener("click", () => {
  toggleNavOpen.classList.toggle("hide");
  toggleNavClose.classList.toggle("hide");
  navTogglable.classList.toggle("hide");
});

toggleNavClose.addEventListener("click", () => {
  toggleNavOpen.classList.toggle("hide");
  toggleNavClose.classList.toggle("hide");
  navTogglable.classList.toggle("hide");
});
