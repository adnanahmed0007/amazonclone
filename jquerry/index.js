$("h1").addClass("big margin")

console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");
$("h1").text("hell")
console.log($("h1").attr("class"))
$("button").click(function(){
    $(".box").css("color","blue")

    $("h1").css("color","green")


})
$(document).keypress(function(event){
    $("h1").text(event.key)

})
$("h1").mouseover(function(){
    $("h1").css("color","violet")
});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:"50%"});
})