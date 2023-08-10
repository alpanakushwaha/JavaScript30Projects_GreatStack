var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required.";
    return false;
  }

  if (!name.match(/^[A-Za-z\s]*[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name.";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("phone-number").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required.";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no. should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please.";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("email-id").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required.";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
function validateMessage() {
  var message = document.getElementById("contact-msg").value;
  var minrRquired = 20;
  var leftSpace = minrRquired - message.length;

  if (leftSpace > 0) {
    msgError.innerHTML = leftSpace + " more characters required.";
    return false;
  }

  msgError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";

    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
