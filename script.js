const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedFace.addEventListener("click", () => {
  openFace.classList.add("active");
  closedFace.classList.remove("active");
});

openFace.addEventListener("click", () => {
  closedFace.classList.add("active");
  openFace.classList.remove("active");
});
