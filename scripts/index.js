const questions = Array.from(document.getElementsByClassName("question"))
const menuOptions = Array.from(document.getElementsByClassName("menu-option"))
const menuNavUnderline = document.getElementById("menu-nav-underline")
let activeMenu = document.getElementById("active-menu")

function menuToggle() {
    menuNavUnderline.style.width = `${activeMenu.clientWidth}px`
    menuNavUnderline.style.left = `${activeMenu.offsetLeft}px`
}

questions.forEach(question => {
    question.addEventListener("click", (e) => {
        e.target.classList.toggle("active")
    })
})

menuOptions.forEach(menuOption => {
    menuOption.addEventListener("click", (e) => {
        e.target.id = "active-menu"
        activeMenu.id = ""
        activeMenu = e.target

        menuToggle()
    })
})

window.addEventListener("resize", (e) => {
    menuToggle()
})


menuToggle()


// code for carousel //
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000
    },
    loop: true
})