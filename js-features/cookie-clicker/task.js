const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function() {

	let i = clicker.textContent++;

	if (i % 2 === 0) {
		cookie.width = 250; 	
	} else {
		cookie.width = 200;
	}
}