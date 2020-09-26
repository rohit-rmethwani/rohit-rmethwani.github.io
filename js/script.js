$(function () {

	$(window).bind('scroll', function() {
		if($(window).scrollTop() >= $('#hero-section').offset().top){
			$("nav .content-container").css("transition", "0.2s");
			$("nav .content-container").css("background-color", "#98B9F2");
		}
		if($(window).scrollTop() >= $('#projects-section').offset().top - 120){
			$("nav .content-container").css("transition", "0.2s");
			$("nav .content-container").css("background-color", "#6F9CEB");
		}
		if($(window).scrollTop() >= $('#about-me').offset().top - 120){
			$("nav .content-container").css("transition", "0.2s");
			$("nav .content-container").css("background-color", "#FFAD5C");
		}
		if($(window).scrollTop() >= $('#recognitions-section').offset().top - 120){
			$("nav .content-container").css("transition", "0.2s");
			$("nav .content-container").css("background-color", "#F49097");
		}
		if($(window).scrollTop() >= $('#testimonials-section').offset().top - 120){
			$("nav .content-container").css("transition", "0.2s");
			$("nav .content-container").css("background-color", "#F5E960");
		}
	});

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1955155,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
});
