$(function() {
	$.injectCSS({
		".mix": {
			"display": "none"
		}
	});

	$('#items').mixItUp({
		animation: {
			enable: false
		},
		load: {
			filter: window.location.hash ? '.' + (window.location.hash).replace('#', '') : 'all'
		}
	});

	$('.filter').click(function() {
		window.location.hash = $(this).attr('data-filter').replace('.', '#');
	});
});