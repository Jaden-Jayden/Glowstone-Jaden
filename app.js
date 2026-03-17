const $glowstone = document.getElementById("glowstone");
const $light = document.getElementById("light");
const $menu = document.getElementById("menu");
const $submit = document.querySelector("#submit");
const $span = document.querySelector("button");
const $body = document.querySelector("body")

$light.addEventListener("click", () => {
	$menu.showModal();
});

$span.addEventListener("click", () => {
	document.getElementById("glowstone").src = "assets/glowstone-on.webp";
	

});

function span {
    document.body.style.backgroundColor = "red";
}