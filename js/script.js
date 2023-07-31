const navMenu = document.querySelector("nav"),
	hamburgerButton = document.querySelector(".hamburger-button"),
	overlay = document.querySelector(".overlay"),
	html = document.querySelector("html"),
	toggleMenu = () => {
		hamburgerButton.classList.toggle("active");
		navMenu.classList.toggle("active");
		overlay.classList.toggle("active");
		html.classList.toggle("hidden");
	};

hamburgerButton.addEventListener("click", () => toggleMenu());
overlay.addEventListener("click", () => toggleMenu());