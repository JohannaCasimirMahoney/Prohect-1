$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAI2dDwoRrxUVA-gtYKr6I0HnyLRZh5HCQ",
    authDomain: "prohect-7f228.firebaseapp.com",
    databaseURL: "https://prohect-7f228.firebaseio.com",
    projectId: "prohect-7f228",
    storageBucket: "prohect-7f228.appspot.com",
    messagingSenderId: "790901056453"
  };
  firebase.initializeApp(config);
});
// $('.dropdown-toggle').dropdown()
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// Yelp API
var apiKey = "Mmic2d8wVdogrtxq2vDSeF44D35XjDRePYKnTd3DoYFJZgzxFP5eJKCwrUxMu8D53RSohe8VfuvnVvj9jSo30AUTo-KsSJnw4bG6MubT0HfshOsRUxymYSunnIXCXHYx";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
var queryUrl = "https://api.yelp.com/v3/businesses/search?location=" + "Sacramento"
// var place = $("#zipcode").val();
// console.log(place);
// Make the Yelp Fusion API call
$.ajax({
  beforeSend: function (xhr) {
    xhr.setRequestHeader("Authorization", "Bearer " + apiKey)
  },

  url: proxyUrl + queryUrl,
  method: "GET",

}).then(function (response) {
  console.log(response);

  console.log(response.events["0"].businesses_site_url);
  console.log(response.events["0"].image_url);
  console.log(response.events["0"].name);
  console.log(response.events["0"].description);

});

// Yelp responisve (search)
function searchmechanicInTown(business) {
  var apiKey = "Mmic2d8wVdogrtxq2vDSeF44D35XjDRePYKnTd3DoYFJZgzxFP5eJKCwrUxMu8D53RSohe8VfuvnVvj9jSo30AUTo-KsSJnw4bG6MubT0HfshOsRUxymYSunnIXCXHYx";

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var queryUrl = "https://api.yelp.com/v3/businesses/search?location=" + "Sacramento" + "&term=" + business;
  // var place = $("#zipcode").val();
  // console.log(place);
  // Make the Yelp Fusion API call
  $.ajax({
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + apiKey)
    },

    url: proxyUrl + queryUrl,
    method: "GET",

  }).then(function (response) {

    // Printing the entire object to console
    console.log(response);

    // Constructing HTML containing the artist information
    var businessName = $("<h1>").text(response.name);
    var businessURL = $("<a>").attr("href", response.url).append(businessName);
    var businessImage = $("<img>").attr("src", response.thumb_url);

    // Empty the contents of the artist-div, append the new artist content
    $("#cars").empty();
    $("#cars").append(businessURL, businessImage);
  });
}

// Event handler for user clicking the select-artist button
$(".search-btn").on("click", function (event) {

  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var inputBusiness = $("#cars").val().trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchmechanicInTown(inputBusiness);


});

// function to to call".then" functions