const timer = document.getElementById('timer');

const addText = setInterval(function() {
	
	let id = timer.textContent -=1;

	if (id === 0) {
		clearInterval(addText);
		window.alert('Вы победили!');
	}

}, 1000)





