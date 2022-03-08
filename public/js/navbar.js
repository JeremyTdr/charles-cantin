const navbar = document.querySelector("nav");
const thisLocation = window.location.toString();
const links = document.querySelector(".nav_links");
const burger = document.getElementById("nav-icon");

burger.addEventListener("click", () => {
  if (links.classList.contains("active")) {
    burger.classList.remove("open");
    links.classList.remove("active");
  } else {
    burger.classList.add("open");
    links.classList.add("active");
  }
});

if (
  thisLocation.includes("galerie") ||
  thisLocation.includes("tarifs") ||
  thisLocation.includes("contact")
) {
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}
