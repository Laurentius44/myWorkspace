$("h1").addClass("big-title");
$("button")
$("body").css("background-color", "white");

$("a").attr("href", "https://www.yahoo.com");
//On input event, display the value of the input in the console
$("input").keypress(function(event){
    console.log(event.key);
})
// On keypress event, change the text of h1 to the key pressed
$(document).keypress(function(event){
    $("h1").text(event.key);
})
// On click event, change the color of h1 to purple
$("h1").on("click", function(){
$("h1").css("color", "purple");
});

//On click event, slide down the h1 h1
 $("button").on("click", function(){
    $("h1").slideDown();
 })