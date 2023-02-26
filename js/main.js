// jquery code
$(document).ready(function(){
    // nav scrool
$("header .navbar-nav li  a ").click(function(){
   var id= $(this).attr('id');
  
   $("body,html").animate({
       scrollTop:$( "." + id ).offset().top -100
   })
})

//active clss 
$("header .navbar-nav li  a ").click(function(){
    
    $(this).addClass("active").parent().siblings().find("a").removeClass("active");
   
  
 })


})
