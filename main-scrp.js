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


const prj = document.querySelectorAll(".project");

prj.forEach((card) => {
    card.addEventListener("mousemove", (eve) => {
    const rec = card.getBoundingClientRect();

    const x = eve.clientX - rec.left;
    const y = eve.clientY - rec.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
});
});