$(document).ready(function () {//start the page
//////////////////////////////////////////////////////////////////
	//Caching The Scroll Element
var scrollButton = $("#scroll-top")
 
 $(window).on("scroll",function () {
   $(this).scrollTop()>=250 ? scrollButton.show() : scrollButton.hide();
 });

 scrollButton.click(function () {
 //Click To Button To Scroll Up 
   $("html,body").animate({scrollTop:0},250);
  });

////////////////////////////////////////////////////////////////
});//end the page
///////////////////////////////////////////////////////////////
//loading screen
$(window).on('load', function () {

	$(".loading-overlay .spinner").fadeOut(1000 , function () {
		//To Show Scroll
		$("body").css("overflow" , "auto");
        $(this).parent().fadeOut(1000 , function () {
        $(this).remove();
        });

	});
});