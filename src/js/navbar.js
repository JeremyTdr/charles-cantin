const navbar = document.querySelector("nav");
const thisLocation = window.location.toString();

console.log(navbar);

if (
  thisLocation.includes("galerie") ||
  thisLocation.includes("tarifs") ||
  thisLocation.includes("contact")
) {
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}
