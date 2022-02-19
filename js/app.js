/**
 * * username 이 중복으로 사용되므로 변수화
 */
const USERNAME = "username";

// 로컬스토리지에 저장되어 있던 사용자 이름
const savedUsername = localStorage.getItem(USERNAME);

/**
 * * 사용자 이름 받기
 */
function processLogin(id) {
	if (id.trim() !== "") {
		userIdInput.classList.add("hidden");
		viewUsername.innerText = id;
		viewUsername.classList.remove("hidden");
	}
}

const viewUsername = document.querySelector(".username");
const userIdInput = document.querySelector(".js-login");
if (!savedUsername) {
	userIdInput.addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
			const username = userIdInput.value;

			// username이 공백일 경우 처리
			if (username.trim() === "") {
				userIdInput.focus();
			} else {
				processLogin(username);

				localStorage.setItem(USERNAME, username);
			}
		}
	});
} else {
	processLogin(savedUsername);
}

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

/**
 * * 윈도우가 로드된 후 실행
 */
window.addEventListener("load", function (event) {
	// 랜덤 배경 가져오기
	const image = getImage();
	document.body.style.backgroundImage = `url('./img/${image}')`;

	// 랜덤 명언 가져오기
	const quoteItem = getQuote();
	const viewQuote = document.querySelector(".wise-saying .quote");
	const viewAuthor = document.querySelector(".wise-saying .author");

	viewQuote.innerText = `"${quoteItem.quote}"`;
	viewAuthor.innerText = `- ${quoteItem.author}`;

	setInterval(getRealTime, 1000);
});
