// type QuestionType = "multiple-choice" | "short-answer";
// type QuestionsecondType = "image";

// interface Questions {
//   firstType: QuestionType;
//   secondType: QuestionsecondType;
//   question: string;
//   answer: number | string;
//   options: string[];
//   caption: string;
//   reference: string;
// }

export const questions = [
  {
    firstType: "multiple-choice",
    question: "다음 중 <헤어질 결심>(2022, 박찬욱)에 등장하지 않는 음식은?",
    answer: 2,
    options: ["초밥", "볶음밥", "파스타", "석류"],
    caption:
      "해준이 서래를 심문할 때 시마스시에서 특초밥 세트를 주문해 처음으로 함께 식사를 한다. 이포로 이사한 해준은 거실에서 석류를 손질하고, 나중에 서래에게 중국식 볶음밥을 요리해준다.",
  },
  {
    firstType: "multiple-choice",
    question: "다음 중 <벌새>(2018, 김보라)에 등장하는 대사가 아닌 것은?",
    answer: 2,
    options: [
      "제 삶도 언젠가 빛이 날까요?",
      "언니, 그건 지난 학기잖아요.",
      "더 나아지기 위해 우리는 기꺼이 더 나빠졌다. 그게 우리의 최선이었다.",
      "우리는 늘 누군가를 만나 무언가를 나눈다는 것, 세상은 참 신기하고 아름답다.",
    ],
    caption: "<최선의 삶>(2019, 이우정)에 등장하는 대사이다.",
    reference: "https://youtu.be/WjJ6pdVeOAg?t=88",
  },
  {
    firstType: "multiple-choice",
    question: "다음 중 소설가 무라카미 하루키의 소설을 바탕으로 만든 영화가 아닌 것은?",
    answer: 3,
    options: [
      "드라이브 마이 카(2021, 하마구치 류스케)",
      "버닝(2018, 이창동)",
      "토니 타키타니(2004, 이치카와 준)",
      "환상의 빛(1995, 고레에다 히로카즈)",
    ],
    caption: "참고로 원작 소설의 제목은 <헛간을 태우다>이다.",
    reference: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=49852122&start=slayer",
  },
  {
    firstType: "short-answer",
    answer: "여성",
    question:
      "배우 양자경은 제95회 아카데미 시상식에서 <에브리씽 에브리웨어 올 앳 원스>(2022, 댄 콴)로 여우주연상을 수상했다. 다음 빈칸을 채워 해당 수상 소감을 완성하시오.",
    paragraph: "여성 여러분, 그 누구도 여러분께 전성기가 지났다는 말을 하지 못하게 하세요.",
    caption: `SBS가 해당 수상 소감에서 "여성"이라는 단어를 일부러 삭제했다는 의혹이 있었다. 논란이 일자 재편집한 영상이 업로드되었다.`,
    reference: "https://youtu.be/DZldmL7zeSY?t=109",
  },
  {
    firstType: "multiple-choice",
    question: "다음 중 칸 영화제에서 황금종려상을 수상하지 않은 작품은?",
    answer: 2,
    options: [
      "가장 따뜻한 색, 블루(2013, 압델라티프 케시시)",
      "어느 가족(2018, 고레에다 히로카즈)",
      "노매드랜드(2020, 클로이 자오)",
      "슬픔의 삼각형(2022, 루벤 외스틀룬드)",
    ],
    caption: "제78회 베니스 영화제에서 황금사자상을 수상했다.",
  },
  {
    firstType: "multiple-choice",
    secondType: "image",
    title: "shining",
    blurHash: "LRGRrJNF.mVr%1kCNZaeR+j]jZj[",
    question:
      "다음은 영화 <샤이닝>(1980, 스탠리 큐브릭)의 한 장면이다. 사진 속 인물의 대사로 가장 적절한 것은?",
    answer: 3,
    options: ["Johnny is coming!", "Johnny, I found you!", "It's me, Johnny!", "Here's Johnny!"],
    reference: "https://youtu.be/WDpipB4yehk?t=105",
  },
  {
    firstType: "multiple-choice",
    question: `웨스 크레이븐이 연출을 맡고 케빈 윌리엄슨이 각본을 썼으며, "공포영화의 법칙"이라는 클리셰를 메타픽션적으로 활용해 개봉 당시 흥행과 더불어 작품성까지 크게 호평받은 이 공포영화 시리즈는?`,
    answer: 0,
    options: ["<스크림> 시리즈", "<13일의 금요일> 시리즈", "<이블 데드> 시리즈", "<컨저링> 시리즈"],
  },
  {
    firstType: "multiple-choice",
    question: `<킬 빌> 시리즈에는 데들리 바이퍼스 출신의 4명의 암살자 캐릭터가 등장하는데, 해당 인물들은 모두 독사의 이름을 딴 독특한 코드 네임을 가지고 있다. 다음 중 주인공 베아트릭스 키도의 첫 번째 표적이었던 오렌 이시이의 코드 네임으로 가장 적절한 것은?`,
    answer: 3,
    options: ["코퍼헤드", "캘리포니아 마운틴 스네이크", "블랙 맘바", "코튼마우스"],
    reference: "https://namu.wiki/w/데들리%20바이퍼스",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 성소수자 주인공이 등장하지 않는 영화는?`,
    answer: 1,
    options: [
      `호수의 이방인(2013, 알랭 기로디)`,
      `보이후드(2014, 리처드 링클레이터)`,
      `타오르는 여인의 초상(2019, 셀린 시아마)`,
      `걸(2018, 루카스 돈트)`,
    ],
    reference: "https://www.youtube.com/watch?v=BlCivrRQXtY",
  },
  {
    firstType: "multiple-choice",
    title: "chungking-express",
    question: `다음 중 아래 제시된 이모지들과 가장 어울리는 왕가위의 영화는?`,
    answer: 1,
    options: [`아비정전(1990)`, `중경삼림(1994)`, `해피 투게더(1997)`, `화양연화(2000)`],
    caption:
      "1부에서 하지무는 헤어진 연인을 기다리며 유통기한이 5월 1일까지인 파인애플 통조림을 30일 동안 사 모은다. 그리고 선글라스를 쓴 여인에게서 전화가 오길 기다린다. 2부에서 페이는 경찰 663에게 호감을 느끼고, 그와 연인 관계였던 스튜어디스가 보낸 편지 봉투에서 663의 집 열쇠를 찾는다.",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 <언더 더 스킨>(2013, 조나단 글레이저)에서 에일리언 로라가 지구로 오게 된 이유로 가장 적절한 것은?`,
    answer: 0,
    options: [
      `식량으로 사용할 생물을 찾으려고`,
      `인간을 납치해 실험체로 쓰려고`,
      `우연히 블랙홀 속으로 빨려들어서`,
      `우주 탐사 도중 비행체의 결함으로 불시착해서`,
    ],
    reference: "https://www.youtube.com/watch?v=J7bAZCOk0Sc",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 누벨바그의 핵심 인물이었던 장뤽 고다르의 작품이 아닌 것은?`,
    answer: 2,
    options: [
      `비브르 사 비(1962)`,
      `리어 왕(1987)`,
      `내 어머니의 모든 것(1999)`,
      `언어와의 작별(2014)`,
    ],
    caption: "페드로 알모도바르",
  },
  {
    firstType: "multiple-choice",
    secondType: "image",
    title: "greta",
    blurHash: "L5H-*]Di00~W+FWBXnRP03-:HXIU",
    question: `<레이디 버드>(2017), <작은 아씨들>(2019), <바비>(2023)를 연출했으며, 배우로도 활동 중인 다음 사진 속 감독의 이름은?`,
    answer: 3,
    options: [`패티 젠킨스`, `캐서린 비글로우`, `소피아 코폴라`, `그레타 거윅`],
    reference: "https://ko.wikipedia.org/wiki/그레타_거윅",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 세계 최초의 장편 유성영화는?`,
    answer: 1,
    options: [
      `전함 포템킨(1925, 세르게이 에이젠슈타인)`,
      `재즈 싱어(1927, 앨런 크로슬랜드)`,
      `모던 타임즈(1936, 찰리 채플린)`,
      `시민 케인(1941, 오슨 웰스)`,
    ],
    reference: "https://ko.wikipedia.org/wiki/재즈_싱어",
  },
  {
    firstType: "multiple-choice",
    question: `<다가오는 것들>(2016, 미아 한센 러브)에서 주인공 나탈리는 파리의 한 고등학교에서 교사로 일한다. 다음 중 나탈리가 가르치는 과목으로 가장 적절한 것은?`,
    answer: 2,
    options: [`문학`, `수학`, `철학`, `미술`],
    reference: "https://www.youtube.com/watch?v=VtmE1AAvncE",
  },
  {
    firstType: "multiple-choice",
    secondType: "image",
    blurHash: "LbIrEMIU~qRjM{xuIUM{D%RjM{of",
    title: "rashomon",
    question: `다음 중 <라쇼몽>(1950, 구로사와 아키라)에서 미후네 토시로가 연기한 산적 캐릭터의 이름으로 가장 적절한 것은?`,
    answer: 3,
    options: [`테츠야`, `탄지로`, `타케노리`, `타조마루`],
    reference: "https://www.youtube.com/watch?v=Zqoyl2p8_lw&t=112s",
  },

  {
    firstType: "short-answer",
    question: `다음은 <로제타>(1999, 다르덴 형제)의 줄거리 일부이다. 다음 빈칸을 적절하게 채워 정답을 완성하시오.`,
    paragraph: `알코올 중독에 빠진 어머니와 함께 이동식 트레일러에서 생활하고 있는 18살의 로제타에게 가난은 일상이다. 헌옷을 주워 어머니가 수선하면 내다 팔고, 먹을 음식이 없어 강에서 숭어를 잡기도 한다. 공장에서 일한 기간이 짧아 실업급여는 나오지 않고, 다른 일거리를 찾는 일도 어렵기만 하다. 그러다 로제타는 근처 와플 가게에서 일하는 리케와 친구가 된다.`,
    answer: "와플",
    reference: "https://www.youtube.com/watch?v=woN2P4r65oA",
  },
  {
    firstType: "multiple-choice",
    question: `오즈의 마법사(1939, 빅터 플레밍)에서 주인공 도로시는 어떤 행위를 통해 무사히 고향으로 돌아갈 수 있게 된다. 다음 중 그 행위로 가장 적절한 것은?`,
    answer: 2,
    options: [
      `문고리를 반대 방향으로 돌린다.`,
      `무지개 지팡이를 휘두른다.`,
      `구두 뒤꿈치를 맞부딪친다.`,
      `파란 요정에게 기도를 한다.`,
    ],
    reference: "https://youtu.be/ooM-RGUTe2E?t=26",
  },
  {
    firstType: "multiple-choice",
    question: `<더 랍스터>(2015, 요르고스 란티모스)에서 호텔에 입소하게 된 사람들은 45일 동안 특정 조건을 만족시키지 않으면 동물로 변하게 된다. 다음 중 해당 조건으로 가장 적절한 것은?`,
    answer: 3,
    options: [
      `한 명 이상의 인간을 살해한다.`,
      `자신이 정한 한 가지 종류의 음식만 먹는다.`,
      `말을 하지 않는다.`,
      `연인을 찾는다.`,
    ],
    reference: "https://www.youtube.com/watch?v=vU29VfayDMw&t=16s",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 <엑스맨 2>(2003), <엑스맨: 아포칼립스>(2016), <엑스맨: 다크 피닉스>(2019)에 등장하는 나이트크롤러의 능력으로 가장 적절한 것은?`,
    answer: 3,
    options: [
      `핌 입자를 사용해 몸 크기를 축소하거나 확대하고, 생체 전기로 에너지 광선을 발사한다.`,
      `세포와 조직을 자유자재로 조작해 다른 사람의 외형으로 변신할 수 있고 목소리까지 복제한다.`,
      `상대의 에너지를 흡수한다. 뮤턴트의 에너지를 흡수해 그 능력을 사용할 수도 있다.`,
      `차원을 통과해 텔레포트할 수 있다. 뼈 구조가 유연해 뛰어난 민첩성과 균형 감각을 가지고 있다.`,
    ],
    reference: "https://namu.wiki/w/나이트크롤러(엑스맨%20유니버스)",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 픽사 애니메이션 스튜디오에서 만든 영화가 아닌 것은?`,
    answer: 1,
    options: [
      `엘리멘탈(2023, 피터 손)`,
      `보스 베이비(2017, 톰 맥그라스)`,
      `라따뚜이(2007, 브래드 버드)`,
      `벅스 라이프(1998, 존 라세터)`,
    ],
    caption: "드림웍스 애니메이션 스튜디오",
  },
  {
    firstType: "short-answer",
    question: `다음 빈칸을 적절하게 채워 정답을 완성하시오.`,
    paragraph: `1895년 겨울, 뤼미에르 형제는 프랑스의 한 카페에서 자신들의 작품을 공개했다. 이때 상영되었던 50초 분량의 <열차의 도착>이라는 작품은 세계 최초의 영화로 널리 알려져 있다.`,
    answer: "열차",
    caption: `"세계 최초의 영화"로 가장 많이 알려진 작품은 <열차의 도착>이지만, 사실 이 작품은 당시 뤼미에르 형제가 상영했던 단편영화 컬렉션 중 하나였다. 해당 컬렉션에서 가장 먼저 상영되었던 작품은 <공장 문을 나서는 노동자들>이었다.`,
    reference: "https://www.youtube.com/watch?v=1FAj9fJQRZA&pp=ygUUYXJyaXZhbCBvZiB0aGUgdHJhaW4%3D",
  },
  {
    firstType: "multiple-choice",
    question: `한국영상자료원에서 운영하고 있는 시네마테크(KOFA)는 일종의 영화 도서관으로, 영화 관련 자료를 보존하고 이를 모든 일반인에게 무료로 공개해 해당 자료의 가치를 공유한다. 다음 중 국내 시네마테크가 위치해 있는 지역은?`,
    answer: 1,
    options: [`서울특별시 광진구`, `서울특별시 마포구`, `서울특별시 종로구`, `부산광역시 해운대구`],
    reference: "https://www.koreafilm.or.kr/main",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 <타미 페이의 눈>(2021, 마이클 쇼월터)에 등장하는 타미 페이 바커의 직업으로 가장 적절한 것은?`,
    answer: 3,
    options: ["기자", "미용사", "안경사", "전도사"],
    reference: "https://www.youtube.com/watch?v=eMMLRnXPPJk",
  },
  {
    firstType: "multiple-choice",
    question: `다음 중 국내에서 가장 큰 아이맥스 스크린을 보유하고 있는 영화관은?`,
    answer: 1,
    options: [`CGV 왕십리`, `CGV 용산아이파크몰`, `CGV 천호`, `CGV 서면`],
    reference: "https://www.mk.co.kr/news/culture/8781694",
  },
];

export const negativeWord: string[] = ["아닌", "않은", "않는"];
