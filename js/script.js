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

	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
			var typed = new Typed('.text-slider', {
				strings: typed_strings.split(','),
				typeSpeed: 120,
				loop: true,
				backDelay: 1500,
				backSpeed: 30,
				cursorChar: "|"
			});
		}
	
	(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:1955155,hjsv:6};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
});
