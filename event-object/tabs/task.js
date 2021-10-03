const tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

function clickTab() {

	for (let i = 0; i < tab.length; i++) {

		if (tab[i].className === 'tab tab_active') {

			tab[i].className = 'tab';
			tabContent[i].className = 'tab__content';
		}
	}
	this.className = "tab tab_active";
	tabContent[tab.indexOf(this)].className = 'tab__content tab__content_active';
}

for (let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', clickTab);
}

  

