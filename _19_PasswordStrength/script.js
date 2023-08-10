var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strengthh = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length < 4) {
    strengthh.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    strengthh.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    strengthh.innerHTML = "strong";
    pass.style.borderColor = "green";
    msg.style.color = "green";
  }
});
