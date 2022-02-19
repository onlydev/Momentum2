window.addEventListener("load", function (event) {
	// 랜덤 배경 가져오기
	const image = getImage();
	document.body.style.backgroundImage = `url('./img/${image}')`;
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";

	// 랜덤 명언 가져오기
	const quoteItem = getQuote();
	const wiseSayingQuote = document.querySelector(".wise-saying .quote");
	const wiseSayingAuthor = document.querySelector(".wise-saying .author");

	wiseSayingQuote.innerText = `"${quoteItem.quote}"`;
	wiseSayingAuthor.innerText = `- ${quoteItem.author}`;

	setInterval(getRealTime, 1000);
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

// 실시간 시계
function getRealTime() {
	const today = new Date();

	// 오늘 날짜 가져오기
	const [year, month, day, yoil] = [
		today.getFullYear(),
		getTwoCharacterZeroPadded(today.getMonth() + 1),
		getTwoCharacterZeroPadded(today.getDate()),
		getYoil("en", today.getDay()),
	];

	const todayDate = document.querySelector(".date");
	todayDate.innerText = `${year}.${month}.${day} (${yoil})`;

	// 현재 시간 가져오기
	const hour = getTwoCharacterZeroPadded(today.getHours());
	const minute = getTwoCharacterZeroPadded(today.getMinutes());
	const second = getTwoCharacterZeroPadded(today.getSeconds());

	const realTime = document.querySelector(".clock");
	realTime.innerText = `${hour}:${minute}:${second}`;

	// 인사하기
	const greeting = getGreeting(hour);

	const viewGreeting = document.querySelector(".greeting");
	viewGreeting.innerText = greeting;
}
