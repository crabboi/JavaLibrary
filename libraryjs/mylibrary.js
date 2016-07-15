$(document).ready(function(){
	// $ is used to begin selecting elements and ready to prepare the jq
	//$(document).ready(function()
	// Using ('') after $ will make it an argument
	alert('The document is ready');
	$('body').slideDown(100000);
	// Use () with a number inside to define the number
	$('h6').hide(2000);
	//this is hide, which causes the selected blocks to be hidden
	$(function() {
   		var t = 25;
   		setInterval( function(){
       $('p').fadeOut( t, function(){ $(this).fadeIn( t ); } );
   }, 2*t);
});
	$(function() {
		//You can use comments by entering //
   		var t = 25;
   		setInterval( function(){
       $('img').fadeOut( t, function(){ $(this).fadeIn( t ); } );
   }, 2*t);
});
});
//By using }); you can end the function currently being used