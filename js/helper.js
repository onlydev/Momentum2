/**
 * * 배열의 길이 미만의 랜덤한 정수 (인덱스)를 리턴
 *
 * @param {*} arr
 * @returns
 */
function getRandomArrayKey(arr) {
	return Math.floor(Math.random() * arr.length);
}

/**
 * * 넘어온 값을 0으로 채운 2자리의 문자열로 리턴
 *
 * @param {*} item
 * @param {*} maxLength
 * @param {*} fillString
 * @returns
 */
function getTwoCharacterZeroPadded(item, maxLength = 2, fillString = "0") {
	return String(item).padStart(maxLength, fillString);
}

/**
 * * 시간에 따른 인삿말
 *
 * @param {*} hour
 * @returns
 */
function getGreeting(hour) {
	if (hour >= 6 && hour < 12) {
		return "Have a nice day! ❤ ";
	} else if (hour >= 12 && hour < 17) {
		return "Good luck! 🎁 ";
	} else if (hour >= 17 && hour < 21) {
		return "Let's end the day well. 💯 ";
	} else {
		return "Sweet dreams. 💤 ";
	}
}

/**
 * * 명언 가져오기
 *
 * @returns
 */
function getQuote() {
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
			quote: "생각은 깊게, 행동은 빠르게! (실천하라)",
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

	return quotes[getRandomArrayKey(quotes)];
}

/**
 * * 배경 이미지 가져오기
 *
 * @returns
 */
function getImage() {
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

	return images[getRandomArrayKey(images)];
}

/**
 * * 현재 시간의 요일 가져오기
 *
 * @param {*} lang
 * @param {*} key
 * @returns
 */
function getYoil(lang = "en", key = 0) {
	const yoil = {
		Eng: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		Kor: ["일", "월", "화", "수", "목", "금", "토"],
	};

	switch (lang) {
		case "ko":
			return yoil.Kor[key];

		default:
			return yoil.Eng[key];
	}
}

/**
 * * 실시간 날짜 및 시계
 */
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

function getWeatherApi(lat, lon) {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=19f5b7984a8e6d80d87ddc259a59995f&lang=kr&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const city = data.name; // 도시 이름
			const temp = data.main.temp; // 현재 기온
			const feels_like = data.main.feels_like; // 체감온도

			const viewWeather = document.querySelector(".view-weather");

			const viewTemp1 = viewWeather.querySelector(".weather-temp1");
			const viewTemp2 = viewWeather.querySelector(".weather-temp2");

			viewTemp1.innerText = `${city} ${temp}℃ `;
			viewTemp2.innerText = `(wind chill ${feels_like}℃)`;

			viewWeather.classList.remove("hidden");
		})
		.catch((e) => console.error(e));
}
