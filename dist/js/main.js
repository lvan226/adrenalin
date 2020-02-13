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
        if(_Seconds > num) {_Seconds = num}
        $(field).text(_Seconds); // выводим получившееся значение в блок
      } else {
        clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
      }
    }, second);
  }
  timer('#animNumber1', 5, 21735, 50);
  timer('#animNumber2', 1, 14336, 30);
  timer('#animNumber3', 10, 4653, 20);
  timer('#animNumber4', 800, 4, 1);

  // Табы
  $('.tab-title > div').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tab-title > div').removeClass('current');
    $('.tab-content__item').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

  let input_change = $('#change_input');
  if (input_change.length) {
    // console.log('1', input_change);
    // alert('324234');
    input_change.on('keyup', function () {
      let radio = document.querySelector('#howmuch5');
      $('.quiz-item.current .jq-radio').removeClass('checked');
      $('.quiz-item.current .jq-radio.checkform').addClass('checked');
      $('.quiz__info-next').removeAttr('disabled');
      radio.value = input_change.val();
    });
  }

  let input_change2 = $('#change_input2');
  if (input_change2.length) {
    input_change2.on('keyup', function () {
      $('.quiz__info-next').removeAttr('disabled');
    });
  }

  // Квиз
  let quizID = 1;
  let arrQuiz = document.querySelectorAll('[data-quiz]');
  let quizLine = document.querySelector('.quiz__line-complete');
  let quizLineWidth = 100 / (arrQuiz.length - 1);
  let quizLineComplete = 0;
  quizLine.style.width = quizLineComplete + "%";
  let quizStart = document.querySelector('.quiz__info-start');
  let quizEnd = document.querySelector('.quiz__info-end');
  let quizStartNumber = 0;
  let quizPrice = document.querySelector('.quiz__cost-number input');
  let quizPriceNumber = Number(quizPrice.value);
  let isQuiz = true;
  quizPrice.innerHTML = quizPriceNumber;
  quizStart.innerHTML = quizStartNumber;
  quizEnd.innerHTML = arrQuiz.length - 1;

  $('.quiz__info-next').on('click', () => {
    if (quizID < arrQuiz.length) {
      $('[data-quiz=' + quizID + ']').removeClass('current');
      quizID++;
      $('[data-quiz=' + quizID + ']').addClass('current');
      quizLineComplete += quizLineWidth;
      quizStartNumber++;
      quizStart.innerHTML = quizStartNumber;
      quizLine.style.width = quizLineComplete + "%";
    }
    if (isQuiz) {
      let intervalQuiz = setInterval(function () {
        quizPrice.value = quizPriceNumber--;
        if (Number(quizPrice.value) == 100) {
          clearInterval(intervalQuiz);
        }
      }, 1000)
      isQuiz = false;
    }
  })

  $('.quiz__info-prev').on('click', () => {
    if (quizID == 2) {
      quizLine.style.width = 0;
    }
    if (quizID > 1) {
      $('[data-quiz=' + quizID + ']').removeClass('current');
      quizID--;
      $('[data-quiz=' + quizID + ']').addClass('current');
      quizLineComplete -= quizLineWidth;
      quizStartNumber--;
      quizStart.innerHTML = quizStartNumber;
      quizLine.style.width = quizLineComplete + "%";
    }
  })

  if ($('.quiz-play').length) {
    let mainblockBtn = document.querySelector('.quiz-play').addEventListener('click', function () {
      $('.quiz-item .jq-radio').change(function () {
        disableBtn();
      });
      $('.quiz__info-next').on('click', function () {
        disableBtn();
      })
      $('.quiz__info-prev').on('click', function () {
        disableBtn();
      });
    });
  }


  // radioAll[0].addEventListener('click', function() {
  //   disableBtn();
  // });

  function disableBtn() {
    let radioList = document.querySelectorAll('.quiz-item.current .jq-radio');
    let isChecked = false;
    // console.log(radioList);
    for (let i = 0; i < radioList.length; i++) {
      if (radioList[i].classList.contains('checked')) {
        isChecked = true;
        break;
      }
    }
    if (isChecked) {
      // alert("Разблокировано");
      $('.quiz__info-next').removeAttr('disabled');
    } else {
      $('.quiz__info-next').attr('disabled', 'disabled');
    }
  }

  // Formstyle
  $('input[type=radio]').styler({

  });


  $('.cost__list').slick({
    slidesToShow: 4,
    variableWidth: true,
    responsive: [{
      breakpoint: 1290,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        variableWidth: true
      },
    },
    {
      breakpoint: 476,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        adaptiveHeight: true
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  // Слайдер выпускной
  $('.game-slider__inner').slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    // adaptiveHeight: true
    // variableWidth: true,
    // arrows: false,
    // infinite: false,
    // centerMode: true  
    // centerMode: true
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          adaptiveHeight: true
        },
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // Бургер меню в шапке
  $('.header-burger').on('click', function () {
    $('.header-menu').addClass('active');
    $('#overlay').addClass('overlay_active');
  });
  $('.header-menu__close').on('click', function () {
    $('.header-menu').removeClass('active');
    $('#overlay').removeClass('overlay_active');
  })
  $('.header__list').on('click', function () {
    $('.header__list').removeClass('active');
    $(this).addClass('active');
  });

  let arrMore = [];
  let arrMoreCounter = 0;
  arrMore[0] = document.querySelectorAll('.row__right')[0];
  arrMore[2] = document.querySelectorAll('.row__right')[1];
  arrMore[1] = document.querySelectorAll('.services-add__row:nth-child(3)')[0];
  console.log(arrMore);
  $('.btn-more').on('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < arrMore.length; i++) {
      if (!(arrMore[i].classList.contains('active'))) {
        arrMore[i].classList.add('active');
        arrMoreCounter++;
        if (arrMoreCounter == 3) {
          document.querySelector('.btn-more').remove();
        }
        break;
      }
    }
  });


  // Табы в квестах
  $('.tabs-title .tabs-title__item').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tabs-title__item').removeClass('current');
    $('.tabs-content__item').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  // Табы в квестах конец

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
        overlay.classList.remove('overlay_active');
      });
    }
  }

  $('.header__cost').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#cost-point').offset().top }, 1000);
    e.preventDefault();
  });

  modalPopUp();

  // Отправка формы с помощью Ajax на чистом javascript инициализация
  document.querySelectorAll(".form-send").forEach(form =>
    form.addEventListener("submit", submitHandler)
  );

  if ($('.send-form-mess').length) {
    document.querySelectorAll(".send-form-mess").forEach(form2 =>
      form2.addEventListener("submit", submitHandler2)
    );
  }
  if ($('.send-form-mess2').length) {
    document.querySelectorAll(".send-form-mess2").forEach(form3 =>
      form3.addEventListener("submit", submitHandler3)
    );
  }
}

// Отправка формы с помощью Ajax на чистом javascript
function submitHandler(e) {
  e.preventDefault();
  // var form = this.querySelector('button');
  var form = document.querySelector('#quiz')
  var result = '<div class="quiz-item current quiz-item-success" data-quiz="8g"><div class="quiz__title">Сообщение отправлено</div>';
  result += '<div class="quiz-img"></div><div class="quiz__text">Спасибо! Мы свяжемся с вами в ближайшее время</div>';
  result += '<div class="quiz__okey popup__close">ОК</div></div><div class="quiz__close popup__close popup-close"></div>'



  var request = new XMLHttpRequest();
  // var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function () {
    // console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

      form.innerHTML = result;
      $('.popup__close').on('click', function () {
        $('.quiz').removeClass('active');
        overlay.classList.remove('overlay_active');
      });
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
  data.forEach(function (value, key) {
    dataPost += '&' + key + '=' + value;
  })
  // console.log(data);

  request.send(dataPost);
}

function submitHandler2(e) {
  e.preventDefault();
  // var form = this.querySelector('button');
  // var form = document.querySelector('')
  var result = '<div class="quiz-item current quiz-item-success" data-quiz="8g"><div class="quiz__title">Сообщение отправлено</div>';
  result += '<div class="quiz-img"></div><div class="quiz__text">Спасибо! Мы свяжемся с вами в ближайшее время</div>';
  result += '<div class="quiz__okey popup__close">ОК</div></div><div class="quiz__close popup__close popup-close"></div>'


  var request = new XMLHttpRequest();
  // var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function () {
    // console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.querySelector('.main-modal').innerHTML = result;
      $('.popup__close').on('click', function () {
        $('.popup').removeClass('active');
        overlay.classList.remove('overlay_active');
      });
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
  data.forEach(function (value, key) {
    dataPost += '&' + key + '=' + value;
  })
  // console.log(data);

  request.send(dataPost);
}

function submitHandler3(e) {
  e.preventDefault();
  // var form = this.querySelector('button');
  // var form = document.querySelector('')
  var result = '<div class="mainform__thanks">Спасибо за заявку!</div>';
  var form = this;

  var request = new XMLHttpRequest();
  // var th = document.querySelector('.contact__form-thanks');

  request.onreadystatechange = function () {
    // console.log("readyState=", this.readyState, "statis=", this.status);
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log(form);
      form.innerHTML = result;
    }
  }

  request.open(this.method, this.action, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  var data = new FormData(this);
  var dataPost;
  // Формируем массив данных для отправки 
  data.forEach(function (value, key) {
    dataPost += '&' + key + '=' + value;
  })
  // console.log(data);

  request.send(dataPost);
}