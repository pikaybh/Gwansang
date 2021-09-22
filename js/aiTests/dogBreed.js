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
        var img = document.getElementById('face-image');
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
                            case "Chihuahua":
                                resultLabel = "치와와"
                                break;
                            case "Japanese spaniel":
                                resultLabel = "재패니즈 친"
                                break;
                            case "Maltese dog, Maltese terrier, Maltese":
                                resultLabel = "말티즈, 말티즈 테리어"
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
                                resultLabel = "빠삐용"
                                break;
                            case "toy terrier":
                                resultLabel = "러스키"
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
                        console.log(resultLabel);

                        switch (predictions[0].className) {
                            case "tabby, tabby cat":
                                resultTitle = "인싸 그리핀도르"
                                resultExplain = "[용감하고 대담한 자를 위한 기숙사]<br>사자🦁 | 불🔥 | 용기💪<br>용기, 대담, 당돌함, 의협심<br><br>그리핀도르 학생들은 때때로 무모할 정도로 용감하며, 기사도 정신을 중요하게 생각한다. 용맹과 고결, 명예를 지키기 위해 강력한 규율을 지니고 있다. 자신의 생각을 말하는 것을 주저하지 않으며, 신념을 지키기 위해 맹렬히 싸운다. 지도자가 될 수 있는 자질이 있다."
                                resultCeleb = "학습 데이터: <i>알버스 덤블도어, 위즐리 형제, 빌 위즐리, 찰리 위즐리, 콜린 크리비, 코맥 맥클래건, ⚡해리 포터, 헤르미온느 그레인저, 론 위즐리, 지니 위즐리, 제임스 포터</i> 등등...<br>총 25명"
                                break;
                            case "tiger cat":
                                resultTitle = "츤데레 슬리데린"
                                resultExplain = "[재간꾼과 야망 있는 자들을 위한 기숙사]<br>뱀🐍 | 물💧 | 에메랄드💎<br>야망, 교활, 영리함, 계략가, 순수혈통<br><br>슬리데린의 학새들은 야망이 크고, 빈틈이 없으며, 성적 지향적이고, 사회적 지위를 열망한다. 그들은 발생할 수 있는 모든 가능성을 고려하며, 행동하기 전 주저하는 경향을 지닌다. 영리함, 수완, 규칙을 무시하는 것을 가치 있게 여기며, 본인의 능력에 대한 굉장한 자부심을 가지고 있다."
                                resultCeleb = "학습 데이터: <i>알버스 포터, 드레이코 말포이,</i> 등등...<br>총 20명"
                                break;
                            case "Persian cat":
                                resultTitle = "정의의 사도 후뿌뿌뿌"
                                resultExplain = "[진실하고 거짓이 없는 자들을 위한 기숙사]<br>오소리🦡 | 흙🌍 | 다이아몬드💎<br>충성, 성실, 헌신, 정직, 관용<br><br>후플푸프의 학생들은 포용적이며 관대하고, 공정한 경기, 좋은 정신과 열정을 가치 있게 여긴다. 그들은 옳고 그름에 있어 강한 관념을 지니며, 친절하고, 정직하다. 대체적으로 모든 사람들과 잘 지내며, 경쟁을 싫어해 본인의 성취보다 겸손하게 지낸다. 그래서 간혹 다른 기숙가 학생들보다 경쟁력이 떨어져 보이는 것처럼 여겨지지만, 이전 전투에서 그리핀도르 다음으로 가장 많은 수가 참가했다."
                                resultCeleb = "학습 데이터: <i>수산 본즈</i> 등등..."
                                break;
                            case "Siamese cat, Siamese":
                                resultTitle = "공부벌레 래번클로"
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            case "Egyptian cat":
                                resultTitle = "공부벌레 래번클로"
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            case "lynx, catamount":
                                resultTitle = "그거...고양이 맞아요?"
                                resultExplain = "[지혜롭고 사려 깊은 자들을 위한 기숙사]<br>독수리🦅 | 공기 🌬 | 사파이어💎<br>지혜, 분별력, 창의력<br><br>래번클로 학생들은 이성적이고, 논리적 성향이 강하며, 학문적 수양과 탐구에 관심이 많다. 더불어 방대한 지식과 창의적인 생각을 지닌 것에 자부심을 가진다. 그러나 호기심을 충족하기 위해 관습을 어기는 실수를 종종 하기도 한다. 그래서 일부는 별나거나 이상하게 취급되기도 한다."
                                resultCeleb = "학습 데이터: <i>초 챙, 루나 러브굿</i> 등등..."
                                break;
                            default:
                                resultTitle = "강아쥐"
                                resultExplain = "아직 이 부분은 안 씀"
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
