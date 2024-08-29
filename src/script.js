function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;
  let apiKey = "32t8ad0cd028cfa917474ed4e1ob0b22";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function displayTemp(response) {
  let currentTempValue = document.querySelector(".current-temperature-value");
  let currentTemperature = Math.round(response.data.temperature.current);
  currentTempValue.innerHTML = currentTemperature;

  let currentTempDescription = document.querySelector(
    "#current-weather-description"
  );
  let currentTemperatureDescription = response.data.condition.description;
  currentTempDescription.innerHTML = currentTemperatureDescription;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
