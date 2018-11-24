$(document).ready(function(){
	$("#theBox").click(function(){
		$("#quote").fadeIn(2500);
		$("#theBox").fadeOut(2500, function(){
			$("#music")[0].play();
		});
	});
});