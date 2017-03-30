$(document).ready(function(){

      $.getJSON('../reviews', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
      	console.log(comment);
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Review + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })


	});