let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
btn[0].onclick = function () {
  productImg.src =
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0zNTUtcGYtczczLWNhcmQtbGFwdG9wLTAxLnBuZw.png?s=VEee2Vek6oq9ytBRkAMIQFlxPIzh7cmwdKRCowpcDSE";

  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "images/51BWw9fnsCL._AC_UF1000_1000_QL80_-removebg-preview";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "images/peripherals_laptop_latitude_3420nt_gallery_4";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
