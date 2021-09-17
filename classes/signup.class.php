<?php

    //sign up functions
    function emptyInputSignup($name, $email, $username, $pwd, $pwdRepeat) {
        $result;
        if (empty($name) || empty($email) || empty($username) || empty($pwd) || empty($pwdRepeat)) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function invalidUid($username) {
        $result;
        if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function invalidEmail($email) {
        $result;
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }

    function passwordCheckLen($pwd) {
        $result;
        if(strlen($pwd) < 8 || strlen($pwd) > 20) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function passwordCheckSpace($pwd) {
        $result;
        if(preg_match("/\s/u", $pwd) == true) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function passwordCheckNumEngSpe($pwd) {
        $result;
        $num = preg_match('/[0-9]/u', $pwd);
        $eng = preg_match('/[a-z]/u', $pwd);
        $spe = preg_match("/[\!\@\#\$\%\^\&\*]/u",$pwd);

        if( $num == 0 || $eng == 0 || $spe == 0) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function pwdMatch($pwd, $pwdRepeat) {
        $result;
        if ($pwd !== $pwdRepeat) {
            $result = true;
        } else {
            $result = false;
        }
        return $result;
    }

    function uidExists($conn, $username, $email) {
        $sql = "SELECT * FROM users WHERE usersUID = ? OR usersEmail = ?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../signup.php?error=stmtfailed");
            exit();
        }

        mysqli_stmt_bind_param($stmt, "ss", $username, $email);
        mysqli_stmt_execute($stmt);

        $resultData = mysqli_stmt_get_result($stmt);

        if ($row = mysqli_fetch_assoc($resultData)) {
            return $row;
        } else {
            $result = false;
            return $result;
        }

        mysqli_stmt_close($stmt);
    }

    //create user
    function createUser($conn,$name, $email, $username, $pwd) {
        $sql = "INSERT INTO users (usersName, usersEmail, usersUid,usersPwd) VALUES (?, ?, ?, ?);";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../signup.php?error=stmtfailed");
            exit();
        }

        $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
        mysqli_stmt_bind_param($stmt, "ssss",$name, $email, $username, $hashedPwd);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        header("location: ../signup.php?error=none");
        exit();
    }

?>