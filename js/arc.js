$(document).ready(function() { 

	$(".toggle").click(function(){
		var bgnum = $(".toggle").index($(this));
		$($(".bg")[bgnum]).toggle();
	});
});