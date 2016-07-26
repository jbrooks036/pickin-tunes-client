// this module loads the tunes 
//from the tunes array into the DOM

var Pickin = (function (pickin) {
  'use strict';

  pickin.artistsToDom = function (artists) {
    console.log("artists = ", artists);
    var numArtists = artists.length;

    var filterArtistSelect = document.getElementById("filter-select-artist");
    filterArtistSelect.options.length = 0;
    var addTuneArtistSelect = document.getElementById("add-tune-select-artist");
    addTuneArtistSelect.options.length = 0;

    var option1 = null;
    var option2 = null;
    var nextArtist = null;

    for (var i=0; i < numArtists; i++)
    {
      var nextArtistName = artists[i].ArtistName;
      var nextArtistValue = artists[i].ArtistId;

      option1 = document.createElement("option");
      option1.value = nextArtistValue;
      option1.innerHTML = nextArtistName;

      console.log("option1 = ", option1);
      filterArtistSelect.appendChild(option1);
      console.log("filterArtistSelect = ", filterArtistSelect);

      option2 = document.createElement("option");
      option2.value = nextArtistValue;
      option2.innerHTML = nextArtistName;

      console.log("option2 = ", option2);
      addTuneArtistSelect.appendChild(option2);
      console.log("addTuneArtistSelect = ", addTuneArtistSelect);

      // console.log(option);
    }
  }

  // artistSelect.selectedIndex
  // artistSelect.value

  // all done
  return pickin;
  
})(Pickin || {});