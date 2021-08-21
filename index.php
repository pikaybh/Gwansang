<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 관상</title>
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
    <ul>
      <li>
        <section>
          <a href="./hogwarts/">
            <div class="hogwarts" id="hogwarts"></div>
            <?php include './include/list.inc.php';
            echo 
            $hogwartsTitle . 
            $hogwartsSubtitle;
            ?>
          </a>
        </section>
      </li>
      <li><div class="divline"></div></li>
      <li>
        <section></section>
      </li>
    </ul>
  </article>

  <!--footer-->
  <?php require_once('footer.php'); ?>

</body>

</html>