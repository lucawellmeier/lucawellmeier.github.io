function toggleMenu() {
	menu = document.getElementsByTagName("nav")[0];
	menu.classList.toggle('xs-hide');
}

window.onload = function() {
	toggleMenu();
}
