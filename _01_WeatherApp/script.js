const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const apiUrl = "https://goweather.herokuapp.com/weather/prayagraj";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;

    // const tempInCelcius = (5 / 9) * (data.main.temp - 32);
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML =
      data.wind.deg + "° " + data.wind.speed + " Km/h";
    // document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-vector-cloud-icon-png-image_939423.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://png.pngtree.com/png-vector/20190413/ourmid/pngtree-vector-cloud-icon-png-image_939423.jpg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://p7.hiclipart.com/preview/629/164/924/rain-computer-icons-symbol-weather-rainy-day.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://p7.hiclipart.com/preview/629/164/924/rain-computer-icons-symbol-weather-rainy-day.jpg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://p7.hiclipart.com/preview/629/164/924/rain-computer-icons-symbol-weather-rainy-day.jpg";
    } else if (data.weather[0].main == "Sunny") {
      weatherIcon.src =
        "https://w7.pngwing.com/pngs/824/859/png-transparent-weather-sun-sunny-temperature-weather-color-icon-thumbnail.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// checkWeather(city);
