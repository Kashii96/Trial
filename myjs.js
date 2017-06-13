$(document).ready(function(){
	$(".box").hover(function() {
		/* Stuff to do when the mouse enters the element */
		//$(this).css("width","400px");
		$(this).animate({width:"400px"}, 1000)
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).animate({width:"300px"}, 200)
	});


	$("body").click(function(){
		$(".box").stop();
	}); 


	$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});


});