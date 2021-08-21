<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 관상 | 호그와트 기숙사 테스트</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/hogwarts.css">
    <script defer src="../js/main.js"></script>
    <script defer src="../js/hogwarts.js"></script>
    <script defer class="jsbin" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
</head>

<body>
    <!--navbar-->
    <?php require_once('../navbar.php'); ?>

    <!--article-->
    <article>
        <div class="calousel"></div>
        <div class="title">
            <?php include '../include/list.inc.php';
            echo 
            $hogwartsTitle . 
            $hogwartsSubtitle;
            ?>
        </div>
        <section class="hogwarts">
            <div class="file-upload">
                <div class="image-upload-wrap">
                    <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                </div>
                <div class="file-upload-content">
                    <img class="file-upload-image" id="face-image" src="#" alt="your image" />
                    <div class="loader"></div>
                        <div id="label-container"></div>
                        <button type="button" class="try-again-btn" onclick="location.replace(location.href)">
                            <span class="try-again-text">다른 사진으로 재시도</span>
                        </button>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                // More API functions here:
                // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

                // the link to your model provided by Teachable Machine export panel
                const URL = "./model/";

                let model, webcam, labelContainer, maxPredictions;

                // Load the image model and setup the webcam
                async function init() {
                    const modelURL = URL + "model.json";
                    const metadataURL = URL + "metadata.json";
                    $('.loader').removeClass("hide-loader");

                    // load the model and metadata
                    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
                    // or files from your local hard drive
                    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
                    model = await tmImage.load(modelURL, metadataURL);
                    maxPredictions = model.getTotalClasses();
                    $('.loader').addClass("hide-loader");
                    labelContainer = document.getElementById("label-container");
                    for (let i = 0; i < maxPredictions; i++) { // and class labels
                        labelContainer.appendChild(document.createElement("div"));
                    }
                    console.log("done");
                }

                // run the webcam image through the image model
                async function predict() {
                    // predict can take in an image, video or canvas html element
                    var image = document.getElementById("face-image");
                    const prediction = await model.predict(image, false);
                    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

                    var varWidth;
                    for (let i = 0; i < maxPredictions; i++) {
                        if (prediction[i].probability.toFixed(2) > 0.1) {
                            barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
                        } else if (prediction[i].probability.toFixed(2) >= 0.01) {
                            barWidth = "4%"
                        } else {
                            barWidth = "2%"
                        }

                        var label = "<div>" + prediction[i].className + "</div>"
                        var bar = "<div class='" + prediction[i].className + "-bar-container'><div class='" + prediction[i].className + "-bar-box'></div><div class=' " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
                        labelContainer.childNodes[i].innerHTML = label + bar;
                    }
                }
            </script>
        </section>
    </article>

    <!--footer-->
    <?php require_once('../footer.php'); ?>

</body>

</html>