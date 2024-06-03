function show_hide_password(target){
	var input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Функция для отображения сообщения об ошибке
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}

// Функция для проверки обязательных полей
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, 'Это поле обязательно для заполнения');
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, 'Введите корректный адрес электронной почты');
        }
    });
}

// Обработчик события отправки формы
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
	checkRequired([username, email, password, password2]);
});