// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  pickin.artistsToDom = function (artists) {
    console.log("artists = ", artists);
    var numArtists = artists.length;

    var artistSelect = document.getElementById("select-artist");
    var option = null;
    var nextArtist = null;

    for (var i=0; i < numArtists; i++)
    {
      var nextArtist = artists[i].ArtistName;
      option = document.createElement("option");
      option.value = nextArtist;
      option.innerHTML = nextArtist;
      artistSelect.appendChild(option);
    }
  }

  // all done
  return pickin;
  
})(Pickin || {});