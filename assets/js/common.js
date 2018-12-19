$(document).ready(function () {
	'use strict';
	tabClick();
	function tabClick(){
		$(document).on('click', ".page-tab a", function () {
			var parentRelID = $(this).parent().attr('rel');
			var parentClassName = ($(this).parent().attr('class')).split(' ')[0];
			var relID = $(this).attr('rel');
			//alert('.' + parentRelID + ' .' + parentClassName + '-container.' + relID);
			$('.' + parentRelID + ' .' + parentClassName + '-container').hide();
			$(this).parent().find('a').removeClass('select');
			$(this).addClass('select');
			$('.' + parentRelID + ' .' + parentClassName + '-container.' + relID).show();
		});
	}
});
