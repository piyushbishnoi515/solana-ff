const hidetext = document.querySelector(".hide-text");
const heading = document.querySelector(".heading");
const icon = document.querySelector(".icon");


heading.addEventListener("click", function () {
    hidetext.classList.toggle("active");
    icon.classList.toggle("iconup");
})
