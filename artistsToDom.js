// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  // populate both ArtistSelect pulldown menus at once 
  pickin.artistsToDom = function (artists) {
    var numArtists = artists.length;

    // get the SelectArtist elements
    var filterArtistSelect = document.getElementById("filter-select-artist");
    filterArtistSelect.options.length = 0;
    var addTuneArtistSelect = document.getElementById("add-tune-select-artist");
    addTuneArtistSelect.options.length = 0;

    // gen up options and artist index
    // html requires two separate options for two selects :-(
    var filterOption = null;
    var addTuneOption = null;
    var nextArtist = null;

    // loop through the array of artists and 
    // add artist as option to each Select element 
    for (var i=0; i < numArtists; i++)
    {
      var nextArtistName = artists[i].ArtistName;
      var nextArtistValue = artists[i].ArtistId;

      filterOption = document.createElement("option");
      filterOption.value = nextArtistValue;
      filterOption.innerHTML = nextArtistName;
      filterArtistSelect.appendChild(filterOption);

      addTuneOption = document.createElement("option");
      addTuneOption.value = nextArtistValue;
      addTuneOption.innerHTML = nextArtistName;
      addTuneArtistSelect.appendChild(addTuneOption);
    }
  }

  // all done
  return pickin;
  
})(Pickin || {});