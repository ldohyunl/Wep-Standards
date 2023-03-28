$(function(){
  $("p").click(function(){
      $(this).hide();
  });
  
  // add
  $("ul.red li").add("p.red").css("color", "red");

  // addBack
  $("div.prev").find("p.ip").addBack().addClass("abc");

  $("h1.ac").addClass("bg");
  $("h2.ac").addClass("bg bd");
});


