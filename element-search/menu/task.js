let menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {

	menuLink.item(i).onclick = () => {

		let menuSub = menuLink.item(i).closest('li').querySelector('ul.menu_sub');

		if (menuSub) {

			menuSub.className = 'menu menu_sub menu_active';
			return false;
		}
	}
}
