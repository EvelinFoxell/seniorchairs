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
			filter: window.location.hash ? (window.location.hash).replace('#', '.') : 'all'
		}
	});

	$('.filter').click(function() {
		var filterName = $(this).attr('data-filter');
		var replaceUrl = window.location.href.split('#')[0];

		replaceUrl = (filterName === 'all') ? '' : '#' + filterName.replace('.', '');
		location.replace(replaceUrl);
	});

	$(window).bind('hashchange', function() {
		var filterName = window.location.hash ? (window.location.hash).replace('#', '.') : 'all';

		$('.active').removeClass('active');
		$('span[data-filter="' + filterName + '"]').addClass('active');
		$('#items').mixItUp('filter', filterName);
	});
});
