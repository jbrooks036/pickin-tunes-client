(function () {
  'use strict';
  
  var filterSelectArtist = document.getElementById("filter-select-artist");

	// need to call Pickin.getArtists w/ a callback 
  // because JSON loads asynchronously
  console.log("filter.js:8, calling Pickin.getArtists(Pickin.artistsToDom) ");
  Pickin.getArtists(Pickin.artistsToDom);

  filterSelectArtist.addEventListener("click", function() {

    console.log("filter.js:13/filterSelectArtist.value = ", filterSelectArtist.value);

    Pickin.getTunesByArtist(Pickin.tunesToDom, filterSelectArtist.value);
  });

})();