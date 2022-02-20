const BOOKMARKS = "bookmarks";

let bookmarks = [];
let savedBookmarks = JSON.parse(localStorage.getItem(BOOKMARKS));

if (savedBookmarks) {
	bookmarks = savedBookmarks;
	savedBookmarks = null;

	paintBookmarks();
}

function saveBookmark() {
	localStorage.setItem(BOOKMARKS, JSON.stringify(bookmarks));
}

function paintBookmarks() {
	const ulTag = document.createElement("ul");

	for (const bookmark of bookmarks) {
		const liTag = document.createElement("li");
		const spanTag = document.createElement("span");
		const aTag = document.createElement("a");

		const titleText = document.createTextNode(bookmark.name);

		aTag.appendChild(titleText);

		aTag.setAttribute("href", bookmark.url);
		aTag.setAttribute("target", "_blank");

		spanTag.appendChild(aTag);

		const buttonTag = document.createElement("button");
		const buttonText = document.createTextNode("❌");
		buttonTag.appendChild(buttonText);

		spanTag.appendChild(buttonTag);

		liTag.appendChild(spanTag);
		ulTag.appendChild(liTag);

		buttonTag.addEventListener("click", function (e) {
			e.target.parentElement.parentElement.remove();

			bookmarks = bookmarks.filter((f) => item.id !== f.id);

			saveBookmark();
		});
	}

	const viewBookmark = document.querySelector(".view-bookmark");

	viewBookmark.innerHTML = "";
	viewBookmark.appendChild(ulTag);
}

const siteName = document.querySelector(".bookmark .js-bookmark-name");
const siteUrl = document.querySelector(".bookmark .js-bookmark-url");

siteUrl.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		if (siteName.value.trim() === "" || siteUrl.value.trim() === "") {
			siteName.focus();
		} else {
			const item = {
				id: Date.now(),
				name: siteName.value,
				url: siteUrl.value,
			};

			bookmarks.push(item);

			saveBookmark();

			siteName.value = "";
			siteUrl.value = "";
			siteName.focus();

			paintBookmarks();
		}
	}
});
