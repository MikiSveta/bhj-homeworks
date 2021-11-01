const pollAnswers = document.getElementById('poll__answers');
const pollTitle = document.getElementById('poll__title');
const button = document.getElementsByTagName('button')

let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {

		pollTitle.innerText += xhr.response.data.title;

		for (let i = 0; i < xhr.response.data.answers.length; i++) {

			pollAnswers.insertAdjacentHTML('afterbegin', `
            <button class="poll__answer">
                ${xhr.response.data.answers[i]}
            </button>
           `)
		};

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
		};
	};
}