<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>AI 관상 | 공지사항</title>
    <link rel="stylesheet" href="./css/reset.css">
	<link rel="stylesheet" href="./css/style.css">
	<script defer src="./js/main.js"></script>
</head>

<body>
	<!--navbar-->
	<?php require_once('navbar.php'); ?>

	<!--article-->
	<article>
		<section>
			<ul class="notice-list">
				<li id="li7" class="opened">
					<div class="notice-header" onclick="javascript:viewCnt(7)">
						<h4 class="notice-title"><title></title></h4>
						<span class="notice-datetime">yyyy-mm-dd</span>
					</div>
					<div class="notice-content">
						<p>
							<font color="#3c4043" face="Roboto, RobotoDraft, Helvetica, Arial, sans-serif"><span
									style="font-size: 14px; letter-spacing: 0.2px;">각자의 작은 방구석들이 모여 함께 만들어갈 name원들을
									마음깊이 환영해 :)&nbsp;&nbsp;</span></font>
						</p>
						<p>
							<font color="#3c4043" face="Roboto, RobotoDraft, Helvetica, Arial, sans-serif"><span
									style="font-size: 14px; letter-spacing: 0.2px;">●메타 콘텐츠 플랫폼 ´name´ 문의:
									example@hotmail.com</span></font>
						</p>
					</div>
				</li>

			</ul>
		</section>
	</article>

	<!--footer-->
	<?php require_once('footer.php'); ?>

</body>

</html>