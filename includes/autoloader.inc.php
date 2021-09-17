<?php

    spl_autoload_register('autoLoader');

    function autoLoader ($className) {
        $url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

        if (strpos($url, 'includes') !== false) {
            $path = '../classes/';
        } else if (strpos($url, 'css') !== false) {
            $path = '../classes/';
        } else if (strpos($url, 'images') !== false) {
            $path = '../classes/';
        } else if (strpos($url, 'js') !== false) {
            $path = '../classes/';
        } else if (strpos($url, 'tests') !== false) {
            $path = '../classes/';
        } else {
            $path = 'classes/';
        }
        $extension = '.class.php';
        require_once $path . $className . $extension;
    }


?>
