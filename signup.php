<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 로그인</title>
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
        <section>
            <h2>Sign Up</h2>
            <form action="./include/signup.inc.php" method="post">
                <input type="text" name="name" placeholder="Full name...">
                <input type="text" name="email" placeholder="Email...">
                <input type="text" name="uid" placeholder="Username...">
                <input type="password" name="pwd" placeholder="Password...">
                <input type="password" name="pwdrepeat" placeholder="Repeat Password...">
                <button type="submit" name="submit">Sign Up</button>
            </form>
        </section>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>