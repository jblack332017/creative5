$(document).ready(function(){

      var myobj = {name:"#name",review:"#comment"};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
	var url = "../reviews";
$.ajax({
url:url,
type: "POST",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
}
})


	});