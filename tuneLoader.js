// this module loads the tunes 
//from the JSON file into tuneArray

var Pickin = (function (xhr) {
  'use strict';

  // all the code contained inside this 
  // "function (cb) {..." needs to be inside 
  // the "{ ... }" because otherwise 
  // e.g. the "cb(tuneArray)" call would get executed
  // before the JSON fetch happened. 


  xhr.getAllTunes = function (cb) {

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

      var jsonObj = JSON.parse(this.responseText);

      var numTunes = jsonObj.length;
      for (var i = 0; i < numTunes; i++) {
        tuneArray.push(jsonObj[i]);
      }

      cb(tuneArray);
    } 
  }

  xhr.getTunesByArtist = function (cb, artistId) {

    // an array to hold tunes 
    var tuneArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchTunesByArtist());

    // now do the actual load from JSON file
    // ***** THIS NEEDS TO HAVE THE ARTIST INCLUDED AS PARAMETER
    loader.open("GET", "http://localhost:5000/api/artist/" + artistId + "/tunes");
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array for the callback
    function fetchTunesByArtist() {

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