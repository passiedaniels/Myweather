function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let formTypeElement = document.querySelector("#form-type");

formTypeElement.addEventListener("submit", handleSearchSubmit);
