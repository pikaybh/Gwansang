let predictions, labelContainer;
let maxPredictions = 3;
var resultLabel, resultTitle, resultExplain, resultCeleb, barWidth;

// Load the model.
mobilenet.load().then(model => {
    console.log("mobileNet ready!");
    $('.loadingOpenCV').hide();
    $('.image-upload-wrap').show();
});

// Load the image model
async function init() {
    AIthinking();
    $('.loader').show();
    $('.loading').show();

    // delete former informations 
    //labelContainer = document.getElementById('label-container');
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
        var img = document.getElementById('face-image');
        // Classify the image.
        model.classify(img).then(predictions => {
            AItelling();
            $('.loader').hide();
            $('.loading').hide();
            $('.file-upload-content').show();
            console.log('Predictions: ');
            console.log(predictions);
            console.log(predictions[0].className);
            console.log(predictions[1].className);
            console.log(predictions[2].className);


            //const face = 1;
            if (document.getElementById("switch").checked) {
                // no face detected
                //var resultError = "<h3 class='resultTitle'>얼굴을 찾을 수 없습니다!<br>???여길 어떻게 들어왔누???</h3>"
                //var resultErrorText = "<p class='resultExplain'><b>※얼굴이 잘 나오게 다시 찍어주세요!※</b><br><i>특히, 눈, 코, 입이 잘 나와야 합니다.</i></p><style type='text/css'>.sumAnal{display:none;} .resultExplain{max-width: 100%; padding-bottom: 6px;}</st>"
                //document.getElementById("identity").innerHTML = resultError;
                //document.getElementById("contents").innerHTML = resultErrorText;
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
                            resultLabel = "고양이가 아닌 데이터입니다."
                    }

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
                            resultTitle = "고양이를 감지하지 못했습니다!"
                            resultExplain = "더 정확한 결과를 원한다면 고양이가 잘 나오게 다시 찍어주세요. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                    }

                    var title = "<div class='resultContents'><h3 class='resultTitle " + predictions[0].className + "'>" + resultTitle + "</h3>"
                    var explain = "<p class='resultExplain " + predictions[0].className + "'>" + resultExplain + "</p>"
                    var celeb = "<p class='resultCeleb " + predictions[0].className + "'>" + resultCeleb + "</P></div><br>"
                    document.getElementById("identity").innerHTML = title
                    document.getElementById("contents").innerHTML = explain + celeb;

                    if (resultLabel == "고양이가 아닌 데이터입니다.") {
                        var label = "<h3></h3>";
                        var bar = "<div></div>";
                    } else {
                        var label = "<h3 class=' bar-title " + predictions[i].className + "'>" + resultLabel + "</h3>";
                        var bar = "<div class='" + predictions[i].className + "-bar-container bar-container'><div class='" + predictions[i].className + "-bar-box'></div><div class=' " + predictions[i].className + "-bar bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(predictions[i].probability.toFixed(2) * 100) + "%</span></div></div>";
                    }
                    var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
                    document.getElementById("analTitle").innerHTML = resultGraph;
                    var analysis = "<div class='anal' id='label-container'>" + label + bar + "</div>"
                    labelContainer.childNodes[i].innerHTML = analysis;
                }


            } else {
                // predict can take in an image, video or canvas html element
                //prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
                for (let i = 0; i < maxPredictions; i++) {
                    if (predictions[i].probability.toFixed(2) == 0.00) {
                        barWidth = '2%';
                    } else if (predictions[i].probability.toFixed(2) < 0.1) {
                        barWidth = '4%';
                    } else {
                        barWidth = Math.round(predictions[i].probability.toFixed(2) * 100) + '%';
                    }
                    switch (predictions[i].className) {
                        case "Chihuahua":
                            resultLabel = "치와와"
                            break;
                        case "Japanese spaniel":
                            resultLabel = "재패니즈 친"
                            break;
                        case "Maltese dog, Maltese terrier, Maltese":
                            resultLabel = "말티즈"
                            break;
                        case "Pekinese, Pekingese, Peke":
                            resultLabel = "페키니즈"
                            break;
                        case "Shih-Tzu":
                            resultLabel = "시추"
                            break;
                        case "Blenheim spaniel":
                            resultLabel = "킹 찰스 스파니엘"
                            break;
                        case "papillon":
                            resultLabel = "파피용"
                            break;
                        case "toy terrier":
                            resultLabel = "토이 테리어"
                            break;
                        case "Rhodesian ridgeback":
                            resultLabel = "로디지안 리지백"
                            break;
                        case "Afghan hound, Afghan":
                            resultLabel = "아프간 하운드"
                            break;
                        case "basset, basset hound":
                            resultLabel = "바셋 하운드"
                            break;
                        case "beagle":
                            resultLabel = "비글"
                            break;
                        case "bloodhound, sleuthhound":
                            resultLabel = "블러드하운드"
                            break;
                        case "bluetick":
                            resultLabel = "블루틱 쿤하운드"
                            break;
                        case "black-and-tan coonhound":
                            resultLabel = "블랙 앤드 탄 쿤하운드"
                            break;
                        case "Walker hound, Walker foxhound":
                            resultLabel = "트링 워커 쿤하운드"
                            break;
                        case "English foxhound":
                            resultLabel = "잉글리시 폭스하운드"
                            break;
                        case "redbone":
                            resultLabel = "레드본 쿤하운드"
                            break;
                        case "borzoi, Russian wolfhound":
                            resultLabel = "보르조이"
                            break;
                        case "Irish wolfhound":
                            resultLabel = "아이리시 울프하운드"
                            break;
                        case "Italian greyhound":
                            resultLabel = "이탈리안 그레이하운드"
                            break;
                        case "whippet":
                            resultLabel = "휘핏"
                            break;
                        case "Ibizan hound, Ibizan Podenco":
                            resultLabel = "이비전 하운드"
                            break;
                        case "Norwegian elkhound, elkhound":
                            resultLabel = "노르웨이언 엘크하운드"
                            break;
                        case "otterhound, otter hound":
                            resultLabel = "오터 하운드"
                            break;
                        case "Saluki, gazelle hound":
                            resultLabel = "살루키"
                            break;
                        case "Scottish deerhound, deerhound":
                            resultLabel = "스코티시 디어하운드"
                            break;
                        case "Weimaraner":
                            resultLabel = "와이머라너"
                            break;
                        case "Staffordshire bullterrier, Staffordshire bull terrier":
                            resultLabel = "스타포드셔 불 테리어"
                            break;
                        case "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier":
                            resultLabel = "아메리칸 스태퍼드셔 테리어"
                            break;
                        case "Bedlington terrier":
                            resultLabel = "베들링턴 테리어"
                            break;
                        case "Border terrier":
                            resultLabel = "보더 테리어"
                            break;
                        case "Kerry blue terrier":
                            resultLabel = "케리 블루 테리어"
                            break;
                        case "Irish terrier":
                            resultLabel = "아이리시 테리어"
                            break;
                        case "Norfolk terrier":
                            resultLabel = "노퍽 테리어"
                            break;
                        case "Norwich terrier":
                            resultLabel = "노리치 테리어"
                            break;
                        case "Yorkshire terrier":
                            resultLabel = "요크셔 테리어"
                            break;
                        case "wire-haired fox terrier":
                            resultLabel = "와이어 폭스 테리어"
                            break;
                        case "Lakeland terrier":
                            resultLabel = "레이클랜드 테리어"
                            break;
                        case "Sealyham terrier, Sealyham":
                            resultLabel = "실리햄 테리어"
                            break;
                        case "Airedale, Airedale terrier":
                            resultLabel = "에어데일 테리어"
                            break;
                        case "cairn, cairn terrier":
                            resultLabel = "케언 테리어"
                            break;
                        case "Australian terrier":
                            resultLabel = "오스트레일리안 테리어"
                            break;
                        case "Dandie Dinmont, Dandie Dinmont terrier":
                            resultLabel = "댄디 딘몬트 테리어"
                            break;
                        case "Boston bull, Boston terrier":
                            resultLabel = "보스턴 테리어"
                            break;
                        case "miniature schnauzer":
                            resultLabel = "미니어처 슈나우저"
                            break;
                        case "giant schnauzer":
                            resultLabel = "자이언트 슈나우저"
                            break;
                        case "standard schnauzer":
                            resultLabel = "스탠더드 슈나우저"
                            break;
                        case "Scotch terrier, Scottish terrier, Scottie":
                            resultLabel = "스코티시 테리어"
                            break;
                        case "Tibetan terrier, chrysanthemum dog":
                            resultLabel = "티베탄 테리어"
                            break;
                        case "silky terrier, Sydney silky":
                            resultLabel = "오스트레일리안 실키 테리어"
                            break;
                        case "soft-coated wheaten terrier":
                            resultLabel = "아이리쉬 소프트코티드 휘튼 테리어"
                            break;
                        case "West Highland white terrier":
                            resultLabel = "웨스트 하일랜드 화이트 테리어"
                            break;
                        case "Lhasa, Lhasa apso":
                            resultLabel = "라사압소"
                            break;
                        case "flat-coated retriever":
                            resultLabel = "플랫 코티드 리트리버"
                            break;
                        case "curly-coated retriever":
                            resultLabel = "컬리 코티드 리트리버"
                            break;
                        case "golden retriever":
                            resultLabel = "골든 리트리버"
                            break;
                        case "Labrador retriever":
                            resultLabel = "래브라도 리트리버"
                            break;
                        case "Chesapeake Bay retriever":
                            resultLabel = "체서피크 베이 리트리버"
                            break;
                        case "German short-haired pointer":
                            resultLabel = "저먼 쇼트헤어드 포인터"
                            break;
                        case "vizsla, Hungarian pointer":
                            resultLabel = "비즐라"
                            break;
                        case "English setter":
                            resultLabel = "르웰린"
                            break;
                        case "Irish setter, red setter":
                            resultLabel = "아이리시 세터"
                            break;
                        case "Gordon setter":
                            resultLabel = "고든 세터"
                            break;
                        case "Brittany spaniel":
                            resultLabel = "브리트니"
                            break;
                        case "clumber, clumber spaniel":
                            resultLabel = "클럼버 스파니엘"
                            break;
                        case "English springer, English springer spaniel":
                            resultLabel = "잉글리시 스프링어 스패니얼"
                            break;
                        case "Welsh springer spaniel":
                            resultLabel = "웰시 스프링어 스패니얼"
                            break;
                        case "cocker spaniel, English cocker spaniel, cocker":
                            resultLabel = "코커 스패니얼"
                            break;
                        case "Sussex spaniel":
                            resultLabel = "서식스 스패니얼"
                            break;
                        case "Irish water spaniel":
                            resultLabel = "아이리시 워터 스패니얼"
                            break;
                        case "kuvasz":
                            resultLabel = "쿠바츠"
                            break;
                        case "schipperke":
                            resultLabel = "스키퍼키"
                            break;
                        case "groenendael":
                            resultLabel = "그루넨달"
                            break;
                        case "malinois":
                            resultLabel = "말리노이즈"
                            break;
                        case "briard":
                            resultLabel = "브리아드"
                            break;
                        case "kelpie":
                            resultLabel = "오스트레일리안 켈피"
                            break;
                        case "komondor":
                            resultLabel = "코몬돌"
                            break;
                        case "Old English sheepdog, bobtail":
                            resultLabel = "올드 잉글리시 쉽독"
                            break;
                        case "Shetland sheepdog, Shetland sheep dog, Shetland":
                            resultLabel = "셔틀랜드 쉽독"
                            break;
                        case "collie":
                            resultLabel = "콜리"
                            break;
                        case "Border collie":
                            resultLabel = "보더 콜리"
                            break;
                        case "Bouvier des Flandres, Bouviers des Flandres":
                            resultLabel = "부비에 데 플랑드르"
                            break;
                        case "Rottweiler":
                            resultLabel = "로트바일러"
                            break;
                        case "German shepherd, German shepherd dog, German police dog, alsatian":
                            resultLabel = "저먼 셰퍼드"
                            break;
                        case "Doberman, Doberman pinscher":
                            resultLabel = "도베르만 핀셔"
                            break;
                        case "miniature pinscher":
                            resultLabel = "미니어처 핀셔"
                            break;
                        case "Greater Swiss Mountain dog":
                            resultLabel = "그레이트 스위스 마운틴 도그"
                            break;
                        case "Bernese mountain dog":
                            resultLabel = "버니즈 마운틴 도그일"
                            break;
                        case "Appenzeller":
                            resultLabel = "아펜젤러 세넨훈드"
                            break;
                        case "EntleBucher":
                            resultLabel = "엔틀버쳐 마운틴 독"
                            break;
                        case "boxer":
                            resultLabel = "복서"
                            break;
                        case "bull mastiff":
                            resultLabel = "불마스티프"
                            break;
                        case "Tibetan mastiff":
                            resultLabel = "티베탄 마스티프"
                            break;
                        case "French bulldog":
                            resultLabel = "프렌치 불도그"
                            break;
                        case "Great Dane":
                            resultLabel = "그레이트 데인"
                            break;
                        case "Saint Bernard, St Bernard":
                            resultLabel = "세인트버나드"
                            break;
                        case "Eskimo dog, husky":
                            resultLabel = "아메리칸 에스키모 도그"
                            break;
                        case "malamute, malemute, Alaskan malamute":
                            resultLabel = "알래스칸 말라뮤트"
                            break;
                        case "Siberian husky":
                            resultLabel = "시베리안 허스키"
                            break;
                        case "dalmatian, coach dog, carriage dog":
                            resultLabel = "달마티안"
                            break;
                        case "affenpinscher, monkey pinscher, monkey dog":
                            resultLabel = "아펜핀셔"
                            break;
                        case "basenji":
                            resultLabel = "바센지"
                            break;
                        case "pug, pug-dog":
                            resultLabel = "퍼그"
                            break;
                        case "Leonberg":
                            resultLabel = "레온베르거"
                            break;
                        case "Newfoundland, Newfoundland dog":
                            resultLabel = "뉴펀들랜드"
                            break;
                        case "Great Pyrenees":
                            resultLabel = "그레이트 피레니즈"
                            break;
                        case "Samoyed, Samoyede":
                            resultLabel = "사모예드견"
                            break;
                        case "Pomeranian":
                            resultLabel = "포메라니안"
                            break;
                        case "chow, chow chow":
                            resultLabel = "차우차우"
                            break;
                        case "keeshond":
                            resultLabel = "키스혼드"
                            break;
                        case "Brabancon griffon":
                            resultLabel = "브뤼셀 그리펀"
                            break;
                        case "Pembroke, Pembroke Welsh corgi":
                            resultLabel = "펨브록 웰시 코기"
                            break;
                        case "Cardigan, Cardigan Welsh corgi":
                            resultLabel = "카디건 웰시 코기"
                            break;
                        case "toy poodle":
                            resultLabel = "토이푸들"
                            break;
                        case "miniature poodle":
                            resultLabel = "미니어처 푸들"
                            break;
                        case "standard poodle":
                            resultLabel = "푸들"
                            break;
                        case "Mexican hairless":
                            resultLabel = "멕시칸 헤어리스 도그"
                            break;
                        case "timber wolf, grey wolf, gray wolf, Canis lupus":
                            resultLabel = "회색늑대(?!)"
                            break;
                        case "white wolf, Arctic wolf, Canis lupus tundrarum":
                            resultLabel = "북극늑대(?!)"
                            break;
                        case "red wolf, maned wolf, Canis rufus, Canis niger":
                            resultLabel = "붉은늑대(?!)"
                            break;
                        case "coyote, prairie wolf, brush wolf, Canis latrans":
                            resultLabel = "코요테(?!)"
                            break;
                        case "dingo, warrigal, warragal, Canis dingo":
                            resultLabel = "딩고"
                            break;
                        case "dhole, Cuon alpinus":
                            resultLabel = "승냥이(?!)"
                            break;
                        case "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus":
                            resultLabel = "아프리카들개"
                            break;
                        default:
                            resultLabel = "강아지가 아닌 데이터입니다."
                    }

                    switch (predictions[0].className) {
                        case "Chihuahua":
                            resultTitle = "치와와"
                            resultExplain = "헌신적인 | 경계심인 많은 | 공격적인 | 생기있는 | 민첩한 | 용맹스러운<br><br>치와와를 상징하는 단어는 분노이다. 작은체구에도 불구하고 성격이 불같이 매우 거칠고 공격성이 맹렬하며, 고집이 무척 세고 질투심이 많으며 작은 체구에도 불구하고 겁이 없는 견종이다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Japanese spaniel":
                            resultTitle = "재패니즈 친"
                            resultExplain = "총명한 | 경계심이 많은 | 애정이 넘치는 | 충성스러운 | 독립심이 강한<br><br>처음엔 중국의 개였으나 중국에서 신라로 이 견종이 보내졌고, 신라에서 이 견종을 일본으로 보내면서 일본 원산의 소형견으로 알려지게 되었다. 그 당시 일본에서는 귀족들만 키울 수 있을 정도로 귀했다고 한다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Maltese dog, Maltese terrier, Maltese":
                            resultTitle = "말티즈"
                            resultExplain = "장난스러운 | 온순한 | 반응이 빠른 | 애정이 풍부한 | 유순한 | 활동적인<br><br>활발하고 놀기를 좋아하는 성격이다. 주인에게 애교를 잘 부리고 주인이 집에 들어오면 방방 뛰는 등의 모습을 쉽게 볼 수 있다. 눈치가 빨라서 주인의 마음을 민감하게 감지한다. 반면, 자기 주장을 강하게 하고 고집이 있는 견종이다. 밥, 간식, 산책 등 자기가 원하는 바에 대해 적극적으로 의사를 표출하는 편이다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pekinese, Pekingese, Peke":
                            resultTitle = "페키니즈"
                            resultExplain = "완고한 | 애정이 풍부한 | 총명한 | 공격적인 | 고집스러운 | 성격이 좋은<br><br>인간에게 안기는 것을 그다지 좋아하지 않는 편이어서 개인데도 고양이같은 성격으로 알려져 있다. 상당히 독립적이고 귀찮게 구는것을 매우 싫어하여 빈번하게 스킨쉽을 할 경우 문다. 도도하고 자존심이 강하여 어지간해선 몇몇 가족 구성원을 자기 아래 서열로 본다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Shih-Tzu":
                            resultTitle = "사자견 시추"
                            resultExplain = "장난스러운 | 원기왕성한 | 충성스러운 | 활동적인 | 영리한 | 우호적인<br><br>개체에 따라 내성적이거나 외향적일 수 있지만, 사람을 대상으로는 사교적인 편이다. 사람을 너무 좋아해서 자신에게 이쁘다고 하는 사람을 정신줄 놓고 좋아하는 경우도 있다. 또한 자신을 좋아하는 사람에겐 좋다는 표시를 온몸으로 해댄다. &quot;혼자있는 외로움&quot;을 잘 참아내기 때문에 집을 자주 비우는 현대인이 기르기에 적합하다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Blenheim spaniel":
                            resultTitle = " 천사견 캐벌리어"
                            resultExplain = "애정이 풍부한 | 온화한 | 조용한 | 장난스러운 | 밝은 | 애정이 넘치는<br><br>온화한 성격과 예쁜 외모, 주인의 활동 수준에 자기 활동을 맞춰주는 배려심 등 천사견이라 해도 과언이 아니나, 유전적 질환을 타고나는 경우가 많아 견주를 안타깝게 하는 견종이기도 하다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "papillon":
                            resultTitle = "나비귀 빠삐용"
                            resultExplain = "총명한 | 우호적인 | 에너제틱한 | 밝은 | 경계심이 많은<br><br>빠삐용은 어떻게 훈육을 하느냐에 따라 매우 다른 성격을 나타낼 수 있다. 일반적으로 머리가 좋고 주인에게 사랑 받는 것을 좋아하는 성향을 가지고 있지만, 너무 응석받이로 키우게 되면 매우 예민하고 까탈스러운 성향을 드러내기도 한다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "toy terrier":
                            resultTitle = "토이 테리어"
                            resultExplain = "총명한 | 우호적인 | 경계심이 많은 | 장난스러운 | 충성스러운 | 활발한<br><br>호기심이 많은 편인데 똑똑하기도해서 무엇이든 빨리 배울 수 있다. 따라서, 훈련을 잘 시키면 다양한 명령을 따를 수 있다. 성견이 되어서도 이러한 성격이 쭉 이어져서 &quot;puppies for life&quot;라고 불리기도 한다. 토이 테리어는 분리불안증에 잘 걸리지 않는 견종으로 유명하다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Rhodesian ridgeback":
                            resultTitle = "로디지안 리지백"
                            resultExplain = "예민한 | 장난을 좋아하는 | 총명한 | 품위있는 | 의지가 강한 | 충성스러운<br><br>로디지아 리지백은 순종을 잘하며 주인에게 헌신적이지만, 낯선 사람에게는 다소 소극적이다. 또한, 고집이 세며 쉽게 싫증을 내는 경향이 있기 때문에 로디지아 리지백을 키우기에 적합한 사람은 이 개의 욕구를 배출해줄 수 있는 출구를 제공할 수 있어야 하며, 단호하게 훈련을 시킬 줄 아는 사람이어야 하므로 초보자는 부적합하다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Afghan hound, Afghan":
                            resultTitle = "우아한 아프간 하운드"
                            resultExplain = "냉담한 | 익살스러운 | 독립심이 강한 | 품위있는 | 밝은<br><br>아프간 하운드는 똑똑, 민첩, 활발하고 장난기가 많은 성격을 지니고 있다. 또한, 애정이 깊고, 주인을 항상 걱정한다. 자립심이 강하고 항상 의연한 태도로 감정을 잘 안드러내는 편이기도 하다. 아이들에게 기본적으로 상냥하게 대해주지만 함께 어울리며 놀지는 않는 타입의 우아한 견종이다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "basset, basset hound":
                            resultTitle = "바셋 하운드"
                            resultExplain = "상냥한 | 애정이 풍부한 | 집요한 | 우호적인 | 헌신적인 | 온화한<br><br>바셋하운드는 상냥하고, 온정이 많은 강아지다. 주인에게 헌신적이고 충성심이 강하지만, 내성적이고 고집이 센 편이며 귀찮게 하는걸 싫어한다. 또한, 비만이 되기 쉬우니 간단한 산책을 자주 시켜주시는편이 좋다. 원래 사냥견이기 때문에 운동을 자주시켜줘야 관절염도 예방할 수 있다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "beagle":
                            resultTitle = "악마견 비글"
                            resultExplain = "쾌활한 | 총명한 | 쉽게 흥분하는 | 침착한 | 결연한 | 온화한<br><br>비글의 활기차고 에너지가 넘치는 특징 때문에 흔히 악마견이라고 알려져 있지만, 실상은 너무나 순종적이고 착하기 때문에 실험견으로 많이 쓰이는 견종이다. 아픈 주사와 약물투여를 실행하는 사람에게 다시 곁을 내 줄 정도로 착하다..."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bloodhound, sleuthhound":
                            resultTitle = "블러드하운드"
                            resultExplain = "고집스러운 | 애정이 풍부한 | 침착한 | 온화한<br><br>순하고 얌전하며 다정하고 사람들과 잘 어울리는 견종이다. 특히, 주인과 끈끈한 애착관계를 형성한다. 블러드하운드는 사납지 않은 견종이어서 아이들에게도 인기가 많은 동반견이 될 수 있다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bluetick":
                            resultTitle = "블루틱 쿤하운드"
                            resultExplain = "총명한 | 활동적인 | 우호적인<br><br>블루틱 쿤하운드는 상냥하고 우아한 개다. 어릴 때부터 집 안에서 길러진다면 가정생활에 잘 적응할 것이다. 블루틱 쿤하운드는 주인에게 매우 순종적이며 체력이 강인하다. 귀를 특별히 신경써서 손질해 주어야 하며, 운동이 필수적이다. 블루틱 쿤하운드는 개체 마다 다른 소리로 짖어서 주인이라면 분별할 수 있을 정도다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "black-and-tan coonhound":
                            resultTitle = "블랙 앤드 탄 쿤하운드"
                            resultExplain = "활발한 | 침착한<br><br>블랙 앤드 탄 쿤하운드는 활발한 성격으로 사람들을 즐겁게 할 줄도 아는 견종이다. 침착하며 아이들과도 잘 지내지만, 다른 짐승의 냄새에 예민하게 반응하여 쫓아가려고 하기 때문에 잃어버릴 염려가 있다. 큰 귀가 밑으로 처져 있는데, 병균에 감염되지 않게 항상 깨끗이 해주어야 한다. 나팔소리와 같은 우렁찬 목소리를 내며 민감하고 많은 운동량을 필요로 하므로 <b>도시생활에는 적합하지 않다!</b> "
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Walker hound, Walker foxhound":
                            resultTitle = "트링 워커 쿤하운드"
                            resultExplain = "총명한 | 애정이 풍부한 | 영리한 | 자신감이 있는 | 애정이 넘치는 | 훈련 능력이 뛰어난<br><br>트링 워커 쿤하운드는 사냥감을 나무 위로 쫒아 올려놓은 다음 나무를 타고 올라가 잡기도 할 정도로 파워풀한 사냥개다. 조금만 훈련을 시키면 사냥감을 몰아넣은 후에 다른 목소리를 내서 그것을 알리게 할 수도 있다. 이 개는 고된 육체적 운동을 주목적으로 개량이 이루어졌고, 좋은 애완견이기도 하지만 <b>도시에는 어울리지 않다!</b>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English foxhound":
                            resultTitle = "잉글리시 폭스하운드"
                            resultExplain = "참을성 있는 | 사교성 좋은 | 붙임성이 있는 | 우호적인 | 활동적인 | 온화한<br><br>명랑하고 쾌활하며 인내심이 강하다. 뛰어놀기를 좋아하며 어지간해서 지칠 줄 모른다. 고집스러운 면이 있어서 강아지 때부터 엄격한 훈련이 필요하고 넓은 공간이 확보되어야 한다. 따라서, 애완견보다 훌륭한 사냥개로 더 사랑 받는다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "redbone":
                            resultTitle = "레드본 쿤하운드"
                            resultExplain = "에너제틱한 | 붙임성이 있는 | 애정이 풍부한 | 독립심이 강한<br><br>만약 레드본 쿤하운드를 어릴 때부터 집안에서 기른다면 가족의 생활에 잘 적응할 수는 있지만, 주인과 그 가족에겐 아주 상냥하게 굴면서도 다른 사람들에겐 어느 정도의 경계심을 보이기 때문에 아파트 등 공동주택에서 기르기에는 부적절 하다. 사냥개의 특성상 탁 트인 공간을 좋아하기 때문에 마당이 있는 단독주택이나 전원주택에서 기르는 것이 좋으며, 하운드 견종 중에서도 초보자가 쉽게 기를 수 있는 견종으로도 알려져 있지만, 운동량을 만족시켜 주어야 한다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "borzoi, Russian wolfhound":
                            resultTitle = "러시안 국견(이었던) 보르조이"
                            resultExplain = "조용한 | 온화한 | 총명한 | 독립심이 강한 | 탄탄한<br><br>한때 늑대 사냥용으로 키워졌던만큼 보르조이는 많은 운동량과 복종 훈련이 필요하다. 또한 보르조이는 예민하고 똑똑해서, 주인의 움직임이나 생각을 잘 관찰하고 이해하여 행동한다. 주인곁에 가까이와서 기대는 애정어린 성품을 갖고 있기도 하지만 예민함이 지나쳐지면 신경질적인면이 다분해지므로 성격관리에도 주의를 기울여야 한다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                        case "Irish wolfhound":
                            resultTitle = "아이리시 울프하운드"
                            resultExplain = "상냥한 | 충성스러운 | 관대한 | 품위있는 | 인내심 있는<br><br>건장한 외모에 걸맞지 않을 정도로 온순하고 상냥한 성격이며 감수성이 많아서 차분하고, 참을성 또한 강하다. 어린아이나 다른 개와도 사이좋게 지낼 수 있지만, 자신의 신체 크기를 고려하지 않고 크게 움직여서 장난치다가 무심코 상대를 다치게 할 수도 있다. [출처 : <a href='https://gyogamman.com/irish-wolfhound/'>교감맨</a>]"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Italian greyhound":
                            resultTitle = "이탈리안 그레이하운드"
                            resultExplain = "애정이 풍부한 | 장난을 좋아하는 | 총명한 | 탄탄한 | 민첩한 | 붙임성이 있는<br><br>이탈리안 그레이하운드는 예민하고 신경질적인 면도 있지만, 한편으론 온화하고 놀기를 좋아하는 활발한 면도 있어서 훈육이 쉬운 견종이다. 가족들에게 애정을 보이고 순종적이고 온화한 성격인 반면, 낯선 사람에게는 거리를 두고 특유의 날카로운 감각 때문에 신경질적이기도 하다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "whippet":
                            resultTitle = "휘핏"
                            resultExplain = "애정이 풍부한 | 조용한 | 총명한 | 우호적인 | 생기있는 | 온화한<br><br>​휘핏의 기질은 똑똑하고, 활기차며 애정이 넘친다. 매우 헌신적인 반려견이지만 극도로 예민하기도 해서, 육체적으로나 정신적으로나 절대로 거칠게 훈련해서는 안되는 견종이다. 훈련할때에는 다양한 것들을 접할 수 있도록 해줘야 한다."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Ibizan hound, Ibizan Podenco":
                            resultLabel = "이비전 하운드"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norwegian elkhound, elkhound":
                            resultLabel = "노르웨이언 엘크하운드"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "otterhound, otter hound":
                            resultLabel = "오터 하운드"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Saluki, gazelle hound":
                            resultLabel = "살루키"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Scottish deerhound, deerhound":
                            resultLabel = "스코티시 디어하운드"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Weimaraner":
                            resultLabel = "와이머라너"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Staffordshire bullterrier, Staffordshire bull terrier":
                            resultLabel = "스타포드셔 불 테리어"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier":
                            resultLabel = "아메리칸 스태퍼드셔 테리어"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bedlington terrier":
                            resultLabel = "베들링턴 테리어"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Border terrier":
                            resultLabel = "보더 테리어"
                            resultTitle = ""
                            resultExplain = "<br><br>"
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Kerry blue terrier":
                            resultLabel = "케리 블루 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish terrier":
                            resultLabel = "아이리시 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norfolk terrier":
                            resultLabel = "노퍽 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Norwich terrier":
                            resultLabel = "노리치 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Yorkshire terrier":
                            resultLabel = "요크셔 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "wire-haired fox terrier":
                            resultLabel = "와이어 폭스 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Lakeland terrier":
                            resultLabel = "레이클랜드 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Sealyham terrier, Sealyham":
                            resultLabel = "실리햄 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Airedale, Airedale terrier":
                            resultLabel = "에어데일 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "cairn, cairn terrier":
                            resultLabel = "케언 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Australian terrier":
                            resultLabel = "오스트레일리안 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Dandie Dinmont, Dandie Dinmont terrier":
                            resultLabel = "댄디 딘몬트 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Boston bull, Boston terrier":
                            resultLabel = "보스턴 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature schnauzer":
                            resultLabel = "미니어처 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "giant schnauzer":
                            resultLabel = "자이언트 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "standard schnauzer":
                            resultLabel = "스탠더드 슈나우저"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Scotch terrier, Scottish terrier, Scottie":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            resultLabel = "스코티시 테리어"
                            break;
                        case "Tibetan terrier, chrysanthemum dog":
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            resultLabel = "티베탄 테리어"
                            break;
                        case "silky terrier, Sydney silky":
                            resultLabel = "오스트레일리안 실키 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "soft-coated wheaten terrier":
                            resultLabel = "아이리쉬 소프트코티드 휘튼 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "West Highland white terrier":
                            resultLabel = "웨스트 하일랜드 화이트 테리어"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Lhasa, Lhasa apso":
                            resultLabel = "라사압소"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "flat-coated retriever":
                            resultLabel = "플랫 코티드 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "curly-coated retriever":
                            resultLabel = "컬리 코티드 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "golden retriever":
                            resultLabel = "골든 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Labrador retriever":
                            resultLabel = "래브라도 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Chesapeake Bay retriever":
                            resultLabel = "체서피크 베이 리트리버"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "German short-haired pointer":
                            resultLabel = "저먼 쇼트헤어드 포인터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "vizsla, Hungarian pointer":
                            resultLabel = "비즐라"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English setter":
                            resultLabel = "르웰린"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish setter, red setter":
                            resultLabel = "아이리시 세터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Gordon setter":
                            resultLabel = "고든 세터"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Brittany spaniel":
                            resultLabel = "브리트니"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "clumber, clumber spaniel":
                            resultLabel = "클럼버 스파니엘"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "English springer, English springer spaniel":
                            resultLabel = "잉글리시 스프링어 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Welsh springer spaniel":
                            resultLabel = "웰시 스프링어 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "cocker spaniel, English cocker spaniel, cocker":
                            resultLabel = "코커 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Sussex spaniel":
                            resultLabel = "서식스 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Irish water spaniel":
                            resultLabel = "아이리시 워터 스패니얼"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "kuvasz":
                            resultLabel = "쿠바츠"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "schipperke":
                            resultLabel = "스키퍼키"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "groenendael":
                            resultLabel = "그루넨달"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "malinois":
                            resultLabel = "말리노이즈"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "briard":
                            resultLabel = "브리아드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "kelpie":
                            resultLabel = "오스트레일리안 켈피"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "komondor":
                            resultLabel = "코몬돌"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Old English sheepdog, bobtail":
                            resultLabel = "올드 잉글리시 쉽독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Shetland sheepdog, Shetland sheep dog, Shetland":
                            resultLabel = "셔틀랜드 쉽독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "collie":
                            resultLabel = "콜리"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Border collie":
                            resultLabel = "보더 콜리"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bouvier des Flandres, Bouviers des Flandres":
                            resultLabel = "부비에 데 플랑드르"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Rottweiler":
                            resultLabel = "로트바일러"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "German shepherd, German shepherd dog, German police dog, alsatian":
                            resultLabel = "저먼 셰퍼드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Doberman, Doberman pinscher":
                            resultLabel = "도베르만 핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature pinscher":
                            resultLabel = "미니어처 핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Greater Swiss Mountain dog":
                            resultLabel = "그레이트 스위스 마운틴 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Bernese mountain dog":
                            resultLabel = "버니즈 마운틴 도그일"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Appenzeller":
                            resultLabel = "아펜젤러 세넨훈드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "EntleBucher":
                            resultLabel = "엔틀버쳐 마운틴 독"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "boxer":
                            resultLabel = "복서"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "bull mastiff":
                            resultLabel = "불마스티프"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Tibetan mastiff":
                            resultLabel = "티베탄 마스티프"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "French bulldog":
                            resultLabel = "프렌치 불도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Great Dane":
                            resultLabel = "그레이트 데인"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Saint Bernard, St Bernard":
                            resultLabel = "세인트버나드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Eskimo dog, husky":
                            resultLabel = "아메리칸 에스키모 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "malamute, malemute, Alaskan malamute":
                            resultLabel = "알래스칸 말라뮤트"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Siberian husky":
                            resultLabel = "시베리안 허스키"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dalmatian, coach dog, carriage dog":
                            resultLabel = "달마티안"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "affenpinscher, monkey pinscher, monkey dog":
                            resultLabel = "아펜핀셔"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "basenji":
                            resultLabel = "바센지"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "pug, pug-dog":
                            resultLabel = "퍼그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Leonberg":
                            resultLabel = "레온베르거"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Newfoundland, Newfoundland dog":
                            resultLabel = "뉴펀들랜드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Great Pyrenees":
                            resultLabel = "그레이트 피레니즈"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Samoyed, Samoyede":
                            resultLabel = "사모예드견"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pomeranian":
                            resultLabel = "포메라니안"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "chow, chow chow":
                            resultLabel = "차우차우"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "keeshond":
                            resultLabel = "키스혼드"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Brabancon griffon":
                            resultLabel = "브뤼셀 그리펀"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Pembroke, Pembroke Welsh corgi":
                            resultLabel = "펨브록 웰시 코기"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Cardigan, Cardigan Welsh corgi":
                            resultLabel = "카디건 웰시 코기"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "toy poodle":
                            resultLabel = "토이푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "miniature poodle":
                            resultLabel = "미니어처 푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "standard poodle":
                            resultLabel = "푸들"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "Mexican hairless":
                            resultLabel = "멕시칸 헤어리스 도그"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "timber wolf, grey wolf, gray wolf, Canis lupus":
                            resultLabel = "회색늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "white wolf, Arctic wolf, Canis lupus tundrarum":
                            resultLabel = "북극늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "red wolf, maned wolf, Canis rufus, Canis niger":
                            resultLabel = "붉은늑대(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "coyote, prairie wolf, brush wolf, Canis latrans":
                            resultLabel = "코요테(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dingo, warrigal, warragal, Canis dingo":
                            resultLabel = "딩고"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "dhole, Cuon alpinus":
                            resultLabel = "승냥이(?!)"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        case "African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus":
                            resultLabel = "아프리카들개"
                            resultTitle = ""
                            resultExplain = ""
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                            break;
                        default:
                            resultTitle = "강아지를 감지하지 못했습니다!"
                            resultExplain = "더 정확한 결과를 원한다면 강이지가 잘 나오게 다시 찍어주세요. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            resultCeleb = "학습 모델: <i>TensorFlow.js Open Source ML - MobileNet</i>"
                    }

                    var title = "<div class='resultContents'><h3 class='resultTitle " + predictions[0].className + "'>" + resultTitle + "</h3>"
                    var explain = "<p class='resultExplain " + predictions[0].className + "'>" + resultExplain + "</p>"
                    var celeb = "<p class='resultCeleb " + predictions[0].className + "'>" + resultCeleb + "</P></div><br>"
                    document.getElementById("identity").innerHTML = title
                    document.getElementById("contents").innerHTML = explain + celeb;

                    if (resultLabel == "강아지가 아닌 데이터입니다.") {
                        var label = "<h3></h3>";
                        var bar = "<div></div>";
                    } else {
                        var label = "<h3 class=' bar-title " + predictions[i].className + "'>" + resultLabel + "</h3>";
                        var bar = "<div class='" + predictions[i].className + "-bar-container bar-container'><div class='" + predictions[i].className + "-bar-box'></div><div class=' " + predictions[i].className + "-bar bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(predictions[i].probability.toFixed(2) * 100) + "%</span></div></div>";
                    }
                    var resultGraph = "<h3 class='result-graph'>분석결과 : </h3>"
                    document.getElementById("analTitle").innerHTML = resultGraph;
                    var analysis = "<div class='anal' id='label-container'>" + label + bar + "</div>"
                    labelContainer.childNodes[i].innerHTML = analysis;
                }
            }
        });
    });
}
