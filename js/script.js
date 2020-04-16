$(function () {
	$("#hamburger").click(function(){
		$("#open-nav").addClass("open-nav-active");
	});

	$("#close-navbar").click(function(){
		$("#open-nav").removeClass("open-nav-active");
	});

	$(document).mousemove(function(event){
		$("#mouse-trail").css({"top":event.pageY+"px", "left":event.pageX+"px"});
	});
	
	$("#navigation-links").click(function(event){
		console.log(event.target);
		if(event.target.classList.contains("navigation-link")){
			console.log("Inside");
			$("#open-nav").removeClass("open-nav-active");
		}
	});

  	new WOW().init();
	
	  $('.counter').counterUp({
		delay: 10,
		time: 1500,
	});
	
});
