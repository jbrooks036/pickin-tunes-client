// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  pickin.artistsToDomFilter = function (artists) {
    console.log("artists = ", artists);
    var numArtists = artists.length;

    var artistSelect = document.getElementById("filter-select-artist");
    artistSelect.options.length = 0;

    var option = null;
    var nextArtist = null;

    for (var i=0; i < numArtists; i++)
    {
      var nextArtistName = artists[i].ArtistName;
      var nextArtistValue = artists[i].ArtistId;
      option = document.createElement("option");
      option.value = nextArtistValue;
      option.innerHTML = nextArtistName;
      artistSelect.appendChild(option);
      console.log(option);
    }
  }

  // artistSelect.selectedIndex
  // artistSelect.value

  // all done
  return pickin;
  
})(Pickin || {});