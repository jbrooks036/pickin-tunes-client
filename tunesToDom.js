// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  console.log("tunesToDom.js:7 - Pickin = ", Pickin);
  console.log("tunesToDom.js:8 - pickin = ", pickin);

  pickin.tunesToDom = function (tunes) {

    console.log("tunesToDom.js:12 - tunes = ", tunes);

    var tunesTable = document.getElementById("tunes-table");
    var cumTable = "";
    var numTunes = tunes.length;

    for (var i = 0; i < numTunes; i++)
    {
      console.log("tunes[i] = ", i, tunes[i]);
      var tableRow = "<tr><td>" + tunes[i].id
        + "</td><td>"
        + tunes[i].artist
        + "</td><td>"
        + tunes[i].title
        + "</td><td>"
        + tunes[i].album
        + "</td></tr>";
      console.log("tableRow[i] = ", i, tunes[i]);
      cumTable += tableRow;
    }

    tunesTable.innerHTML = cumTable;
  }

  // all done
  return pickin;

})(Pickin || {});