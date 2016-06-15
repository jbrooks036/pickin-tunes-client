// this module loads the tunes 
//from the JSON file into tuneArray

var Pickin = (function (xhr) {
  'use strict';

  console.log("tuneLoader.js:7 - Pickin = ", Pickin);
  console.log("tuneLoader.js:8 - xhr = ", xhr);

  // all the code contained in this 
  // "function (cb) {..." needs to be inside 
  // the "{ ... }" because otherwise 
  // e.g. the "cb(tuneArray)" call would get executed
  // before the JSON fetch happened. 
  xhr.getTunes = function (cb) {

    // an array to hold tunes 
    var tuneArray = [];

    // create a request to retrieve JSON 
    var loader = new XMLHttpRequest();

    // set up loader with callback function
    loader.addEventListener("load", fetchTunes);

    // now do the actual load from JSON file
    loader.open("GET", "tunes.json");
    loader.send();

    // function to extract tunes from JSON object 
    // and put it into a local (private) array ??
    function fetchTunes() {

      // get the json 
      var jsonObj = JSON.parse(this.responseText);

      // console.log("tuneLoader.js: 30 - jsonObj = ", jsonObj);

      var numTunes = jsonObj.tunes.length;

      for (var i = 0; i < numTunes; i++) {
        tuneArray.push(jsonObj.tunes[i]);
//        console.log("tuneLoader.js: 36 - tuneArray = ", tuneArray);
      }

      cb(tuneArray)
    }

  }

  // all done
  return xhr;

})(Pickin || {});