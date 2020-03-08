var button=document.querySelector(".appointment button")
var popup=document.querySelector(".popup")

button.addEventListener("click", function () {
  popup.classList.toggle("popup-hidden")
});
