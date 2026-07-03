window.onload = function () {
    alert("Welcome to Hari Vishnu Portfolio");
};

const projectBtn = document.querySelector(".btn-outline-light");

projectBtn.addEventListener("click", function () {
    alert("Opening Projects Section");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});