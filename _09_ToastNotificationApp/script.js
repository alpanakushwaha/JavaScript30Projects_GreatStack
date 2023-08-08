let toastBox = document.getElementById("toastBox");
let successMsg =
  '<i class="fa-regular fa-circle-check"></i>Succeefully submitted';
let errorMsg =
  '<i class="fa-solid fa-xmark"></i>Error Occurred. Please fix the error!';
let invalidMsg =
  '<i class="fa-solid fa-exclamation"></i>Invalid Input, Please check again.';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");

  toast.innerHTML = msg;

  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
