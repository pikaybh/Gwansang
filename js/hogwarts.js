// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = './model/hogwarts/';
let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    $('.loader').removeClass('hide-loader');

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds 'tmImage' object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    $('.loader').addClass('hide-loader');
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
    console.log('done');
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    var image = document.getElementById('face-image');
    const prediction = await model.predict(image, false);
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    console.log(prediction[0].className);

    var resultLabel, resultTitle, resultExplain, resultCeleb, barWidth;
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability.toFixed(2) > 0.1) {
            barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + '%';
        } else if (prediction[i].probability.toFixed(2) >= 0.01) {
            barWidth = '4%';
        } else {
            barWidth = '2%';
        }

        switch (prediction[i].className) {
            case "gryffindor":
                resultLabel = "그리핀도르"
                break;
            case "slytherin":
                resultLabel = "슬리더린"
                break;
            case "hufflepuff":
                resultLabel = "후플푸프"
                break;
            case "ravenclaw":
                resultLabel = "레빈클로우"
                break;
            default:
                resultLabel = "알 수 없음"
        }

        switch (prediction[0].className) {
            case "gryffindor":
                resultTitle = "인싸 그리핀도르"
                resultExplain = "다정다감하고 귀여운 당신은 모든 사람들에게 즐거움을 주는 호감형이다! 친절하고 활발한 성격으로 어디에서도 인기폭발이며 애교와 웃음이 많아 연인에게 특히나 사랑스럽다. 당신은 애인바라기로 애인의 관심이 부족하면 시무룩해지고 외로움을 타는 모습이 마치 강아지와 똑 닮았다!"
                resultCeleb = "강아지상 연예인: 강다니엘, 백현(엑소), 박보검, 송중기"
                break;
            case "slytherin":
                resultTitle = "츤데레 매력쟁이 슬리더린"
                resultExplain = "무뚝뚝한 당신의 첫인상은 차가워 보이지만 묘한 매력을 풍겨 언제나 인기가 넘친다. 자존심이 세계 1등과 맞먹지만 관심 받는 것을 좋아하고 연인에게는 은근히 애교쟁이다. 시크한 츤데레로 연인에게 끊임없이 설렘을 안겨주는 당신은 고양이와 닮았다!"
                resultCeleb = "고양이상 연예인: 황민현(뉴이스트), 시우민(엑소), 강동원, 이종석, 이준기"
                break;
            case "hufflepuff":
                resultTitle = "천진난만한 매력의 후뿌뿌뿌"
                resultExplain = "천진난만하고 귀여운 당신은 주변 사람들에게 기쁨을 주는 행복바이러스다! 호기심이 많아 활발하며 귀엽고 순수한 외모로 연인의 보호본능을 자극한다. 존재 자체가 상큼한 당신은 특별한 애교 없이도 연인에게 너무나도 사랑스럽다!"
                resultCeleb = "토끼상 연예인: 정국(방탄소년단), 바비(아이콘), 박지훈(워너원), 수호(엑소)"
                break;
            case "ravenclaw":
                resultTitle = "무심한 레빈클로우"
                resultExplain = "무심한 성격에 첫인상은 나쁜 남자 같지만, 알고 보면 따뜻함이 묻어나는 당신! 시크한 매력에 선뜻 다가가지 못하지만 한번 다가가면 헤어나올 수 없는 터프한 매력을 가진 카리스마 있는 남자다."
                resultCeleb = "공룡상 연예인: 윤두준(하이라이트), 이민기, 김우빈, 육성재(비투비), 공유"
                break;
            default:
                resultTitle = "당신은 혹시 머글?"
                resultExplain = ""
                resultCeleb = ""
        }

        var title = "<div class='resultContents'><h3 class='resultTitle " + prediction[0].className + "'>" + resultTitle + "</h3>"
        var explain = "<p class='resultExplain " + prediction[0].className + "'>" + resultExplain + "</p>"
        var celeb = "<p class='resultCeleb " + prediction[0].className + "'>" + resultCeleb + "</P></div><br>"
        var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
        document.getElementById("contents").innerHTML = title + explain + celeb + resultGraph;

        var label = "<h3 class=' bar-title " + prediction[i].className + "'>" + resultLabel + "</h3>";
        var bar = "<div class='" + prediction[i].className + "-bar-container'><div class='" + prediction[i].className + "-bar-box'></div><div class=' " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>";
        labelContainer.childNodes[i].innerHTML = label + bar;
        console.log(typeof resultLabel);
    }
}
