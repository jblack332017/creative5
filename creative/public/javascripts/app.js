$(document).ready(function(){

      $.getJSON('../reviews', function(data) {
      console.log(data);
      jobj = JSON.stringify(data);
      console.log(jobj);


    })


	});