function toggleMenu() {
	menu = document.getElementsByTagName("nav")[0];
	menu.classList.toggle('menu-xs-hide');
}

function onMailClick(x) {
	window.location.href = 'mailto:' + x.dataset.name 
		+ '@' + x.dataset.domain + '.' + x.dataset.tld;
	return false;
}

window.onload = function() {
	toggleMenu();
}
