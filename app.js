const $glowstone = document.getElementById("glowstone");
const $light = document.getElementById("light");
const $menu = document.getElementById("menu");
const $submit = document.querySelector("#submit");
const $span = document.querySelector("button");

$light.addEventListener("click", () => {
	$menu.showModal();
});

$span.addEventListener("click", () => {
	document.getElementById("glowstone").src = "assets/glowstone-on.webp";

	
});

function $span() {
  const body = document.getElementById("myDIV").classList;
  
  body.remove("--body-light-off");
}