<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 비밀번호 재설정</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/homepage.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('navbar.php'); ?>

    <!--article-->
    <article class="homepage-article">
        <section class="signup-form">

            <?php
                $selector = $_GET["selector"];
                $validator = $_GET["validator"];

                if (empty($selector) || empty($validator)) {
                    echo "Could not validate your request!";
                } else {
                    if (ctype_xdigit($selector) !== false && ctype_xdigit($validator) !== false) {
                        ?>

                        <form action="./include/reset-password.inc.php" method="post">
                            <input type="hidden" name="selector" value="<?php echo $selector; ?>">
                            <input type="hidden" name="validator" value="<?php echo $validator; ?>">
                            <input type="password" name="pwd" placeholder="Enter a new password...">
                            <input type="password" name="pwd-repeat" placeholder="Repeat new password...">
                            <button type="submit" name="reset-password-submit">Reset password</button>
                        </form>

                        <?php
                    }
                }
            ?>

        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>