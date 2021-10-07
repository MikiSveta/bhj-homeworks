const reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {

	function isInViewport() {
		const viewportHeight = window.innerHeight;
		const elementTop = reveal[i].getBoundingClientRect().top;

		if (elementTop >= 0 && elementTop < viewportHeight) {

			reveal[i].classList.add('reveal_active');
		} else {
			reveal[i].classList.remove('reveal_active');
		}
	}

	window.addEventListener('scroll', isInViewport);
}

