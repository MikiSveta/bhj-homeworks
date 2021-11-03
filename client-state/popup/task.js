const modal = document.getElementById('subscribe-modal');
const closeModal = document.getElementsByClassName('modal__close')[0];

function modalActive() {
    let statusModal = getCookie('popup');
    if (statusModal === 'false' || typeof statusModal === 'undefined') {
        modal.classList.add('modal_active');
    }
}

function popupClose() {
    modal.classList.remove('modal_active');
    document.cookie = 'popup=close';
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

window.addEventListener('load', modalActive);
closeModal.addEventListener('click', popupClose);



