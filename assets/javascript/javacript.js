// GLOBAL VARIABLES; 21 TO HOLD API CALLS
/* var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
console.log(apiURL); */
var topics = ["Rick+and+Morty", "Bobs+Burgers", "Its+Always+Sunny+in+Philadelphia", "That+70s+Show", "Workaholics", "Key+Peele", "Atlanta"];


// BUTTON CLICK THAT GENERATES DYNAMIC BUTTONS: THIS WORKS 03/23/2019
 $("body").on("click", "button", function() {
    $("#buttonHolder").empty();
    for (i = 0; i <topics.length; i++) {
        console.log(topics[i]);
    var t = $("<button>")
    t.addClass("button");
    t.attr("button-click");
    t.text(topics[i]);
    $("#buttonHolder").append(t);
 }
})
$("button").on("click", function(){
    for (i = 0; i < topics.length; i++) {
    var apiURL = `https://api.giphy.com/v1/gifs/search?api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&q= ${topics[i]} &limit=10&offset=0&rating=G&lang=en`;
    $.ajax({
        url: apiURL,
        method: "GET",
    }).then(function(apiCall) {
     //   var gifHolder = $("<div> <img> </div>")
     //   var gifMaker = apiCall.data[0].bitly_gif_url;
      //  gifHolder.attr(apiCall.data[0].bitly_gif_ur);
    //    $("#displayGif").append("src", apiCall.data[0].bitly_gif_ur);
        console.log(apiCall.data[0].images.downsized_medium.url);
        $("#displayGif").prepend(` <div class="showGif"> <img src="${apiCall.data[0].images.downsized_medium.url}"> </div> `); 
        
    })
}
})
// $.ajax({
//     url: apiURL,
//     method: "GET",
// }).then(function(response) {
//     for (i = 0; i <topics.length; i++) {
//         console.log(topics[i]); 
//     $("#buttonHolder").empty();

//     }
//     });
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[1]} `);
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[2]} `);
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[3]} `)
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[4]} `)
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[5]} `)
    // $("#buttonHolder").append(` <button class="btn bg-warning" type="button"> ${topics[6]} `)

//    $("#displayGif").prepend(`
//     <div class="showGif"> <img src="${response.data[0].images.original_still.url}"> </div>); 
//     <div class="showGif"> <img src="${response.data[1].images.original_still.url}"> </div>); 
//     <div class="showGif"> <img src="${response.data[2].images.original_still.url}"> </div>`); 
//     console.log(response[i]); 
//     });

/* $(".gifButton").on("click", function() {
    event.preventDefault();
    var grabGif = (".userButton").val().trim();
    gifButton(grabGif);
    $("#displayGif").prepend("Hi") */



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