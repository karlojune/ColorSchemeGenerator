let colorSchemeArray = [];

function renderColorScheme() {
	let htmlColorScheme = "";

	colorSchemeArray.forEach((color) => {
		htmlColorScheme += `
		<div class="color-box-container">
		    <div class="color-box" style="background:${color}"></div>
		    <p class="color-box-text">${color}</p>
		</div>
		`;
	});
	document.getElementById("color-scheme-display").innerHTML = htmlColorScheme;
	document.body.style.background = `linear-gradient(to right, ${colorSchemeArray[0]}, ${colorSchemeArray[1]}, ${colorSchemeArray[2]}, ${colorSchemeArray[3]}, ${colorSchemeArray[4]})`;
	colorSchemeArray = [];
}

function getColorSchemeAPI() {
	let color = document.getElementById("select-color").value.slice(1);
	let colorScheme = document.getElementById("select-scheme").value;

	fetch(
		`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=5`
	)
		.then((res) => res.json())
		.then((data) => {
			data.colors.forEach((item) =>
				colorSchemeArray.push(item.hex.value)
			);
			renderColorScheme();
		});
}

document
	.getElementById("get-color-scheme")
	.addEventListener("click", getColorSchemeAPI);

// data.colors[0].hex.value
// renderColorScheme();
