(function () {
  'use strict';
  
  var filterSelectArtist = document.getElementById("filter-select-artist");

	// need to call Pickin.getArtists w/ a callback 
  // because JSON loads asynchronously
  Pickin.getArtists(Pickin.artistsToDom);

  filterSelectArtist.addEventListener("click", function() {

    Pickin.getArtists(Pickin.artistsToDom);
  });

})();