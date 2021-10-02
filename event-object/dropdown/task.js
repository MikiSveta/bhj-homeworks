const dropdownList = document.getElementsByClassName('dropdown__list');
const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownItem = document.getElementsByClassName('dropdown__item ');


const openList = () => dropdownList.item(0).classList.toggle('dropdown__list_active');


const choiceItem = (event) => {

	openList();
	dropdownValue.item(0).textContent = event.target.textContent;
	event.preventDefault();
}

dropdownValue.item(0).addEventListener('click', openList);

for (let i = 0; i < dropdownItem.length; i++) {
	dropdownItem.item(i).addEventListener('click', choiceItem);
}



