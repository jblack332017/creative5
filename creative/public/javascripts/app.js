$(document).ready(function(){

	getReviews();

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
	$("#reviewContainer").css("display", "none");
	  });

     $("#cancelReview").click(function(){
     	$("#reviewContainer").css("display", "none");
     	getReviews();

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


     function getReviews(){
	    $.getJSON('../reviews/'+"Hot Rod", function(data) {
	      console.log(data);
	      everything = "";
	      for (review in data)
	      {
	      	name = data[review]['name'];
	      	reviewText = data[review]['review'];
	      	console.log(name+reviewText);
	      	everything += "<div class='reviewEntry' id='reviewEntry'><p>"+name+"</p><p>"+reviewText+"</p></div>";
	      }
	      $("#hotRodReview").html(everything);
	    })
	    $.getJSON('../reviews/'+"Beauty and the Beast", function(data) {
	      console.log(data);
	    })
	    $.getJSON('../reviews/'+"Nacho Libre", function(data) {
	      console.log(data);
	    })
	    $.getJSON('../reviews/'+"Sandlot", function(data) {
	      console.log(data);
	    })
	    $.getJSON('../reviews/'+"Hackers", function(data) {
	      console.log(data);
	    })
	    $.getJSON('../reviews/'+"Finding Nemo", function(data) {
	      console.log(data);
	    })

     }

});