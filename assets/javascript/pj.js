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


// Yelp API
// "use strict";

var apiKey = "Mmic2d8wVdogrtxq2vDSeF44D35XjDRePYKnTd3DoYFJZgzxFP5eJKCwrUxMu8D53RSohe8VfuvnVvj9jSo30AUTo-KsSJnw4bG6MubT0HfshOsRUxymYSunnIXCXHYx";

// var place = $("#zipcode").val();
// console.log(place);

place = "Sacramento";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
var queryUrl = "https://api.yelp.com/v3/events?location=" + place;

$.ajaxSetup({
  beforeSend: function (xhr) {
    { xhr.setRequestHeader("Authorization", "Bearer " + apiKey) };
  }
});

// Creating an AJAX call for the specific giphy button being clicked
$.ajax({
  url: proxyUrl + queryUrl,
  method: "GET"
}).then(function (response) {
  console.log(response);
});