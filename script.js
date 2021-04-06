$(document).on("click", "#menu_about", function(){

	$("#content_about").fadeIn("slow");
  $("#content_about").siblings().fadeOut("fast");

});

$(document).on("click", "#menu_education", function(){

	$("#content_education").fadeIn("slow");
  $("#content_education").siblings().fadeOut("fast");

});

$(document).on("click", "#menu_contact", function(){

	$("#content_contact").fadeIn("slow");
  $("#content_contact").siblings().fadeOut("fast");

});

$("#menu_about").click();