const accordion = document.querySelectorAll(".accordion-heading");

accordion.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".accordion.active1");
        e.parentElement.classList.toggle("active1");
        acc && acc.classList.remove("active1");
    })

})


const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");


menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
})
