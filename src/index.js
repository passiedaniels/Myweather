function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind-speed");
  let wind = response.data.wind.speed;
  windElement.innerHTML = Math.round(wind);
  timeElement.innerHTML = currentDate(date);

  console.log(response.data);
}

function currentDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes} `;
}

function searchCity(city) {
  let apiKey = "943a3ddbo20b374aff624c0t29d891a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let formTypeElement = document.querySelector("#form-type");

formTypeElement.addEventListener("submit", handleSearchSubmit);

searchCity("paris");
