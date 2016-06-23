// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  console.log("tunesToDom.js:7 - Pickin = ", Pickin);
  console.log("tunesToDom.js:8 - pickin = ", pickin);

  pickin.tunesToDom = function (tunes) {

    console.log("tunesToDom.js:12 - tunes = ", tunes);

    var tunesTable = document.getElementById("tunes-table");
    var numTunes = tunes.length;
    // var cumTable = "<thead><tr><th>Id</th><th>Artist</th><th>Title</th><th>Album</th></tr></thead>";
    var cumTable = "<thead><tr><th>Id</th><th>Title</th></tr></thead>";

    // populate table
    for (var i = 0; i < numTunes; i++)
    {
      console.log("tunes[i] = ", i, tunes[i]);
      var tableRow = "<tr><td>" + tunes[i].TuneId
        // + "</td><td>"
        // + tunes[i].artist
        + "</td><td>"
        + tunes[i].TuneTitle
        // + "</td><td>"
        // + tunes[i].album
        + "</td></tr>";
      console.log("tableRow[i] = ", i, tunes[i]);
      cumTable += tableRow;

    }

    tunesTable.innerHTML = cumTable;
  }

  // all done
  return pickin;
  
})(Pickin || {});