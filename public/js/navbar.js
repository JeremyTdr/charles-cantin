const navbar = document.querySelector("nav");
const thisLocation = window.location.toString();
const links = document.querySelector(".nav_links");
const barButton = document.querySelector(".fa-bars");

barButton.addEventListener("click", () => {
  if (links.classList.contains("active")) {
    links.classList.remove("active");
  } else {
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
