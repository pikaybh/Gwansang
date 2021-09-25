<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>인공지능 친구들</title>
    <link rel="icon" href="./images/nbklogo.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/homepage.css">
    <script defer src="./js/main.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('navbar.php'); ?>

    <div class="AD"></div>

    <!--article-->
    <article>
        <ul class="li-art">
            <li>
                <div class="divline"></div>
            </li>
            <li>
                <div class="calousel">사람얼굴로 하는 테스트</div>
            </li>
            <!--아이돌 포지션 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink6" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="idolPosition" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink6').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">아이돌 포지션 알아보기!</h3>
                                <h4 class="testTitle">내가 만약 아이돌이라면, 내 포지션은 어디?!</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--호그와트 기숙사 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="theSortingHat" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">호그와트 기숙사 배정 테스트</h3>
                                <h4 class="testTitle">AI 분류모자가 당신의 관상으로 정해주는 기숙사!👓⚡🧹</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--과즙상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink1" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="fruitFace" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink1').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">과즙상 테스트</h3>
                                <h4 class="testTitle">AI가 알려주는 당신의 과즙상!🍎🍑🍒🍋🍍</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--첫인상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink2" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="firstImpression" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink2').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">첫인상 테스트</h3>
                                <h4 class="testTitle">AI가 알려주는 당신의 첫인상!👩🧑</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--동물상 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink3" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="firstImpression" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink3').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">동물상 테스트</h3>
                                <h4 class="testTitle">AI가 알려주는 당신의 동물상!🐶🐱🦊🐰🐻</h4> 
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <li>
                <div class="calousel">애완동물과 함께하는 테스트</div>
            </li>
            <!--강아지 족보 테스트-->
            <li class="homepage-li">
                <section>
                    <form id="testLink5" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="petBreed" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink5').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">강아지/고양이 족보 찾기!</h3>
                                <h4 class="testTitle">AI가 사진으로 판단하는 애완동물 족보!🐶🐱🐾</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>
            <li>
                <div class="divline"></div>
            </li>
            <!--고양이 족보 테스트-->
            <!--<li class="homepage-li">
                <section>
                    <form id="testLink4" action="./includes/tests.inc.php" method="post">
                        <input type="hidden" name="AItest" value="catBreed" />
                        <a href="javascript:void(0)" class="testList" onclick="document.getElementById('testLink4').submit();">
                            <div>
                                <div class="testPic"></div>
                                <h3 class="testTitle">고양이 품종 알아보기!</h3>
                                <h4 class="testTitle">집사야! AI가 알려주는 내 품종 알아보냥?🐱🐈🐾</h4>
                            </div>
                        </a>
                    </form>
                </section>
            </li>-->
        </ul>
    </article>

    <!--footer-->
    <?php require_once('footer.php'); ?>

</body>

</html>