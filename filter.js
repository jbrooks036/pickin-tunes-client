(function () {
  'use strict';
  
  var filterSelectArtist = document.getElementById("filter-select-artist");

	// need to call Pickin.getArtists w/ a callback 
  // because JSON loads asynchronously
  Pickin.getArtists(Pickin.artistsToDom);

  filterSelectArtist.addEventListener("click", function() {

    console.log("filterSelectArtist.value = ", filterSelectArtist.value);

    Pickin.getTunesByArtist(Pickin.tunesToDom, filterSelectArtist.value);
  });

})();