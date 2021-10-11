const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatWidgetInput = document.querySelector( '.chat-widget__input' );
const messageText = ['Кто тут?', 'Добрый день и До свидания!', 'Извините, все операторы заняты. Не пишите нам больше', 'Где ваша совесть?']

function time() {

		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();

		if(m < 10) {
			m = '0' + m;
		}

		if(h < 10) {
			h = '0' + h;
		}

		return `${h}:${m}`;
	}

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));


chatWidgetInput.addEventListener("change", () => {

	if (!chatWidgetInput.value.trim()) {
		return false;
	}
    
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time"> ${time()} </div>
    <div class="message__text">
      ${chatWidgetInput.value}
    </div>
  </div>
`;
    chatWidgetInput.value = '';

    let i = Math.floor(Math.random() * messageText.length);

    messages.innerHTML += `
  <div class="message">
    <div class="message__time"> ${time()} </div>
    <div class="message__text">
      ${messageText[i]}
    </div>
  </div>
`;
})











