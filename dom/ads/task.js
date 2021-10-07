const rotatorCase = document.querySelectorAll('.rotator__case');

setInterval(function activeCase() {

	for (let i = 0; i < rotatorCase.length; i++) {

		let index = Math.floor(Math.random(i) * Number(rotatorCase.length));

		if (rotatorCase[i].classList.contains('rotator__case_active')) {
			rotatorCase[i].classList.remove('rotator__case_active');
			rotatorCase[index].classList.add('rotator__case_active');
		} 
	}
}, 1000)

