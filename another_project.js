$(document).ready(function(){
	$("nav i").click(function(){
		if ($("nav>ul").attr("class")=="") {
			$("nav>ul").attr("class" , "nav-bar");
		}
		else{
		$("nav>ul").attr("class" , "");
		}
		$(".main").mousedown(function(){
			$("nav>ul").attr("class" , "nav-bar");

		});
	});
});