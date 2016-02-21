$(document).ready(function() {
 
  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('header').toggleClass("fixed", (fromTop > 60));

    $('#gheader').toggleClass("big", (fromTop > 60));

    $('#gap').toggleClass("moveup", (fromTop > 590));
    $('#Info').toggleClass("moveup2", (fromTop > 590));
    $('#Info').toggleClass("change", (fromTop > 647));

    $('#gap2').toggleClass("moveup", (fromTop > 1200));
  	$('#Testimo').toggleClass("moveup2", (fromTop > 1200));
  
  	$('#gap3').toggleClass("moveup", (fromTop > 1850));
  	$('#Aboutus').toggleClass("moveup2", (fromTop > 1850));
  
  });

});
