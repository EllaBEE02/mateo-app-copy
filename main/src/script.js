function displayCity(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchFormInput.value;
}

let selectSearchForm = document.querySelector("#submit-form");
selectSearchForm.addEventListener("submit", displayCity);
