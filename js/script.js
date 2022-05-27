const hamburguesa = document.querySelector(".menu-hamb");
const navMenu = document.querySelector("#header__nav");

hamburguesa.addEventListener("click", () => {
	hamburguesa.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
	hamburguesa.classList.remove("active");
	navMenu.classList.remove("active");
}))