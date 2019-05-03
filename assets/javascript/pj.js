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

// Mapquest map 
window.onload = function () {
  L.mapquest.key = 'AtUKM1K0D2W4igYqGy89ehVyWDXNUitF';

  var map = L.mapquest.map('map', {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  L.marker([37.7747, -122.4192], {
    icon: L.mapquest.icons.marker(),
    draggable: false
  }).bindPopup('San Francisco, CA').addTo(map);
  L.circle([37.7749, -122.4194], { radius: 10000 }).addTo(map);
  map.addControl(L.mapquest.control());


}

var mapKey = "AtUKM1K0D2W4igYqGy89ehVyWDXNUitF"
//const proxyUrl = "https://cors-anywhere.herokuapp.com/";
var queryUrl = "https://www.mapquestapi.com/search/v2/radius?origin=Denver,+CO&radius=0.15&maxMatches=3&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=" + mapKey;
// var place = $("#zipcode").val();
// console.log(place);
// Make the Yelp Fusion API call
$.ajax({
  // beforeSend: function (xhr) {
  //   xhr.setRequestHeader("Authorization", "Bearer " + apiKey)
  // },

  url: queryUrl,
  method: "GET",

}).then(function (response) {
  console.log(response);

  console.log(response.events["0"].event_site_url);
  console.log(response.events["0"].image_url);
  console.log(response.events["0"].name);
  console.log(response.events["0"].description);

});



// Yelp API
var apiKey = "Mmic2d8wVdogrtxq2vDSeF44D35XjDRePYKnTd3DoYFJZgzxFP5eJKCwrUxMu8D53RSohe8VfuvnVvj9jSo30AUTo-KsSJnw4bG6MubT0HfshOsRUxymYSunnIXCXHYx";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
var queryUrl = "https://api.yelp.com/v3/businesses/search?location=" + "San Francisco"
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
  var queryUrl = "https://api.yelp.com/v3/businesses/search?location=" + "San Francisco" + "&term=" + business;
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

/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for YELP API based on form inputs
 */
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.yelp.com/v3/businesses/search?location="

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "api-key": "Mmic2d8wVdogrtxq2vDSeF44D35XjDRePYKnTd3DoYFJZgzxFP5eJKCwrUxMu8D53RSohe8VfuvnVvj9jSo30AUTo-KsSJnw4bG6MubT0HfshOsRUxymYSunnIXCXHYx" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term")
    .val()
    .trim();

  // If the user provides a startYear, include it in the queryParams object
  var startYear = $("#start-year")
    .val()
    .trim();

  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }

  // If the user provides an endYear, include it in the queryParams object
  var endYear = $("#end-year")
    .val()
    .trim();

  if (parseInt(endYear)) {
    queryParams.end_date = endYear + "0101";
  }

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing YELP API data
 */
function updatePage(YELPData) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  var numBusinesses = $("#business-count").val();

  // Log the YELPData to console, where it will show up as an object
  console.log(YELPData);
  console.log("------------------------------------");

  // Loop through and build elements for the defined number of business
  for (var i = 0; i < numBusinesses; i++) {
    // Get specific businese info for current index
    var businese = YELPData.response.docs[i];

    // Increase the busineseCount (track businese # - starting at 1)
    var busineseCount = i + 1;

    // Create the  list group to contain the businese and add the businese content for each
    var $busineseList = $("<ul>");
    $busineseList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#businese-section").append($busineseList);

    // If the article has a headline, log and append to $articleList
    var busineseline = businese.headline;
    var $busineseListItem = $("<li class='list-group-item busineseHeadline'>");

    if (busineseline && businese.main) {
      console.log(businese.main);
      $busineseListItem.append(
        "<span class='label label-primary'>" +
        busineseCount +
        "</span>" +
        "<strong> " +
        businese.main +
        "</strong>"
      );
    }

    // If the businese has a byline, log and append to $busineseList
    var byline = businese.byline;

    if (byline && byline.original) {
      console.log(byline.original);
      $busineseListItem.append("<h5>" + byline.original + "</h5>");
    }

    // Log section, and append to document if exists
    var section = businese.section_name;
    console.log(businese.section_name);
    if (section) {
      $busineseListItem.append("<h5>Section: " + section + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = businese.pub_date;
    console.log(businese.pub_date);
    if (pubDate) {
      $busineseListItem.append("<h5>" + businese.pub_date + "</h5>");
    }

    // Append and log url
    $busineseListItem.append("<a href='" + businese.web_url + "'>" + businese.web_url + "</a>");
    console.log(businese.web_url);

    // Append the businese
    $busineseList.append($busineseListItem);
  }
}

// Function to empty out the businese
function clear() {
  $("#businese-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$('document').ready(function () {
  $('#search-box').click(function () {
    var search = $('#carsSearch').val();
    $.post('../searchcars.php', { search: search }, function (response) {
      $('#carsSearchResultsTable').html(response);
    });
  })
  $('#carsSearch').keypress(function (e) {
    if (e.which == 13) {//Enter key pressed
      $('#search-box').click();//Trigger search button click event
    }
  });

});