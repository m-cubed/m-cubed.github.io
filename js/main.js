$(document).ready(function(){
   //All jQuery code

   $(".close, .hamburger").click(function(){
     $(".main-nav").toggleClass("open-nav");
   });
   $("li a").click(function(){
     $(".main-nav").toggleClass("open-nav");
   })

});
