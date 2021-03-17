const burgerMenu = document.getElementById("burgerMenu");
const sideNav = document.getElementById("sideNav");
const closeMenu = document.getElementById("closeMenu");

burgerMenu.addEventListener('click', () => {
    sideNav.classList.toggle('side-navigation-active')
    sideNav.style.display = "block";

})

closeMenu.addEventListener("click", () => {
    sideNav.classList.toggle('side-navigation-active');
})