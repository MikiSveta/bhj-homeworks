document.getElementById('modal_main').className = 'modal modal_active';

let modalClose = document.getElementsByClassName('modal__close modal__close_times');
let showSuccess = document.getElementsByClassName('show-success').item(0);


modalClose.item(0).onclick = () => document.getElementById('modal_main').className = 'modal';

showSuccess.onclick = () => {

	document.getElementById('modal_success').className = 'modal modal_active';
	document.getElementById('modal_main').className = 'modal';
}

modalClose.item(1).onclick = () => {

	document.getElementById('modal_success').className = 'modal';
	document.getElementById('modal_main').className = 'modal';
}
	

















