let bookmark = [];
savedBookmark = JSON.parse(localStorage.getItem("bookmark"));

if (savedBookmark) {
	bookmark = savedBookmark;
	savedBookmark = null;
	paintBookmark(bookmark);
}

function paintBookmark(items) {
	const ulTag = document.createElement("ul");

	for (const item of items) {
		const liTag = document.createElement("li");
		const spanTag = document.createElement("span");
		const aTag = document.createElement("a");

		const titleText = document.createTextNode(item.name);

		aTag.appendChild(titleText);

		aTag.setAttribute("href", item.url);
		aTag.setAttribute("target", "_blank");
		// aTag.title = item.name;

		spanTag.appendChild(aTag);

		const buttonTag = document.createElement("button");
		const buttonText = document.createTextNode("❌");
		buttonTag.appendChild(buttonText);

		spanTag.appendChild(buttonTag);

		liTag.appendChild(spanTag);
		ulTag.appendChild(liTag);

		buttonTag.addEventListener("click", function (e) {
			e.target.parentElement.parentElement.remove();

      bookmark = bookmark.filter((f) => item.id !== f.id);
      
			localStorage.setItem("bookmark", JSON.stringify(bookmark));
		});
	}

	document.querySelector(".view-bookmark").innerHTML = "";
	document.querySelector(".view-bookmark").appendChild(ulTag);
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

			bookmark.push(item);

			localStorage.setItem("bookmark", JSON.stringify(bookmark));

			siteName.value = "";
			siteUrl.value = "";
			siteName.focus();

			paintBookmark(bookmark);
		}
	}
});
