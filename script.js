const navbar = document.getElementById("navbar");
let lastscroll = 0;

window.addEventListener("scroll", () =>{
    let currentscroll = window.scrollY;

    if (currentscroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (currentscroll > lastscroll && currentscroll > 100) {
        navbar.classList.add("hide");
        navbar.classList.remove("show")
    } else {
        navbar.classList.add("show")
        navbar.classList.remove("hide");
    }

    lastscroll = currentscroll;
});