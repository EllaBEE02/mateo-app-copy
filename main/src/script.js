function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "ca84b50945053937af3t3beb98o11a3c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function displayCity(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");

  searchCity(searchFormInput.value);
}

let selectSearchForm = document.querySelector("#submit-form");
selectSearchForm.addEventListener("submit", displayCity);
