document.addEventListener("DOMContentLoaded", ready);

function ready() {

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
