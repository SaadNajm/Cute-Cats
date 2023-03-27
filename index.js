const CATS_URL = "https://api.thecatapi.com/v1/images/search";
let div = document.getElementById("hereCat");

let showCat = async () => {
  let response1 = await fetch(CATS_URL);
  let [response2] = await response1.json();
  let image = document.createElement("img");
  image.src = response2.url;
  image.alt = "cute cat image";
  div.appendChild(image);
};

document.getElementById("clickCat").addEventListener("click", showCat);
