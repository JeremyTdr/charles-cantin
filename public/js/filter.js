//--------- FILTER ONGLETS ----------

const onglets = document.querySelectorAll(".filter");
const mariage = document.querySelectorAll(".mariage");

let index = 0;
const galeries = document.querySelectorAll(".galerie_imgs>li");
const tags = ["mariage", "famille", "couple", "grossesse", "bebe", "bapteme"];

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
    } else {
      onglet.classList.toggle("active");
    }

    index = onglet.getAttribute("data-anim");

    for (i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("active");
      }
    }

    for (j = 0; j < tags.length; j++) {
      if (j == index) {
        galeries.forEach((galerie) => {
          if (galerie.classList.contains(tags[j])) {
            galerie.classList.add("active");
          } else {
            galerie.classList.remove("active");
          }
        });
      }
    }
  });
});
