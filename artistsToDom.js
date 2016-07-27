// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  // populate both ArtistSelect pulldown menus at once 
  pickin.artistsToDom = function (artists) {
    console.log("artists = ", artists);
    var numArtists = artists.length;

    // get the SelectArtist elements
    var filterArtistSelect = document.getElementById("filter-select-artist");
    filterArtistSelect.options.length = 0;
    var addTuneArtistSelect = document.getElementById("add-tune-select-artist");
    addTuneArtistSelect.options.length = 0;

    // gen up options and artist index
    // html requires two separate options for two selects :-(
    var option1 = null;
    var option2 = null;
    var nextArtist = null;

    // loop through the array of artists and 
    // add artist as option to each Select element 
    for (var i=0; i < numArtists; i++)
    {
      var nextArtistName = artists[i].ArtistName;
      var nextArtistValue = artists[i].ArtistId;

      option1 = document.createElement("option");
      option1.value = nextArtistValue;
      option1.innerHTML = nextArtistName;
      filterArtistSelect.appendChild(option1);

      option2 = document.createElement("option");
      option2.value = nextArtistValue;
      option2.innerHTML = nextArtistName;
      addTuneArtistSelect.appendChild(option2);
    }
  }

  // artistSelect.selectedIndex
  // artistSelect.value

  // all done
  return pickin;
  
})(Pickin || {});