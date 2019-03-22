// GLOBAL VARIABLES; 21 TO HOLD API CALLS
/* var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
console.log(apiURL); */
var buttons = [];


// CREATE DYNAMIC BUTTONS
/* function makeButton() {
    $(".form-inline").empty();
    var newButton = $("<button>");
    newButton.addClass("btn");
    newButton.text("Click Me!");
    $(".form-inline").append(newButton);


} */


// DYNAMIC BUTTON MAKER
/* $("#button-addon2")
var dynoButton = $(".form-inline").on("click", function(event){
   event.preventDefault();
    var userButton = 
    
})

.val()
.trim(); */




// BUTTON CLICK THAT STORES <INPUT> VALUE INTO OBJECT, ADDS OBJECT TO API CALL, RETURNS JSON, APPENDS JSON TO WEBPAGE: THIS WORKS 03/20/2019
$("button").click(function gifButton(response){
 var userInput = $(".form-control").val().trim();
console.log(userInput);
// var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
var apiURL = `https://api.giphy.com/v1/gifs/search?api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&q=${userInput}&limit=10&offset=0&rating=G&lang=en`;
console.log(apiURL);
$.ajax({
    url: apiURL,
    method: "GET",
}).then(function(response) {
    $("#buttonHolder").prepend(` <button class="gifButton"> ${userInput} `)
    
 /*   $("#gifHolder").prepend(`
    <div class="showGif"> <img src="${response.data[0].images.original_still.url}"> </div>`); */
    console.log(response); 
})

$(".gifButton").on("click", function() {
    event.preventDefault();
    var grabGif = (".userButton").val().trim();
    gifButton(grabGif);
    $("#displayGif").prepend("Hi")
    
});

/* function makeButton() {

    $(".form-inline").empty();
    var newButton = $("<button>");
    newButton.addClass("btn");
    newButton.text("Click Me!");
    $(".form-inline").append(newButton);

} */

});


// DISPLAY GIPHY SEARCH RESULTS TO WEBPAGE
/* function displayButton (response) {
    $.ajax({
        url: apiURL,
        method: "GET",
    }).then(function(response) {
        $("#gifHolder").append(response.data)
    }); */



// DISPLAY GIPHY SEARCH RESULTS TO WEBPAGE
/* $("#gifHolder").on("click", function(event){
    event.preventDefault();

}) */


// AJAX API
/* $.ajax({
    url: apiURL,
    method: "GET",
}).then(function(response) {

}); */

// STORE VALUE OF INPUT FIELD: THIS WORKS 03/20/2019
/* var userInput = $(".form-control").val().trim();
console.log(userInput); */
