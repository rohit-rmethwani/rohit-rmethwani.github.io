$(function () {
	$(document).mousemove(function(event){
		$("#mouse-trail").css({"top":event.pageY+"px", "left":event.pageX+"px"});
	  });
	  new WOW().init();
	$('.counter').counterUp({
		delay: 10,
		time: 1500,
	});
});
