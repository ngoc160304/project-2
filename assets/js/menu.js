const listMenu = document.querySelectorAll(".inner-list a");
for(let i = 0; i < listMenu.length; i++) {
    console.log(listMenu[i]);
    listMenu[i].addEventListener("click", () => {
        for(let i = 0; i < listMenu.length; i++) {
            listMenu[i].classList.remove("active");
        }
        listMenu[i].classList.add("active")
    })
}
const header = document.querySelector(".header .inner-header");
const iconMenuBars = document.querySelector(".inner-bar");
const menuBars = document.querySelector(".inner-list-menu-bars");
var onresize = function() {
    width = document.body.clientWidth;
    if(width >= 978) {
        menuBars.classList.remove("dp-block");
        header.classList.remove("border-bottom")
    }
}
window.addEventListener("resize", onresize);
iconMenuBars.addEventListener("click", () => {
    menuBars.classList.toggle("dp-block");
    header.classList.toggle("border-bottom");
});
