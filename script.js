function fetchInitial() {
  const img = document.querySelector("img");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=n3uso7StRlVZ3Cv79SFoyO5TSUz8ZBSC&s=cats",
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      img.src = response.data.images.original.url;
    });
}

function fetchSearch() {
  const img = document.querySelector("img");
  const input = document.querySelector("input");
  if (input.value === "") {
    alert("Please enter a search term");
    return;
  }
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=n3uso7StRlVZ3Cv79SFoyO5TSUz8ZBSC&q=${input.value}`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.data.length === 0) {
        alert("No results found");
        return;
      }

      console.log(response);
      img.src = response.data[0].images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}

function setupButton() {
  button = document.getElementById("btn");
  button.addEventListener("click", fetchSearch);
}

function setup() {
  fetchInitial();
  setupButton();
}
setup();
