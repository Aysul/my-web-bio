let btn = document.getElementById("btn");
let allpage = document.getElementById("all-page");
let bool = false;

btn.addEventListener('click', () => {
    bool = !bool;
    if (bool) {
        allpage.classList.add("switch");
    } else {
        allpage.classList.remove("switch");
    }
});


let objects = document.querySelectorAll(".hidden");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
objects.forEach((object) => {
    observer.observe(object);
});