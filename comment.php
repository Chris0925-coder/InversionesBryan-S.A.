<?php
$email = $_GET['email'];
$control = $_GET['control'];

$header = 'From ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$control = "Este mensaje fue desde la pagina web por: " . $email . " \r\n";
$control .= "Comentario: " . $_GET['comentario'] . " \r\n";
$control .= "Con fecha: " . date('d/m/Y', time());

$para = 'cguardia3925@gmail.com';
$asunto = 'Comentario de la Webpage';

mail($para, $asunto, utf8_decode($control), $header);

header("Location:contacto.html");
?>