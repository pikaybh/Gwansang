let predictions, labelContainer;
let maxPredictions = 3;
var resultLabel, resultTitle, resultExplain, resultCeleb, barWidth;


// Load the image model
async function init() {
    AIthinking();
    $('.loader').show();
    $('.loading').show();

    // delete former informations 
    labelContainer = document.getElementById('label-container');
    //for (let i = 0; i < maxPredictions; i++) {
    //    labelContainer.childNodes[i].innerHTML = "";
    //}

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds 'tmImage' object to your window (window.tmImage)
    //maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
    console.log('work done');
}

// image through the image model
async function predict() {

    // Load the model.
    mobilenet.load().then(model => {
        var img = document.getElementById('matRoiImg');
        // Classify the image.
        model.classify(img).then(predictions => {
            AItelling();
            $('.loader').hide();
            $('.loading').hide();
            $('.file-upload-content').show();
            console.log('Predictions: ');
            console.log(predictions);

            document.getElementById("identity").innerHTML = predictions[0].className + " " + predictions[0].probability.toFixed(2) * 100 + "%";


            if (faces.size() < 0) {
                // no face detected
                var resultError = "<h3 class='resultTitle'>얼굴을 찾을 수 없습니다!</h3>"
                var resultErrorText = "<p class='resultExplain'><b>※얼굴이 잘 나오게 다시 찍어주세요!※</b><br><i>특히, 눈, 코, 입이 잘 나와야 합니다.</i></p><style type='text/css'>.sumAnal{display:none;} .resultExplain{max-width: 100%; padding-bottom: 6px;}</st>"
                document.getElementById("identity").innerHTML = resultError;
                document.getElementById("contents").innerHTML = resultErrorText;

            } else {
                    // predict can take in an image, video or canvas html element
                    var image = document.getElementById('matRoiImg');
                    //prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
                    console.log(predictions[0].className);
                    console.log(predictions[1].className);
                    console.log(predictions[2].className);

                    for (let i = 0; i < maxPredictions; i++) {
                        if (predictions[i].probability.toFixed(2) == 0.00) {
                            barWidth = '2%';
                        } else if (predictions[i].probability.toFixed(2) < 0.1) {
                            barWidth = '4%';
                        } else {
                            barWidth = Math.round(predictions[i].probability.toFixed(2) * 100) + '%';
                        }
                        switch (predictions[i].className) {
                            case "tabby, tabby cat":
                                resultLabel = "태비"
                                break;
                            case "tiger cat":
                                resultLabel = "타이거 캣"
                                break;
                            case "Persian cat":
                                resultLabel = "페르시안 고양이"
                                break;
                            case "Siamese cat, Siamese":
                                resultLabel = "샴 고양이"
                                break;
                            case "Egyptian cat":
                                resultLabel = "이집션 캣"
                                break;
                            case "lynx, catamount":
                                resultLabel = "스라소니"
                                break;
                            default:
                                resultLabel = "고양이가 아니네요!"
                        }
                        console.log(resultLabel);

                        switch (predictions[0].className) {
                            case "tabby, tabby cat":
                                resultTitle = "태비"
                                resultExplain = "[용감하고 대담한 자를 위한 기숙사]<br>사자🦁 | 불🔥 | 용기💪<br>용기, 대담, 당돌함, 의협심<br><br>그리핀도르 학생들은 때때로 무모할 정도로 용감하며, 기사도 정신을 중요하게 생각한다. 용맹과 고결, 명예를 지키기 위해 강력한 규율을 지니고 있다. 자신의 생각을 말하는 것을 주저하지 않으며, 신념을 지키기 위해 맹렬히 싸운다. 지도자가 될 수 있는 자질이 있다."
                                resultCeleb = "학습 데이터: <i>알버스 덤블도어, 위즐리 형제, 빌 위즐리, 찰리 위즐리, 콜린 크리비, 코맥 맥클래건, ⚡해리 포터, 헤르미온느 그레인저, 론 위즐리, 지니 위즐리, 제임스 포터</i> 등등...<br>총 25명"
                                break;
                            case "tiger cat":
                                resultTitle = "타이거 캣"
                                resultExplain = "[재간꾼과 야망 있는 자들을 위한 기숙사]<br>뱀🐍 | 물💧 | 에메랄드💎<br>야망, 교활, 영리함, 계략가, 순수혈통<br><br>슬리데린의 학새들은 야망이 크고, 빈틈이 없으며, 성적 지향적이고, 사회적 지위를 열망한다. 그들은 발생할 수 있는 모든 가능성을 고려하며, 행동하기 전 주저하는 경향을 지닌다. 영리함, 수완, 규칙을 무시하는 것을 가치 있게 여기며, 본인의 능력에 대한 굉장한 자부심을 가지고 있다."
                                resultCeleb = "학습 데이터: <i>알버스 포터, 드레이코 말포이,</i> 등등...<br>총 20명"
                                break;
                            case "Persian cat":
                                resultTitle = "페르시안 고양이"
                                resultExplain = "[진실하고 거짓이 없는 자들을 위한 기숙사]<br>오소리🦡 | 흙🌍 | 다이아몬드💎<br>충성, 성실, 헌신, 정직, 관용<br><br>후플푸프의 학생들은 포용적이며 관대하고, 공정한 경기, 좋은 정신과 열정을 가치 있게 여긴다. 그들은 옳고 그름에 있어 강한 관념을 지니며, 친절하고, 정직하다. 대체적으로 모든 사람들과 잘 지내며, 경쟁을 싫어해 본인의 성취보다 겸손하게 지낸다. 그래서 간혹 다른 기숙가 학생들보다 경쟁력이 떨어져 보이는 것처럼 여겨지지만, 이전 전투에서 그리핀도르 다음으로 가장 많은 수가 참가했다."
                                resultCeleb = "학습 데이터: <i>수산 본즈</i> 등등..."
                                break;
                            case "Siamese cat, Siamese":
                                resultTitle = "샴 고양이"
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            case "Egyptian cat":
                                resultTitle = "이집션 고양이"
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            case "lynx, catamount":
                                resultTitle = "그거...고양이 맞아요? 스라소니..."
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            default:
                                resultTitle = "이 데이터는 집고양이 데이터가 아닙니다...호랑이나 퓨마 같은 거..."
                                resultExplain = "AI가 당신의 기숙사를 찾을 수 없습니다! 얼굴이 잘 나온 사진을 사용하면 더 알맞은 데이터를 얻을 수 있습니다."
                                resultCeleb = "학습 데이터: <i>없음</i>"
                        }
                        console.log(resultTitle);

                        var title = "<div class='resultContents'><h3 class='resultTitle " + predictions[0].className + "'>" + resultTitle + "</h3>"
                        var explain = "<p class='resultExplain " + predictions[0].className + "'>" + resultExplain + "</p>"
                        var celeb = "<p class='resultCeleb " + predictions[0].className + "'>" + resultCeleb + "</P></div><br>"
                        document.getElementById("identity").innerHTML = title
                        document.getElementById("contents").innerHTML = explain + celeb;

                        var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
                        document.getElementById("analTitle").innerHTML = resultGraph;
                        var label = "<h3 class=' bar-title " + predictions[i].className + "'>" + resultLabel + "</h3>";
                        var bar = "<div class='" + predictions[i].className + "-bar-container bar-container'><div class='" + predictions[i].className + "-bar-box'></div><div class=' " + predictions[i].className + "-bar bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(predictions[i].probability.toFixed(2) * 100) + "%</span></div></div>";
                        var analysis = "<div class='anal' id='label-container'>" + label + bar + "</div>"
                        labelContainer.childNodes[i].innerHTML = analysis;
                }
            }
        });
    });
}
