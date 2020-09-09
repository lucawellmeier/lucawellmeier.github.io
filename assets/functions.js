function renderMath() {
	elem = document.getElementsByTagName("article")[0];
	options = {}
	options.delimiters = [
		{left: "$$", right: "$$", display: true},
		{left: "$", right: "$", display: false}
	];

	renderMathInElement(elem, options);
}

function toggleMenu() {
	menu = document.getElementsByTagName("nav")[0];
	menu.classList.toggle('menu-xs-hide');
}

window.onload = function() {
	toggleMenu();
	renderMath();
}
