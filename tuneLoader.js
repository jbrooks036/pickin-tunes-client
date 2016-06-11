// this module loads the tunes 
//from the JSON file into tuneArray

var Pickin = (function (xhr) {

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

    console.log("jsonObj = ", jsonObj);

    var numTunes = jsonObj.tunes.length;

    for (i = 0; i < numTunes; i++) {
      tuneArray.push(jsonObj.tunes[i]);
      console.log("tuneArray = ", tuneArray);
    }

  }

  xhr.getTunes = function () {
    return tuneArray;
  }

  // all done
  return xhr;

})(Pickin || {});