<?php
// ini_set('display_errors',1);
// error_reporting(E_ALL);
$name = trim($_POST["quizName"]);
$phone = trim($_POST["quizPhone"]);
$quiz_event = trim($_POST["radio1"]);
$quiz_men = trim($_POST["radio2"]);
$quiz_age = trim($_POST["radio3"]);
$quiz_platform = trim($_POST["platform"]);
$quiz_time = trim($_POST["quizTime"]);
$quiz_discount = trim($_POST["quizDiscount"]);

var_dump($_POST);

echo '1';
// send an email
$to = 'lvan226@yandex.ru';
 
$subject = 'Заявка с Adrenalin';

// $arrMess = foreach ($_POST as $key => $value) {
//   if($value != "") {

//   }
// }
$c = true;
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != 'none') {
    $message .= "
    " . ( ($c = !$c) ? '<div>':'<div style="background-color: #f8f8f8;">' ) . "
      <p style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b><i style='padding-left: 10px;'>        $value</i></p>
    </div>
    ";
  }
}
// $message = $arrMess;
// message
// $message = '
// <html>
// <head>
// <title>Заявка с сайта Adrenalin</title>
// </head>
// <body>
// <p>Заявка с сайта adrenalin. Квиз форма</p>
// <p>Имя пользователя: ' . $name . '</p>
// <p>Телефон: ' . $phone . '</p>
// <p>Размер скидки: ' . $quiz_discount . '</p>
// <p>Мероприятие: ' . $quiz_event . '</p>
// <p>Сколько человек: ' . $quiz_men . '</p>
// <p>Средний возраст участников: ' . $quiz_age . '</p>
// <p>Площадка: ' . $quiz_platform . '</p>
// <p>Дата проведения: ' . $quiz_time . '</p>
// ';
 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
 
$headers .= 'From: Adrenalin.ru <1ivan.dyadyura226@gmail.com>' . "\r\n";
$headers .= 'Reply-To: Adrenalin.ru <lvan226@yandex.ru>' . "\r\n";
 
// Mail it
mail($to, $subject, $message, $headers);
 
?>