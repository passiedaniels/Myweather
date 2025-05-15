function handleSearchSubmit(event) {
  event.preventDefault();
}

let formTypeElement = document.querySelector("#form-type");
formTypeElement.addEventListener("submit", handleSearchSubmit);
