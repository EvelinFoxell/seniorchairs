$(function() {
	$.injectCSS({
		'.mix': {
			'display': 'none'
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
		var filterName = $(this).attr('data-filter'),
			replaceUrl = window.location.href.split('#')[0];

		replaceUrl = filterName === 'all' ? '' : '#' + filterName.replace('.', '');
		location.replace(replaceUrl);
	});
});