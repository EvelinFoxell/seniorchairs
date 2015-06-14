$(function() {
	$.injectCSS({
		".mix": {
			"display": "none"
		}
	});

	$('#items').mixItUp({
		animation: {
			enable: false
		}
	});
});