$(document).ready(function(){

      $.getJSON('../reviews', function(data) {
      console.log(data);
      var everything = "<ul>";
      console.log(data[1]);
      everything += "</ul>";
      $("#comments").html(everything);
    })


	});