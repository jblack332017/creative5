$(document).ready(function(){

      $.getJSON('../reviews', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
      	console.log(comment);
        com = data[comment];
        console.log(com);
        for (var item in com)
        {
        	console.log(item);
        }
        jobj = JSON.stringify(myobj);
        console.log(jobj);
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Review + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })


	});