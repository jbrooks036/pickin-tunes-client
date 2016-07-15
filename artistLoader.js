// this module loads the artists 
//from the JSON file into artistArray

var Pickin = (function (xhr) {
  'use strict';

  // all the code contained inside this 
  // "function (cb) {..." needs to be inside 
  // the "{ ... }" because otherwise 
  // e.g. the "cb(artistArray)" call would get executed
  // before the JSON fetch happened. 
  xhr.getArtists = function (cb) {

    // an array to hold artists 
    var artistArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchArtists);

    // now do the actual load from JSON file
    loader.open("GET", "http://localhost:5000/api/artist");
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array for the callback
    function fetchArtists() {

      var jsonObj = JSON.parse(this.responseText);

      var numArtists = jsonObj.length;
      for (var i = 0; i < numArtists; i++) {
        artistArray.push(jsonObj[i]);
      }

      cb(artistArray);
    }
    
  }

  // all done
  return xhr;

})(Pickin || {});