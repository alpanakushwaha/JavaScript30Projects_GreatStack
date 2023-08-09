var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
} else if (localData == "dark") {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");

    // icon.src=
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
};
