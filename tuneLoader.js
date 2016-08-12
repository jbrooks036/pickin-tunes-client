// this module loads the tunes 
//from the JSON file into tuneArray

var Pickin = (function (xhr) {
  'use strict';

  // all the code contained inside this 
  // "function (cb) {..." needs to be inside 
  // the "{ ... }" because otherwise 
  // e.g. the "cb(tuneArray)" call would get executed
  // before the JSON fetch happened. 

  console.log("tuneLoader:13");

  xhr.getAllTunes = function (cb) {

    console.log("tuneLoader.js:17/ xhr.getAllTunes(cb), cb = ", cb);

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

      console.log("tuneLoader.js:36/ xhr.getAllTunes(cb)/fetchAllTunes");

      var jsonObj = JSON.parse(this.responseText);

      var numTunes = jsonObj.length;
      for (var i = 0; i < numTunes; i++) {
        tuneArray.push(jsonObj[i]);
      }

      cb(tuneArray);
    } 
  }

  xhr.getTunesByArtist = function (cb, artistId) {

    console.log("tuneLoader.js:47/xhr.getTunesByArtist(cb), cb = ", cb);

    // an array to hold tunes 
    var tuneArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchTunesByArtist());

    // now do the actual load from JSON file
    var path = "http://localhost:5000/api/artist/" + artistId + "/tunes";
    console.log("path = ", path);
    loader.open(path);
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array for the callback
    function fetchTunesByArtist() {

      console.log("tuneLoader.js:72/ xhr.getTunesByArtist/fetchTunesBy Artist; this = "; this);

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