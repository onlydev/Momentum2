/**
 * * 배열의 길이 미만의 랜덤한 정수 (인덱스)를 리턴
 *
 * @param {*} arr
 * @returns
 */
function getRandomArrayKey(arr) {
	return Math.floor(Math.random() * arr.length);
}
