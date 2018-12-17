$(document).ready(function(){
	$("#theBox").click(function(){
		$("#quote").fadeIn(2500);
		$("#theBox").fadeOut(2500, function(){
			$("#music").prop('controls', true);
			$("#music")[0].play();
		});
	});
});