$(document).ready(function() {

	$("#results").hide();

   $("#showresults").click(function(){
    	$("#results").show();
    	$(".content").hide();

  	});

   $("#switch").click(function(){
  		$("#results").hide();
  		$(".content").show();
  	});

});