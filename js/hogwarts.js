// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = './model/hogwarts/';
let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    $('.loader').show();
    $('.loading').show();

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds 'tmImage' object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
    console.log('work done');
}

// run the webcam image through the image model
async function predict() {
    $('.loader').hide();
    $('.loading').hide();
    $('.file-upload-content').show();
    if (faces.size() < 1) {
        var resultError = "<h3 class='resultTitle'>얼굴을 찾을 수 없습니다!</h3>"
        var resultErrorText = "<p class='resultExplain'><b>※얼굴이 잘 나오게 다시 찍어주세요!※</b><br><i>특히, 눈, 코, 입이 잘 나와야 합니다.</i></p><style type='text/css'>.sumAnal{display:none;} .resultExplain{max-width: 100%; padding-bottom: 6px;}</st>"
        document.getElementById("identity").innerHTML = resultError;
        document.getElementById("contents").innerHTML = resultErrorText;
    } else {
        // predict can take in an image, video or canvas html element
        var image = document.getElementById('matRoiImg');
        const prediction = await model.predict(image, false);
        prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
        console.log(prediction[0].className);

        var resultLabel, resultTitle, resultExplain, resultCeleb, barWidth;
        /*for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) > 0.1) {
                barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + '%';
            } else if (prediction[i].probability.toFixed(2) >= 0.01) {
                barWidth = '4%';
            } else {
                barWidth = '2%';
            }*/

        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability.toFixed(2) == 0.00) {

            } else if (prediction[i].probability.toFixed(2) < 0.1) {
                barWidth = '4%';
            } else {
                barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + '%';
                switch (prediction[i].className) {
                    case "gryffindor":
                        resultLabel = "𝓖𝓻𝔂𝓯𝓯𝓲𝓷𝓭𝓸𝓻(그리핀도르)"
                        break;
                    case "slytherin":
                        resultLabel = "𝓢𝓵𝔂𝓽𝓱𝓮𝓻𝓲𝓷(슬리데린)"
                        break;
                    case "hufflepuff":
                        resultLabel = "𝓗𝓾𝓯𝓯𝓵𝓮𝓹𝓾𝓯𝓯(후플후프)"
                        break;
                    case "ravenclaw":
                        resultLabel = "𝓡𝓪𝓿𝓮𝓷𝓬𝓵𝓪𝔀(래번클로)"
                        break;
                    default:
                        resultLabel = "𝓜𝓾𝓰𝓰𝓵𝓮(머글)"
                }

                switch (prediction[0].className) {
                    case "gryffindor":
                        resultTitle = "인싸 그리핀도르"
                        resultExplain = "당신은 그리핀도르 어쩌구...Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates laborum vero pariatur nulla tempore ea tempora dolorum quis quaerat delectus voluptatum blanditiis rem, mollitia asperiores corrupti. Ipsa, soluta atque."
                        resultCeleb = "학습 데이터: <i>알버스 덤블도어, 위즐리 형제, 빌 위즐리, 찰리 위즐리, 콜린 크리비, 코맥 맥클래건, ⚡해리 포터, 헤르미온느 그레인저, 론 위즐리, 지니 위즐리, 제임스 포터</i> 등등...<br>총 25명"
                        break;
                    case "slytherin":
                        resultTitle = "츤데레 슬리데린"
                        resultExplain = "당신은 슬리데린 어쩌구...Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates laborum vero pariatur nulla tempore ea tempora dolorum quis quaerat delectus voluptatum blanditiis rem, mollitia asperiores corrupti. Ipsa, soluta atque."
                        resultCeleb = "학습 데이터: <i>알버스 포터, 드레이코 말포이,</i> 등등...<br>총 20명"
                        break;
                    case "hufflepuff":
                        resultTitle = "정의의 사도 후뿌뿌뿌"
                        resultExplain = "당신은 후플푸프 어쩌구...Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates laborum vero pariatur nulla tempore ea tempora dolorum quis quaerat delectus voluptatum blanditiis rem, mollitia asperiores corrupti. Ipsa, soluta atque."
                        resultCeleb = "학습 데이터: <i>수산 본즈</i> 등등..."
                        break;
                    case "ravenclaw":
                        resultTitle = "공부벌레 래번클로"
                        resultExplain = "당신은 래번클로 어쩌구...Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates laborum vero pariatur nulla tempore ea tempora dolorum quis quaerat delectus voluptatum blanditiis rem, mollitia asperiores corrupti. Ipsa, soluta atque."
                        resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                        break;
                    default:
                        resultTitle = "당신은 혹시 머글?"
                        resultExplain = "AI가 당신의 기숙사를 찾을 수 없습니다! 얼굴이 잘 나온 사진을 사용하면 더 알맞은 데이터를 얻을 수 있습니다."
                        resultCeleb = "학습 데이터: <i>없음</i>"
                }

                var title = "<div class='resultContents'><h3 class='resultTitle " + prediction[0].className + "'>" + resultTitle + "</h3>"
                var explain = "<p class='resultExplain " + prediction[0].className + "'>" + resultExplain + "</p>"
                var celeb = "<p class='resultCeleb " + prediction[0].className + "'>" + resultCeleb + "</P></div><br>"
                document.getElementById("identity").innerHTML = title
                document.getElementById("contents").innerHTML = explain + celeb;

                var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
                document.getElementById("analTitle").innerHTML = resultGraph;
                var label = "<h3 class=' bar-title " + prediction[i].className + "'>" + resultLabel + "</h3>";
                var bar = "<div class='" + prediction[i].className + "-bar-container bar-container'><div class='" + prediction[i].className + "-bar-box'></div><div class=' " + prediction[i].className + "-bar bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>";
                var analysis = "<div class='anal'>" + label + bar + "</div>"
                labelContainer.childNodes[i].innerHTML = analysis;
            }
        }
    }
}