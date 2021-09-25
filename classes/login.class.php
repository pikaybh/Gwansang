<?php

    class login {
        private $username;
        private $pwd;

        public function __construct($username, $pwd) {
            $this->username = $username;
            $this->pwd = $pwd;
        }
        
        //login functions
        public function emptyInputLogin($username, $pwd) {
            $result;
            if (empty($username) || empty($pwd)) {
                $result = true;
            } else {
                $result = false;
            }
            return $result;
        }

        public function loginUser($conn, $username, $pwd) {
            $uidExists = uidExists($conn, $username, $username);

            if ($uidExists === false) {
                header("location: ../login.php?error=wronglogin");
                exit();
            }

            $pwdHashed = $uidExists["usersPwd"];
            $checkPwd = password_verify($pwd, $pwdHashed);

            if ($checkPwd === false) {
                header("location: ../login.php?error=wronglogin");
                exit();
            } else if ($checkPwd === true) {
                session_start();
                $_SESSION["userid"] = $uidExists["usersId"];
                $_SESSION["username"] = $uidExists["usersName"];
                $_SESSION["useremail"] = $uidExists["usersEmail"];
                $_SESSION["useruid"] = $uidExists["usersUid"];
                header("location: ../index.php");
                exit();
            }
        }

        public function __destruct() {

        }

    }
    
?>