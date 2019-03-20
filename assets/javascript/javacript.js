// GLOBAL VARIABLES; 21 TO HOLD API CALLS
/* var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
console.log(apiURL); */

// BUTTON CLICK THAT STORES <INPUT> VALUE INTO OBJECT, ADDS OBJECT TO API CALL, RETURNS JSON
$(".btn").click(function(){
 //   alert("Yep!");
 var userInput = $(".form-control").val().trim();
console.log(userInput);
var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=U6Zjyt5eoaIP28XWjbXBq7mRgSYfEBlZ&limit=5";
console.log(apiURL);

});

// AJAX API
/* $.ajax({
    url: apiURL,
    method: "GET",
}).then(function(response) {

}); */

// STORE VALUE OF INPUT FIELD: THIS WORKS 03/20/2019
/* var userInput = $(".form-control").val().trim();
console.log(userInput); */
