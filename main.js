window.addEventListener("scroll", function () {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("active", window.scrollY > 0);
});
