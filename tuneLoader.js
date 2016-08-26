// this module loads the tunes 
//from the JSON file into tuneArray

var Pickin = (function (xhr) {
  'use strict';

  // all the code contained inside this 
  // "function (cb) {..." needs to be inside 
  // the "{ ... }" because otherwise 
  // e.g. the "cb(tuneArray)" call would get executed
  // before the JSON fetch happened. 

  console.log("tuneLoader.js:13; xhr = ", xhr);

  xhr.getAllTunes = function (cb) {

    console.log("tuneLoader.js:17; xhr.getAllTunes = function(cb).  cb = ", cb);
    // an array to hold tunes 
    var tuneArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchAllTunes);

    // now do the actual load from JSON file
    loader.open("GET", "http://localhost:5000/api/tune");
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array for the callback
    function fetchAllTunes() {

    console.log("tuneLoader.js:35 / inside fetchAllTunes()");

      var jsonObj = JSON.parse(this.responseText);

      var numTunes = jsonObj.length;
      for (var i = 0; i < numTunes; i++) {
        tuneArray.push(jsonObj[i]);
      }

      cb(tuneArray);
    } 
  }

  xhr.getTunesByArtist = function (cb, artistId) {

    console.log("tuneLoader.js:50; xhr.getTunesByArtist = function(cb, artistId).  cb = ", cb);
    console.log("tuneLoader.js:51; this = ", this);

    // an array to hold tunes 
    var tuneArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchTunesByArtist;

    // now set the path and do the actual load from JSON file
    var path = "http://localhost:5000/api/artist/" + artistId + "/tunes";
    console.log("tuneLoader.js:64 / path = ", path);
    loader.open("GET", path);
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array for the callback
    function fetchTunesByArtist() {

      console.log("tuneLoader.js:72; fetchTunesByArtist; this = ", this);

      var jsonObj = JSON.parse(this.responseText);

      var numTunes = jsonObj.length;
      for (var i = 0; i < numTunes; i++) {
        tuneArray.push(jsonObj[i]);
      }

      cb(tuneArray);
    }
  }

  // all done
  return xhr;

})(Pickin || {});