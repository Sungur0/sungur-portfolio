const menuHamburger = document.querySelector(".hamburger-menu")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
   navLinks.classList.toggle("mobile-menu")
})