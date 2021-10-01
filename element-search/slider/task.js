const arrowLeft = document.querySelector(".slider__arrow_prev");
const arrowRight = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
let i = 0;

let nextSlide = () => {

	slider[i].classList.remove("slider__item_active");
	i++;

	if(i >= slider.length) {
	 	i = 0;
	 }

	 slider[i].classList.add("slider__item_active");
}

let prevSlide = () => {

	slider[i].classList.remove("slider__item_active");
	i--;
	
	if (i < 0) {
		i = slider.length - 1;
	}

	slider[i].classList.add("slider__item_active");
}

arrowRight.onclick = () => nextSlide();
arrowLeft.onclick = () => prevSlide();


