const scriptURL =
  "<https://script.google.com/macros/s/AKfycbzTiora_z6k4HILkef59fFPKHcZmNX4lwr9zQk8jgivVq_YLRxRhatdYjLzBB4lEOZMVA/exec>";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "lorem ipsum";

      setInterval(function () {
        msg.innerHTML = "";
      }, 5000); // to make the success msg disappear after few seconds

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
