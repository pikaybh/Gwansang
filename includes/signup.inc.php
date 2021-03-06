<?php

require_once './dbh.inc.php';
require_once './functions.inc.php';

if (isset($_POST["submit"])) {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $username = $_POST["uid"];
    $pwd = $_POST["pwd"];
    $pwdRepeat = $_POST["pwdrepeat"];

    if (emptyInputSignup($name, $email, $username, $pwd, $pwdRepeat) !== false) {
        header("location: ../signup.php?error=emptyinput");
        exit();
    }

    if (invalidUid($username) !== false) {
        header("location: ../signup.php?error=invaliduid");
        exit();
    }

    if (invalidEmail($email) !== false) {
        header("location: ../signup.php?error=invalidemail");
        exit();
    }

    if(passwordCheckLen($pwd) !== false) {
        header("location: ../signup.php?error=tooshortortoolong");
        exit();
    }

    if(passwordCheckSpace($pwd) !== false) {
        header("location: ../signup.php?error=spaceincluded");
        exit();
    }

    if(passwordCheckNumEngSpe($pwd) !== false) {
        header("location: ../signup.php?error=neednumengspe");
        exit();
    }

    if (pwdMatch($pwd, $pwdRepeat) !== false) {
        header("location: ../signup.php?error=passwordsdontmatch");
        exit();
    }

    if (uidExists($conn, $username, $email) !== false) {
        header("location: ../signup.php?error=usernametaken");
        exit();
    }

    createUser($conn, $name, $email, $username, $pwd);

} else {
    header("location: ../signup.php");
    exit();
}