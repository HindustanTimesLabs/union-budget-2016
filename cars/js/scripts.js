$(document).ready(function() {

	$('.cat').click(function() {

		$('.cat').addClass('unselecteds').removeClass('selecteds');
		$(this).removeClass('unselecteds').addClass('selecteds');

		var cat = ($(this).attr('class')).split(' ')[1];

		$('.cat-wrapper').addClass('hide').removeClass('show');

		$('.stats-wrapper .' + cat).removeClass('hide').addClass('show');

	});

	var width = $(window).width();

	if (width <= 500) {
		$('.cat').css('font-size', '12px');
	} else {
		$('.cat').css('font-size', '16px');
	}

	$(window).resize(function() {
		
		width = $(window).width();
		
		if (width <= 500) {
			$('.cat').css('font-size', '12px');
		} else {
			$('.cat').css('font-size', '16px');
		}
	});

});
