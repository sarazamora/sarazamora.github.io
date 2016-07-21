 $(document).ready(function(){
 	$(".scratch").hide();
 	$(".python").hide();
 	$('#scratchbtn').click(function(){
 	    $(".scratch").toggle()
 	});
 	$('#pythonbtn').click(function(){
 		$(".python").toggle()
 	});
 	$("#selfie").hover(function() {
		$(this).attr("src","images/IMG_2327.jpg");
			}, function() {
		$(this).attr("src","images/IMG_4729.JPG");
	});

});