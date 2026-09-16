let btn = document.getElementById("btn");
let allpage = document.getElementById("all-page");
let bool = localStorage.getItem("theme") === "true";



btn.addEventListener('click', () => {
    bool = !bool;
    if (bool) {
        document.documentElement.classList.add("switch");
    } else {
        document.documentElement.classList.remove("switch");
    }

    localStorage.setItem("theme", bool);
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