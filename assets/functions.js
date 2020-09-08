function toggleMenu() {
	menu = document.getElementsByTagName("nav")[0];
	menu.classList.toggle('menu-xs-hide');
}

window.onload = function() {
	toggleMenu();
}
