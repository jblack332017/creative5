$(document).ready(function(){

     $("#postReview").click(function(){
      var myobj = {name:$("#name").val(),review:$("#review").val(),movie:$("#movie").text()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
	var url = "../reviews";
	$.ajax({
	url:url,
	type: "POST",
	data: jobj,
	contentType: "application/json; charset=utf-8",
	success: function(data,textStatus) {
	    $("#done").html(textStatus);
	}
	})
	  });

     $("#cancelReview").click(function(){
     	$("#reviewContainer").css("display", "none");

     });



     $("#hotRod").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("Hot Rod");

     });
     $("#beauty").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("Beauty and the Beast");

     });
     $("#hackers").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("Hackers");

     });
     $("#finding").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("Finding Nemo");

     });
     $("#nacho").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("Nacho Libre");

     });
     $("#sand").click(function(){
     	$("#reviewContainer").css("display", "block");
     	$("#movie").text("The Sandlot");

     });

});