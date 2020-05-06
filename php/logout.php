<?php
// с курса LoftBlog "Создание динамического веб-сайта PHP/MySQL/JS"



require_once 'db.php';

$_SESSION = [];

if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time()-3600, '/');
}

session_destroy();

header('Location: signup.php');