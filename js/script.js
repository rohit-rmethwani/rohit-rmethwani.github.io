$(function () {
	$(document).mousemove(function(event){
		$("#mouse-trail").css({"top":event.pageY+"px", "left":event.pageX+"px"});
	  });
});
