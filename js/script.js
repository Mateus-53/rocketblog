const navMenu = document.querySelector("nav"),
	hamburguerMenu = document.querySelector(".hamburguer-menu");

hamburguerMenu.addEventListener("click", () => {
	hamburguerMenu.classList.toggle("active");
	navMenu.classList.toggle("active");
});
