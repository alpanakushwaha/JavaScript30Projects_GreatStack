let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });
// above code is WORKING , but NOT using it, because it is MOUSE EVENT.

nextBtn.addEventListener("click", () => {
  //   scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
  //   scrollContainer.style.scrollBehaviour = "smooth";

  scrollContainer.scrollLeft -= 900;
});
