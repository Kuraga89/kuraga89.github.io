$(function() {

	var owl = $(".slider");
	owl.owlCarousel({
		 loop: true,
		 items: 1,
		 itemClass: "slide-wrap",
		 nav: true,
		 navText: ""
	});
	$(".next").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	});

});
