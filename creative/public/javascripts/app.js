$(document).ready(function(){

     $("#postReview").click(function(){
      var myobj = {name:$("#name").val(),review:$("#review").val(),movie:$("#movie").val()};
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


	});