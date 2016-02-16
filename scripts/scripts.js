$('header').hide().fadeIn(800);

$("li").hover(
	function() {
		$(this).fadeTo(0, 0.25);
	},
	function() {
		$(this).fadeTo(0, 0.5);
	}
);

$("li").click(function() {
	$(this).toggleClass("toggleColor");
});

$("a").click(function() {
	$(this).text("Clicked");
});

$("p").click(function() {
	$(this).toggleClass("bonus");
});