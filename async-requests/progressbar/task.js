const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.upload.addEventListener("progress", function (event) {
		progress.value = event.loaded / event.total;
	});
	xhr.send(formData);
	e.preventDefault();
})











