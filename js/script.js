const navMenu = document.querySelector("nav"),
	hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
	hamburgerMenu.classList.toggle("active");
	navMenu.classList.toggle("active");
});
