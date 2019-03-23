 // GLOBAL VARIABLES; 21 TO HOLD API CALLS
/* var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
console.log(apiURL); */
var topics = ["Rick+and+Morty", "Bobs+Burgers", "Its+Always+Sunny+in+Philadelphia", "Workaholics", "Game+of+Thrones", "That+70s+Show"];

// CREATE DYNAMIC BUTTONS
/* function makeButton() {
    $(".form-inline").empty();
    var newButton = $("<button>");
    newButton.addClass("btn");
    newButton.text("Click Me!");
    $(".form-inline").append(newButton);
} */

// BUTTON CLICK THAT STORES <INPUT> VALUE INTO OBJECT, ADDS OBJECT TO API CALL, RETURNS JSON, APPENDS JSON TO WEBPAGE: THIS WORKS 03/20/2019
$("button").click(topics, function () {
 var userInput = $(this).attr("show-data")
// var makeButton = $(".form-control").val().trim();
 // var userTopic = $(this).attr("data-name"); THIS WOULD WORK WITH DIFFERENT METHOD FOR A DIFFERENT METHOD
console.log(userInput);
// var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
// var apiURL = `https://api.giphy.com/v1/gifs/search?api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&q=${userInput}&limit=10&offset=0&rating=G&lang=en`;
var apiURL = `https://api.giphy.com/v1/gifs/search?api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&q=${userInput}&limit=10&offset=0&rating=G&lang=en`;
console.log(apiURL);
$.ajax({
    url: apiURL,
    method: "GET",
}).then(function(response) {
    var showGIFS = response.data;
    for (i = 0; i < showGIFS.length; i++) {
    $("#buttonHolder").empty();
    var gifButton = $("<button>");
    gifButton.attr("show-data");
    $("#buttonHolder").prepend(` <button type="button"> ${gifButton} `)
 //  alert("weeee!");
   $("#displayGif").prepend(`
    <div class="showGif"> <img src="${response.data[0].images.original_still.url}"> </div>`); 
    console.log(response); 
};
});


/* $(".gifButton").on("click", function() {
    event.preventDefault();
    var grabGif = (".userButton").val().trim();
    gifButton(grabGif);
    $("#displayGif").prepend("Hi") */

});

/* function makeButton() {
    $(".form-inline").empty();
    var newButton = $("<button>");
    newButton.addClass("btn");
    newButton.text("Click Me!");
    $(".form-inline").append(newButton);
} */



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
