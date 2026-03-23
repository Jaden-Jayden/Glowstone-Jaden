const $light = document.getElementById("light");
const $menu = document.getElementById("menu");
const $submit = document.querySelector("submit");
const $form = document.querySelector("form");
const $input = document.querySelector("#brightness");
const $img = document.querySelector("#glowstone");
const $div = document.getElementsByClassName("opacity");

$light.addEventListener("click", () => {
	$menu.showModal();
});

$form.addEventListener("submit", (e) => {
	/*console.log($input.value)*/
	const data = new FormData($form);
	const b = Number.parseInt(data.get("brightness"));
	const o = Number.parseInt(data.get("opacity"));

	$img.style.filter = `brightness(${b / 100})`;
	$div.style.filter = `opacity(${o / 100})`;
});
