var btc = document.getElementById("bitcoin");
var neo = document.getElementById("neo");
var lite = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");

var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cneo&vs_currencies=inr",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.inr;
  eth.innerHTML = response.ethereum.inr;
  lite.innerHTML = response.litecoin.inr;
  neo.innerHTML = response.neo.inr;
});
