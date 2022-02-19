const images = [
	"01.jpg",
	"02.jpg",
	"03.jpg",
	"04.jpg",
	"05.jpg",
	"06.jpg",
	"07.jpg",
	"08.jpg",
	"09.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"13.jpg",
];

const quotes = [
	{
		quote: "세상에 공짜는 없다.",
		author: "미상",
	},
	{
		quote: "최소한 다른 사람에게 피해를 주는 사람은 되지 말라.",
		author: "미상",
	},
	{
		quote: "박수칠 때 떠나라.",
		author: "미상",
	},
	{
		quote: "이것 또한 지나가리라.",
		author: "유대 경전 - 미드라시",
	},
	{
		quote: "실천하라.",
		author: "나",
	},
	{
		quote: "소년이여, 야망을 가져라.",
		author: "윌리엄 스미스 클라크",
	},
	{
		quote:
			"일단 유명해져라. 그러면 당신이 똥을 싸도 사람들은 박수를 칠 것이다.",
		author: "앤디 워홀",
	},
	{
		quote: "승리해도 병신, 패배해도 병신이라면 승리한 병신이 되어라.",
		author: "앨빈 토플러",
	},
	{
		quote: "강한 자가 이기는 것이 아니라, 이긴 자가 강한 것이다.",
		author: "프란츠 베켄바우어",
	},
	{
		quote: "사느냐, 죽느냐, 그것이 문제로다.",
		author: "햄릿 中",
	},
];

window.addEventListener("load", function (event) {
	// 랜덤 배경 가져오기
	const image = images[getRandomArrayKey(images)];
	document.body.style.backgroundImage = `url('./img/${image}')`;
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";

	// 랜덤 명언 가져오기
	const quoteItem = quotes[getRandomArrayKey(quotes)];
	const wiseSayingQuote = document.querySelector(".wise-saying .quote");
	const wiseSayingAuthor = document.querySelector(".wise-saying .author");

	wiseSayingQuote.innerText = quoteItem.quote;
	wiseSayingAuthor.innerText = `- ${quoteItem.author}`;
});

/**
 * * 구글 검색
 *
 * Todo 새 창으로 열고 있지만 기본 창에서 움직여도 괜찮을지 생각해 보기
 */
 const googleSearch = document.querySelector(".js-search");
 googleSearch.addEventListener("keydown", function (e) {
	 if (e.key === "Enter") {
		 const keyword = googleSearch.value;
 
		 window.open(`https://www.google.com/search?q=${keyword}`, "searchTab");
	 }
 });