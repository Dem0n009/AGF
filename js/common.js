$(document).ready(function() {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-menu").click(function() {
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
			return false;
	});

	$(".top").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
	});

	$(".arrow-bottom").click(function() {
			$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
			return false;
	});

	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	//$(".cards .card").equalHeights();
	//$(".section-third .info-item-wrap").equalHeights();

	$(".section-four").waypoint(function() {
		$(".section-four .card").each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index );
		});
	},  {
		offset:"30%"
	});

	$(".section-six").waypoint(function() {
		$(".section-six .team").each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 150*index );
		});
	},  {
		offset:"30%"
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : '',
		loop : true
	});

	$(".section-head h2").animated("fadeInRight");
	$(".home-section.section-eight p").animated("fadeIn");
	$(".info-item-wrap").animated("zoomIn");
	$(".home-section.section-eight .forms").animated("fadeInRight");

	$(".section-second").waypoint(function() {
		$(".s2-item-wrap").each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index );
		});
	},  {
		offset:"30%"
	});


	$(".section-eight").waypoint(function() {
		$(".s8-item").each(function(index){
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index );
		});
	});


	$(".section-five").waypoint(function() {
		$(".section-five .tc-item").each(function(index){
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index 
				});
				ths.removeClass("").addClass("");
			}, 500*index );
		});

		this.destroy();
		
	},  {
		offset:"20%"
	});

	var myAnimation = new DrawFillSVG({
		elementId: "tc-svg1"
	});



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


	