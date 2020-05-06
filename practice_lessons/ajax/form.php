<?php

// header('Access-Control-Allow-Origin: *');
// echo $_SERVER['REMOTE_ADDR'];

// function cors() {
//     if (isset($_SERVER['HTTP_ORIGIN'])) {
//         header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
//         header('Access-Control-Allow-Credentials: true');
//         header('Access-Control-Max-Age: 86400');
//     }

//     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//             header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//             header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

//     }
// }

// cors();



$inp = $_POST['ourForm__inp'];

switch($inp) {
    case 'Harry':
        echo 'Potter';
        break;
    case 'Hermoina':
        echo 'Granger';
        break;
    default:
        echo 'Dont know';
}

