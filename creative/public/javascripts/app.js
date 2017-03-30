$(document).ready(function(){

      var myobj = {Name:Josh,Comment:$Test};
      jobj = JSON.stringify(myobj);

      var url = "../addComment";
$.ajax({
url:url,
type: "POST",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
}
})
  

	$.getJSON('../reviews', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Name: " + com.Name + " -- Comment: " + com.Review + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })


	});