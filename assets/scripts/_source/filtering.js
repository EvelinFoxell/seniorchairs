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
			filter: getFilter()
		}
	});

	$('.filter').click(function() {
		var filterName = $(this).attr('data-filter');
		var	replaceUrl = window.location.href.split('#')[0];

		replaceUrl = (filterName === 'all') ? '' : '#' + filterName.replace('.', '');
		location.replace(replaceUrl);
	});

	$(window).bind('hashchange', function() {
		var filterName = getFilter();

		$('.active').removeClass('active');
		$('span[data-filter="' + filterName + '"]').addClass('active');
		$('#items').mixItUp('filter', filterName);
	});

	function getFilter() {
		if (window.location.hash) {
			return (window.location.hash).replace('#', '.');
		} else {
			return 'all';
		}
	}
});
