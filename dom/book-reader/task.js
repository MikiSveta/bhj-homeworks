const book = document.querySelector('.book');
const fontSize = document.querySelectorAll('.font-size');
fontSize[0].dataset.size = 'book_fs-small';
fontSize[2].dataset.size = 'book_fs-big';

for (let i = 0; i < fontSize.length; i++) {

	fontSize[i].addEventListener('click', function(e) {

		e.preventDefault();

		fontSize.forEach(e => e.classList.remove('font-size_active'));
		fontSize[i].classList.add('font-size_active');

		book.classList = 'book';
		book.classList.toggle(fontSize[i].dataset.size);	
});
}
