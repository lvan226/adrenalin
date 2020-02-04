document.addEventListener("DOMContentLoaded", ready);

function ready() {


  // Слайдер фотографий
  $('.slider-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });

  // Анимация чисел JavaScript
  function timer(field, second, num, numhow) {
		var _Seconds = $(field).text(),
			int;
		_Seconds = 0;
		int = setInterval(function () { // запускаем интервал
			if (_Seconds < num) {
				if (_Seconds == num - 1) {
					
				}
				_Seconds += numhow; // прибавляем 1
				$(field).text(_Seconds); // выводим получившееся значение в блок
			} else {
				clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
			}
		}, second);
  }
  timer('#animNumber1', 8, 6549, 10);
  timer('#animNumber2', 9, 3743, 6);
  timer('#animNumber3', 30, 2000, 10);
  timer('#animNumber4', 800, 4, 1);


  // Модальные окна
  function modalPopUp() {
    let overlay = document.getElementById('overlay');
    let popupButton = document.querySelectorAll('.popup-btn');
    for (let i = 0; i < popupButton.length; i++) {
      popupButton[i].addEventListener('click', () => {
        let attr = popupButton[i].getAttribute('data-popup');
        let popup = document.querySelector('#' + attr);
        popup.classList.toggle('active');
        overlay.classList.toggle('overlay_active');
      });
    }
    let popup = document.querySelectorAll('.popup__close');
    for (let i = 0; i < popup.length; i++) {
      popup[i].addEventListener('click', () => {
        popup[i].parentNode.classList.remove('active');
        overlay.classList.toggle('overlay_active');
      });
    }
  }

  modalPopUp();

  // Отправка формы с помощью Ajax на чистом javascript инициализация
  document.querySelectorAll(".form-send").forEach(form =>
    form.addEventListener("submit", submitHandler)
  );
}

// Отправка формы с помощью Ajax на чистом javascript
function submitHandler(e) {
  e.preventDefault();
  // var form = this.querySelector('button');
  // var request = new XMLHttpRequest();
  // var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function() { 
    // console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Выполнится когда форма успешно отправлена
        // success, show this.responseText here
        // console.log("SUCCESS", this);
        // th.classList.add('contact__form-thanks_active');
        // form.setAttribute('disabled', 'disabled');
    }
  }
  
  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  var data = new FormData(this);
  var dataPost;
  // Формируем массив данных для отправки 
  data.forEach(function(value, key) {
    dataPost += '&' + key + '=' + value;
  })
  // console.log(data);
    
  request.send(dataPost);
}

